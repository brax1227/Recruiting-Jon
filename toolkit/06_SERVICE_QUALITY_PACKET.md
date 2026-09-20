# Cruit Lab — Service-Quality Packet (Internal QA)

> **INTERNAL QUALITY ASSURANCE ONLY — NOT A DELIVERABLE.** Everything here is
> **wholly fictional**: invented player, invented clips, invented timestamps.
> **No real athlete data, no real video, no scraping, no outreach.** Fabricated
> clip references and timestamps below are a notation convention only — they do
> **not** refer to any real footage.
>
> Status: scaffold, free-only, pre-approval. The **hard stop** in
> [`05_PROVISIONAL_SERVICE_AND_WORKFLOW.md`](./05_PROVISIONAL_SERVICE_AND_WORKFLOW.md)
> still governs: no external delivery or real intake until its gate is cleared.
> Pricing stays **hypothetical**. This packet raises the quality of the
> provisional Film Evaluation offer; it reuses the report template in
> [`02_FILM_EVALUATION_REPORT.md`](./02_FILM_EVALUATION_REPORT.md) rather than
> replacing it.

---

## 1. Purpose & trace

Standardize evaluation **quality** so that, *if and when* approvals and consent
are ever obtained, an evaluation is factually grounded, actionable, and honest.

- **Traces to:** the provisional Film Evaluation service (offer + workflow in
  `05_...md`), delivered on the report template in `02_...md`.
- **Adds:** an evidence-classification discipline, worked + poor samples, a
  review checklist, and a reviewer acceptance table.

**Guardrails baked into this packet (do not remove):**
- No scholarship or recruiting-outcome promises.
- No employment/legal/compliance-clearance claims.
- No numeric talent ranking unless it is traceable to stated observations — and
  even then it is marked *illustrative*, never a guarantee.
- Every fabricated clip reference is labeled fictional.

---

## 2. Evidence-classification rubric (reusable)

Classify **every** statement in an evaluation as one of three types:

| Type | Definition | Requirement |
|---|---|---|
| **OBSERVED** | Directly visible on a specific clip | Must cite a clip reference |
| **INFERENCE** | Coach's interpretation drawn from observed items | Must point to ≥1 OBSERVED item |
| **UNKNOWN** | Not determinable from available film | State it plainly; do not guess |

**Clip reference notation (fictional):** `[Clip A · 0:12 — INVENTED]`. This is a
pointer to evidence, not a claim about real video.

**Rules**
1. No inference without a cited observation behind it.
2. Unknowns are declared, never filled with speculation.
3. No outcome language ("will get a D1 offer," "guaranteed starter").
4. Any rating is *derived from* and *traceable to* observed items, and labeled
   illustrative — not a ranking of the player against real peers.
5. Physical/measurable claims (speed, size) are UNKNOWN unless observed or
   verified; "looks fast on film" is an INFERENCE, not a measurement.

---

## 3. Worked sample — GOOD (fictional)

> Fictional player "Alex Reel." All clips invented. Reuses the trait categories
> from `02_FILM_EVALUATION_REPORT.md` (Release vs. press, Route detail,
> Separation, Hands, YAC, Speed, Blocking, Football IQ).

**Position:** WR · **Film reviewed:** 3 invented clips (`Clip A`, `Clip B`, `Clip C`)

| Statement | Type | Evidence |
|---|---|---|
| Catches away from frame with hands on a low throw | OBSERVED | `[Clip A · 0:12 — INVENTED]` |
| Reliable hands in a contested/low-ball situation | INFERENCE | from Clip A observation |
| Gets stuck ~1 count vs. a press jam before releasing | OBSERVED | `[Clip B · 0:03 — INVENTED]` |
| Press release needs work vs. physical corners | INFERENCE | from Clip B observation |
| Rounds the top of a deep dig instead of a sharp break | OBSERVED | `[Clip C · 0:21 — INVENTED]` |
| Timed/track speed | UNKNOWN | not testable from these clips |
| Reads leverage pre-snap | UNKNOWN | camera angle doesn't show pre-snap alignment |

