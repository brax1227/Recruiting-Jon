/* ===================================================================
   Cruit Lab — site behavior
   =================================================================== */

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
// Close the mobile menu after a link is tapped
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);

/* -------------------------------------------------------------------
   Intake form

   This is a front-end-only handler so the site works the moment you
   open it. To actually RECEIVE submissions, wire it to a backend:

     Option A — Formspree (no server, ~2 min):
       1. Create a free form at https://formspree.io
       2. Set FORM_ENDPOINT below to your endpoint
          (e.g. "https://formspree.io/f/abcdwxyz")

     Option B — your own email handler / Netlify Forms / etc.

   If FORM_ENDPOINT is null, the form falls back to opening the user's
   email client with the details pre-filled (mailto), so nothing is lost.
------------------------------------------------------------------- */

const FORM_ENDPOINT = null;            // <-- paste your Formspree URL here
const CONTACT_EMAIL = 'info@cruitlab.com'; // <-- your real inbox

const form = document.getElementById('intakeForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  note.className = 'form__note';
  note.textContent = '';

  const name = form.name.value.trim();
  const email = form.email.value.trim();

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    note.classList.add('err');
    note.textContent = 'Please enter your name and a valid email.';
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());

  // Option A: POST to a configured endpoint
  if (FORM_ENDPOINT) {
    try {
      note.textContent = 'Sending…';
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      note.classList.add('ok');
      note.textContent = "Got it — we'll be in touch soon. 🏈";
    } catch (err) {
      note.classList.add('err');
      note.textContent = 'Something went wrong. Email us directly at ' + CONTACT_EMAIL + '.';
    }
    return;
  }

  // Option B fallback: open the user's email client with details filled in
  const subject = encodeURIComponent(`Cruit Lab evaluation request — ${name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Player: ${data.player || '(self)'}\n` +
    `Position: ${data.position || '-'}\n` +
    `Level: ${data.level || '-'}\n` +
    `Program: ${data.program || '-'}\n` +
    `Film: ${data.film || '-'}\n\n` +
    `Goals:\n${data.goals || '-'}\n`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  note.classList.add('ok');
  note.textContent = 'Opening your email app to finish sending…';
});
