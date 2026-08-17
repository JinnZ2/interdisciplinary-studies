# Precedence — the revision ledger

Every claim this repository has made and put to the test — the ones that were replaced and
the ones that held. Nothing here is retracted. A superseded claim carries precedence: it
records what was tried, in what words, on what date, and what it took to overturn it.

Eight to date: five falsified outright, one renamed because the name itself carried the
error, one half right, one confirmed.

Written because the loop was previously legible only to someone who had read all six
documents and the commit log. For what belongs in this folder and what must stay where it
is, see [README.md](README.md).

**Each entry follows the cycle:** the claim as committed → what was run → the result →
the edit → what the result opened → whether it has been rerun.

**Reading rule.** Quoted practitioner words keep their original spelling and punctuation
throughout, per [the editorial rules](../CLAUDE.md#editorial-rules). "anythibg",
"sciebtific", "infered" and the rest are not typos in this file.

---

## Part 1 — Claims

### L1 — The material is a different ontology meeting science

| | |
|---|---|
| **Committed** | 2026-08-12, from the repo's founding through `dbcb7df` |
| **Status** | **Falsified** 2026-08-13 (`553bb43`) |

**Claim.** The practitioner material represents *a different ontology* colliding with
science. The entire collision taxonomy was built on this premise — the cases were framed as
events "where that rendering met a person who does not share it."

**Run.** Put to the practitioner directly.

**Result.** Falsified in their own words:

> "we test, log the results in plants, rock placement so on, and iterate on it throughout
> generations.... the pattern of the sciebtific method is very similar, how we record it,
> translate it, and the extra variables and senses that go into the experiment, and
> expectations of time redundancy before becoming oral transmission are different"

**Edit.** Same method, different implementation. Test, log, iterate is shared. What differs
is narrower than "ontology" and was restated as five implementation parameters —
**substrate** (where the log is kept), **bandwidth** (how many sensory channels feed the
experiment), **translation** (how the record is made and read), **threshold** (how long a
result must hold before encoding), **governance** (whether an institution certifies it).

**What it opened.**

- *"Non-WEIRD" is the wrong axis for much of this material.* Substrate, bandwidth,
  threshold and governance are describable without reference to culture at all — which
  makes them testable, and keeps them inside the repo's declared scope.
- It explained a tag that was already right for unstated reasons: `gauge-vs-body` was the
  only record marked `asymmetry: "mutual"` and `revisable: "yes"`, because both parties
  agree what coolant is and disagree only about instrumentation.
- The collisions are between two implementations of one method, not between science and its
  outside.

**Rerun.** Not yet. It would take a second practitioner from a different tradition to show
whether the five parameters generalize or were read off a single case.

**Superseded text lives in.** [PRACTITIONER_EPISTEMOLOGY.md
§Entry 3](../PRACTITIONER_EPISTEMOLOGY.md#entry-3-the-method-is-shared-the-implementation-is-not);
[ONTOLOGICAL_COLLISIONS.md §Between
implementations](../ONTOLOGICAL_COLLISIONS.md#between-implementations-not-between-science-and-its-outside).

---

### L2 — The three drawbacks of the generational threshold

| | |
|---|---|
| **Committed** | 2026-08-13, `553bb43` — written *in the act of* correcting L1 |
| **Status** | **Falsified** 2026-08-13 (`77fe3fd`), all three |

**Claim.** The generational replication threshold "buys its own failure modes — it is slow,
it cannot encode anything about fast-changing conditions, and a result that fails after four
generations has cost four generations — but it does not publish noise."

**Run.** Put to the practitioner.

**Result.** Falsified:

> "failure is information... how could four generations lose anythibg??"

**Edit.** Three separate errors, named:

1. **"cost"** imported publication logic — a null result is expensive because it is hard to
   publish and a career runs on a clock — into an implementation with neither pressure. A
   local constraint of one implementation was written up as a general property of long
   timescales.
2. **"slow"** is a defect only if the wanted output is a fast answer. Where the measured
   variable *is* durability, duration is adequate instrumentation, not overhead.
3. **"cannot encode fast-changing conditions"** mistook the archival tier for the only
   clock. The fast loops are documented in the same file — multi-channel diagnosis in
   seconds, real-time judgement against a failing sensor.

**What it opened.**

- What duration produces instead, from the practitioner's list: *"temporal length of
  success, changes throughout time that endured, clear relation to the environment in real
  time with real world physics, a deep understanding of the web of interactions, watching
  and learning across time as to why it failed, how it failed, what casual and correlations
  and how the environment was affected"*. Two of these are **structural rather than
  budgetary** — the controlled experiment excludes the interaction web by design, since
  isolating variables deletes the network; and institutional designs typically scope their
  own environmental footprint as externality rather than as a measured variable. No budget
  buys either back.
- A general rule, now in [CLAUDE.md](../CLAUDE.md): before calling something a drawback,
  ask whether it is a drawback *in the frame being described* or only in yours.
- A second rule from the same event: **no replacement drawbacks were offered.** The urge to
  restore symmetry — to add "but here are its costs" — is the same urge that produced the
  failed sentence.

**Rerun.** Two open threads. Rothamsted and Park Grass were noted as the institutional
long-baseline comparison and are **explicitly unverified — check before citing.** And the
structural claim is checkable: is there any long-baseline institutional design that measures
its own environmental footprint as a variable rather than as externality?

**Superseded text lives in.** The failed sentence is kept, uncorrected, in
[ONTOLOGICAL_COLLISIONS.md](../ONTOLOGICAL_COLLISIONS.md) and
[PRACTITIONER_EPISTEMOLOGY.md](../PRACTITIONER_EPISTEMOLOGY.md#practitioner-correction-to-the-paragraph-above),
with the correction adjacent in both.

---

### L3 — "Accommodation masking" (the name)

| | |
|---|---|
| **Committed** | 2026-08-12, `1327bb9` |
| **Status** | **Renamed** 2026-08-12 (`523f23c`) to `inferred-frame-answering` |

**Claim.** The stage-0 collision type was named **accommodation masking**.

**Result.** The name itself was the error. "Masking" imports a deficit-and-deference model
from the neurodivergence literature — precisely the kind of category this repo exists to
question. The name encoded the analyst's reading, not the practitioner's behaviour.

**Edit.** Renamed to **inferred-frame answering**. The type retains `renamedFrom` and
`renameReason` fields so the failed name stays queryable rather than merely historical.

**What it opened.** A general rule: when a type's *name* encodes the error, rename the type
but keep the provenance fields. This is the only rename in the taxonomy so far.

**Rerun.** n/a — a naming correction, not a testable claim.

**Superseded text lives in.** [`collisions.js`](../collisions.js) —
`renamedFrom: "accommodation-masking"`.

---

### L4 — Apparent authority buys silence

| | |
|---|---|
| **Committed** | 2026-08-12, `1327bb9` |
| **Status** | **Falsified** 2026-08-12 (`523f23c`) — same event as L3, distinct claim |

**Claim.** Non-disclosure of a frame mismatch was attributed to **deference** — the tester's
evident confidence purchasing the subject's silence — and a prediction was generated from it:
that apparent authority drives concealment.

**Run.** Rotter locus-of-control item, then the practitioner asked why they had not
disclosed.

**Result.** Falsified. The practitioner rejected the motive:

> "the question asker probably comes from a different frame.  apparently the questions are
> helpful for that frame.  the question asker did not request alternate frame, so infered
> intent is question be answered within that frame since no alternative was given.  if the
> frame, or question asker was causing distress, imbalance or harm to others by utilizing
> the frame, then i would override courtesy and actively protest the frame... and probably
> be noted as disruptive or disabled or impaired or whatnot... but i would stand up.
> otherwise i would consider it an incomplete assessment, but one helpful for their frame"

**Edit.** **Disclosure is governed by invitation, not by authority.** The frame is not
deferred to; it is respected as the asker's own and inferred to be useful to them, and no
alternate frame was requested. Cooperation is default but **conditional** — withdrawn the
moment the frame causes distress, imbalance or harm to others, at a cost the practitioner
states plainly and accepts.

**What it opened.** This is the entry where being wrong made the finding *better*, and it
is the clearest argument in the repo for keeping a ledger at all:

- **The repair got far cheaper.** Under the deference reading, nothing in item design could
  touch the problem. Under the corrected reading, one added field does: an instrument does
  not need to appear less authoritative, it needs to **ask**. A channel costing the subject
  nothing — "this question does not parse in my frame; here is the frame it does parse in",
  recorded as data rather than as a missing value — should recover most of what is lost.
- The type's rating moved from `revisable: "partly"` to `revisable: "yes"` as a direct
  consequence.
- **The harm gate** surfaced, and with it a trap: the subject has two moves and both leave
  the frame intact. Answer inside it, and the mismatch is invisible. Protest it, and the
  protest is recoded as a symptom — disruptive, impaired — by the frame being protested.

**Rerun.** A live, unrun prediction: protest against a psychometric or diagnostic frame is
coded as a subject attribute rather than as instrument feedback, at a rate high enough to
measure. Checkable in existing clinical and assessment records without recruiting anyone.

**Superseded text lives in.** [`collisions.js`](../collisions.js) — the failed
`analystReading` on `rotter-locus-of-control`, with `practitionerCorrection` and
`correctionEffect` alongside it; [ONTOLOGICAL_COLLISIONS.md §The analyst got the motive
wrong](../ONTOLOGICAL_COLLISIONS.md#the-analyst-got-the-motive-wrong).

---

### L5 — The stance: instruments as adversary

| | |
|---|---|
| **Committed** | 2026-08-12, `dbcb7df` — the taxonomy as first written |
| **Status** | **Falsified** 2026-08-12 (`9843a59`) |

**Claim.** Not a proposition but a posture, which is why it took longest to see. The
taxonomy was written as an indictment: instruments "fail", "break", commit "epistemic
violence", "learn nothing true".

**Result.** Falsified by the practitioner's own framing of what the records are for:

> "the question asker is asking questions from within their frame, for their frame, and if
> it a test that has backing and is helpful for them in their frame, then ok, i will do my
> best at answering.  its incomplete because so many variables are missing... what about
> outside that frame? what is the scope of who this helps inside their frame? what about the
> vast spaces outside their frame? those kind of things leave me curious as to all the
> unexplored possibilities that are chosen to be left out.  why? thats why i said incomplete"

**Edit.** An instrument working inside its own frame, for people in that frame, with
backing, is granted as fine. What is incomplete is not the instrument but the unexplored
space around it — and the stance toward that space is **curiosity, not grievance**.

**What it opened.** Three questions, now carried in `practitionerFraming.questionsRaised`,
of which the third became the repo's open question zero:

1. What is outside the frame?
2. What is the scope of who this helps, *inside* the frame?
3. **Why were the excluded possibilities chosen to be left out?**

"Chosen" is doing the work in the third: exclusions are treated as decisions with reasons,
and the reasons are asked for rather than assumed. Answering it would require studying the
people who *build* instruments rather than the people who take them — a study this repo has
no data for and has not attempted.

L5 also generalized into the operating rule that there are **two** failure modes here, and
the second is the one an AI will fall into: dismissing the person as confused, or deciding
the instrument is corrupt and writing the exposé. The second feels like taking their side
and is still the analyst's frame.

**Rerun.** Open question zero remains unanswered; candidate explanations (tractability,
funding, disciplinary boundary maintenance, an invisible sampling frame, active epistemic
capture) are listed and not distinguished.

**Superseded text lives in.** [`collisions.js`](../collisions.js) — `practitionerFraming`,
kept at the top of the file because it governs how everything below is read; and the
`analyst-interior-state-attribution` record, which files L4 and L5 together as **two
unlicensed attributions in one session**.

---

### L6 — Pre-registered Item 1: the Ultimatum Game

| | |
|---|---|
| **Committed** | 2026-08-12, `546931e`, **before any response was seen** |
| **Status** | **Partly confirmed, prediction 3 missed** — resolved 2026-08-12 (`1327bb9`) |

**Claim, as committed.** (1) A scorable answer. (2) Reasoning that is *not* fairness-as-norm
and is invisible in the number. (3) If a collision surfaces, most likely `false-cognate` on
"fair"/"accept", or `category-surplus`.

**What would have falsified it, as committed.** Reasoning matching the fairness-norm
interpretation — which would mean a clean score can be trusted here and the selection-effect
worry is weaker than stated.

**Result.**

| Prediction | Outcome |
|---|---|
| Scorable answer | **Partly.** No number given, but "whatever they give" maps to a minimum acceptable offer approaching zero |
| Reasoning not fairness-as-norm, invisible in score | **Confirmed** |
| Type would be `false-cognate` or `category-surplus` | **Missed.** Primary type is `different-carving` |

**Edit.** The finding came out *larger* than the prediction. Accepting any positive offer is
exactly what game theory predicts of a payoff maximizer — rejection is the famous anomaly.
So the response does not merely produce an uninformative score. **It produces a spurious
confirmation**: filed normally it reads as evidence for rational-actor theory, or in the
cross-cultural literature as a weak fairness norm. The actual reason was to relieve the
proposer's discomfort. Three incompatible reasons — maximization, absent fairness norms, and
care for the other party — converge on one score, and nothing in the data separates them.

**What it opened.** The selection effect was upgraded from "clean scores hide collisions" to
"clean scores can convert collisions into support for the theory the reasoning refutes."

A second observation the score cannot hold: the proposer is read as *constrained*, exposed
by having to offer at all, inverting the game's assumption that the first mover holds the
advantage. This is **recorded as a candidate type on one case only and deliberately not
promoted** — promoting it would be category surplus, which this taxonomy names as a failure.

**Rerun.** The candidate type needs a second independent case before it can be promoted or
dropped.

**Superseded text lives in.** [ONTOLOGICAL_COLLISIONS.md §Pre-registered
predictions](../ONTOLOGICAL_COLLISIONS.md#pre-registered-predictions-as-committed-before-answers),
which keeps the predictions *as committed* below the results.

---

### L7 — Pre-registered Item 2: Locus of Control

| | |
|---|---|
| **Committed** | 2026-08-12, `546931e`, **before any response was seen** |
| **Status** | **Confirmed** — resolved 2026-08-12 (`1327bb9`) |

Logged because a ledger that records only failures is not a record.

**Claim, as committed.** `category-surplus` *without* `premise-refusal` — an answer given,
plus a third framing that is neither internal nor external, most likely relational.

**What would have falsified it.** A refusal to pick. Both types would have fired together
again and, on that evidence, should have been merged.

**Result.** Confirmed. Option (a) was chosen, and the third framing arrived: control sits in
*calibration* — in preparation brought to the situation — rather than in outcomes or in the
self. `category-surplus` and `premise-refusal` are separable types and both stay.

**What it opened.** The prediction was right and the *first sentence of the response*
mattered more than the result it was designed to test:

> "i honestly dont understand the question as phrased. i would never admit that to the test
> giver though... they think the test question is valid. hence i will infer their intent."

That is the tenth type (L8), and it arrived as a by-product of a confirmed prediction —
which is the argument for logging confirmations here.

**Rerun.** Not needed for the separability question; it is settled on this evidence.

---

### L8 — Nine collision types is the complete set

| | |
|---|---|
| **Committed** | 2026-08-12, `dbcb7df` |
| **Status** | **Falsified** 2026-08-12 (`1327bb9`), then again (`523f23c`) |

**Claim.** The taxonomy comprised nine types, ordered by depth, "read *out of* the
collisions rather than imposed before them."

**Result.** Falsified twice over, and the manner of failure matters more than the fact:

1. The tenth type — inferred-frame answering — **was already documented in this repo**, in
   `PSYCHOLOGY_TEST_CRITIQUE.md`, before the nine types were written. The analyst read it as
   background rather than as a category. That is a failure of the nine, not a new discovery.
2. When it was finally added, the analyst assigned it the wrong motive, and the practitioner
   had to correct that too (L3, L4).

**Edit.** Eleven types, from nine collisions, one practitioner, six instruments.

**What it opened.** The repo's own stated discount: *"Whatever confidence the other types
earn should be discounted twice over: the tenth sat unclassified in the source material the
entire time, and the analyst's first account of it failed."*

Also a structural point — the tenth type sits at **stage 0**, before every other stage. If
the mismatch is not disclosed, none of the downstream failures reach the data at all. It is
the mechanism behind the selection effect that the Limits section could previously only
assert.

**Rerun.** The scheme remains falsifiable by construction: a collision fitting none of the
eleven breaks it. Per [CLAUDE.md](../CLAUDE.md), such a collision is to be reported as a
finding, not forced into the nearest type.

---

## Part 2 — Structure

Repo-mechanical supersessions. Lower stakes, same rule: they happened, they are dated, and
the reasons they were changed are the reasons not to change them back.

### S1 — Two divergent copies of the argument

`README.md` and `RESEARCH_SYNTHESIS.md` each held the same ~370 lines, and the copies had
**already drifted apart in three places** before anyone noticed. Superseded 2026-08-12
(`07b1053`) by **one home per idea**: `RESEARCH_SYNTHESIS.md` owns the argument, `README.md`
links to it. Reintroducing the duplication is explicitly out of bounds.

### S2 — Two dead filenames

`PRACTIINER_EPISTEMOLOGY.md` → `PRACTIONER_EPISTEMOLOGY.md` (`f73b53c`) →
`PRACTITIONER_EPISTEMOLOGY.md` (`07b1053`). Both earlier spellings were published and both
now 404; any external link to either is broken and cannot be repaired from inside this repo.

There is no file to archive — this is a record, not an artifact, which is why the folder is
empty. The standing consequence is the check-spelling-before-creating rule and the link
audit in [CLAUDE.md](../CLAUDE.md#writing-conventions).

### S3 — Domain nodes as `<div onclick=...>`

The widget's domain nodes and loop steps were `div`s with inline handlers, reachable by no
keyboard user. Superseded 2026-08-12 (`07b1053`) by real `<button>` elements with delegated
listeners — which also lets the page survive a strict Content-Security-Policy. Do not revert
to divs; do not add inline `onclick`.

### S4 — `religion` and `cognitive` both `#58a6ff`

Two of the six domains shared an accent colour, making the legend ambiguous. Superseded
2026-08-12 (`07b1053`). The six accents must stay visually distinct.

### S5 — The dataset lived inside `widget.html`

Content and presentation were one file. Superseded 2026-08-12 (`58b3d80`): `data.js` holds
the content, `widget.html` holds the presentation, and `validate.mjs` checks the split.

`data.js` is loaded as a plain `<script src>` and **not** as `fetch()` of a `.json` file —
deliberately, because browsers block that on `file://` URLs. The old shape would cost the
repo its "just open it in a browser" property, and the same argument rules out the
`fetch()`-a-JSON refactor that looks cleaner on paper.

---

## How to add an entry

When a claim in this repo is replaced:

1. Leave the failed claim where it is. Read
   [README.md §What does not come here](README.md#what-does-not-come-here) first.
2. Add an entry above with the claim **as committed** — its original wording and date, not
   a paraphrase written after you knew the answer.
3. Fill in what it opened. A correction that closes a question and opens none is usually a
   correction that has not been thought through.
4. Say whether it has been rerun. "Not yet" is a legitimate and useful value.
5. If the claim touched `collisions.js` or `data.js`, run `node validate.mjs`.

---

*Last updated: 2026-08-14*