**Summary (honest, no promises):** On the invented film, Alex shows secure hands
(OBSERVED) and route effort, with two clear development areas — press release and
sharpness out of deep breaks (OBSERVED → INFERENCE). Speed and coverage-reading
are UNKNOWN and need more film. **90-day focus:** release package, break
mechanics, coverage-ID study. *No level projection is made without more film and
verified measurables.*

*Illustrative rating (optional):* "Route detail: developing" — a qualitative
label tied to the Clip C observation, **not** a numeric rank against real peers.

---

## 4. Intentionally POOR sample + annotated correction

**Poor version (what NOT to write):**
> "Alex is a legit D1 receiver. Elite 4.4 speed, best hands in the class, a 9/10
> talent. At 1:15 you can see why colleges will be lining up to offer him."

**Annotated problems:**

| Excerpt | Problem | Rule broken |
|---|---|---|
| "legit D1 receiver" | Recruiting-outcome projection with no evidence | Rule 3 |
| "colleges will be lining up to offer" | Scholarship/outcome promise | Rule 3 / guardrail |
| "Elite 4.4 speed" | Measurement stated as fact; not observed/verified | Rule 5 |
| "best hands in the class" | Ranking vs. peers with no basis | Rule 4 |
| "9/10 talent" | Numeric ranking not traceable to observations | Rule 4 |
| "At 1:15 you can see why…" | Implies real film + conclusion not supported | Rule 1 / notation |

**Corrected version:**
> "On the invented film, Alex shows secure hands on a low throw
> `[Clip A · 0:12 — INVENTED]` (OBSERVED), suggesting reliable hands in that
> situation (INFERENCE). Timed speed is UNKNOWN from this film. No level or
> recruiting projection is made without more film and verified measurables."

---

## 5. Review checklist (run before any evaluation is considered acceptable)

**Factual support**
- [ ] Every OBSERVED claim cites a clip reference.
- [ ] Every INFERENCE points to ≥1 OBSERVED item.
- [ ] No measurement (speed/size) stated as fact unless observed/verified.

**Actionable coaching feedback**
- [ ] At least one concrete, trainable development item per weakness.
- [ ] Feedback ties to a specific observation, not a generic tip.

**Uncertainty handling**
- [ ] UNKNOWNs are declared where film is insufficient.
- [ ] No guesses fill gaps; no outcome/scholarship promises.

**Consistency**
- [ ] Summary matches the per-statement classifications (no strength/weakness that isn't supported above).
- [ ] Any rating is qualitative or clearly traceable + labeled illustrative.
- [ ] Trait categories match `02_FILM_EVALUATION_REPORT.md` (no ad-hoc criteria).

---

## 6. Reviewer acceptance table (prose adjudication — not code tests)

Applying Section 5 to the sample claims above:

| # | Claim | Source | Verdict | Why |
|---|---|---|---|---|
| 1 | "Secure hands on a low throw" (cites Clip A) | Good sample | **PASS** | OBSERVED with clip ref |
| 2 | "Press release needs work" (from Clip B) | Good sample | **PASS** | INFERENCE tied to an observation |
| 3 | "Timed speed: UNKNOWN" | Good sample | **PASS** | Uncertainty correctly declared |
| 4 | "Legit D1 receiver" | Poor sample | **FAIL** | Outcome projection, no evidence (Rule 3) |
| 5 | "Elite 4.4 speed" | Poor sample | **FAIL** | Measurement asserted, unobserved (Rule 5) |
| 6 | "9/10 talent" | Poor sample | **FAIL** | Numeric rank not traceable to observations (Rule 4) |
| 7 | "Colleges will be lining up to offer" | Poor sample | **FAIL** | Scholarship promise (guardrail) |

*This adjudicates prose claims for evidentiary support; it is not an automated
test suite.*

---

## 7. Limitations

- **Fictional and unvalidated.** No real film has been reviewed; the samples only
  demonstrate the method.
- **No clearance of any kind.** This packet makes no legal, employment, or NCAA
  compliance determination; it does not start any milestone clock.
- **Hard stop preserved.** Nothing here authorizes external delivery, real
  athlete intake, publication, or pricing activation.
- **Reuse, not replacement.** The evaluation of record still uses
  `02_FILM_EVALUATION_REPORT.md`; this packet governs its quality.
