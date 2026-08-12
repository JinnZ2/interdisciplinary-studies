# Ontological Collisions

## A taxonomy of how instruments fail against ontologies they do not share

**Status:** Working taxonomy, generated from six recorded collisions
**Data:** [collisions.js](collisions.js) — machine-readable, checked by `node validate.mjs`
**Started:** 2026-08-12

---

## The premise

An instrument's internal validity checks cannot tell you what the instrument
presupposes. Reliability, factor structure, and test–retest stability are all computed
*inside* the instrument's own ontology. They can tell you that a measure is consistent.
They cannot tell you that the thing it measures does not exist outside the population
that built it.

A collision can. When an instrument meets someone who does not share its ontology, it
breaks in a specific way — and **which way it breaks is the information**. The breakage
is the measurement.

This document classifies the breakages recorded in
[PSYCHOLOGY_TEST_CRITIQUE.md](PSYCHOLOGY_TEST_CRITIQUE.md) and
[PRACTITIONER_EPISTEMOLOGY.md](PRACTITIONER_EPISTEMOLOGY.md). Nine types emerged from
six cases. That ratio is a warning, addressed in [Limits](#limits).

---

## Three voices, kept separate

This is the most important structural point in the repo and the easiest to lose.

Every record in `collisions.js` distinguishes:

| Field | What it is | Status |
|---|---|---|
| `verbatim` | The practitioner's own words, unedited | **Evidence** |
| `instrumentReading` | What the test concludes | Evidence about the instrument |
| `analystReading` | The repo's interpretation of what the practitioner meant | **A claim** |

`analystReading` is not the practitioner's ontology. It is a WEIRD-framed translation of
it, written in the third person by an analyst who does not share that ontology — which
is the same move the instruments make, one level up. Most of it was written by an AI
system trained predominantly on Western text.

This matters because a reader who conflates the two will conclude that the practitioner
thinks in terms of "Gibsonian affordances," "cybernetic error-correction," and
"distributed cognition." The practitioner said their hands are half the size of their
husband's and they fit the number 8 cylinder. The theory vocabulary is the analyst's.

The practitioner is the person best placed to correct `analystReading`. Corrections
belong in the record, not in a footnote.

---

## The measurement chain

Types are ordered by where in the chain the mismatch occurs:

```
   world
     │
     ├─ 1. is there such a variable, and of what logical kind? ─── deepest
     ├─ 2. what does the term denote?
     ├─ 3. what answers may be given?
     ├─ 4. what is the output taken to mean?
     ├─ 5. is the result good or bad?
     └─ 6. whose reading counts?                                ─── shallowest
```

**The working hypothesis:** the earlier the stage, the higher the diagnostic yield, and
the less any redesign can fix it. A stage-3 failure is an instrument-design problem — fix
the format. A stage-1 failure says a supposedly universal variable is a local construct
that was mistaken for a feature of the world.

This predicts something useful: most psychometric reform effort goes into stages 3 and 4
(better items, better scoring, measurement invariance testing) because those are the
stages where the discipline's own tools apply. Stage 1 failures are invisible to that
programme, because you cannot test invariance for a variable one population does not
have.

---

## The nine types

### Stage 1 — Does the variable exist, and of what kind?

**Wrong arity.** The instrument treats as a property of a person what the other ontology
holds only as a relation between a person and an environment.

> *BFI, "is relaxed, handles stress well":* "Depends on the situation, the place,
> environment, my calibration between environment and senses. If i 'feel' stressed then
> my calibration is off... if im relaxed, then i must ask if my environment warrants
> that..."

"Handles stress well" is a one-place predicate about a person. The response holds only a
two-place relation between senses and environment. No point on a five-point scale can
denote a relation, so averaging across contexts produces a number that refers to nothing.
This is the deepest case in the set — the mismatch is in the *logical form* of the
variable, not its content.

**Category absence.** The instrument's category has no counterpart in the other
ontology. Not a disagreement about its value — absence of the category itself.

> *On diagnostic labels:* "I find it so interesting that labels or pathologies like that
> even exist."

Note the stance. The labels are found *interesting that they exist at all*, which is not
the same as disputing them. That is the signature: there is nothing to dispute. Strong
evidence that a category was constructed rather than discovered — its apparent
universality was an artifact of only ever asking people who share it.

**Category surplus.** The mirror case: the subject holds a category the instrument's
response space does not contain.

> *MFQ:* "does the person use emotion as a weapon? a sense? a state?"

WEIRD moral frameworks parse emotional suffering as a harm to minimize, a weakness to
manage, or as irrelevant. "Suffering as tactical behavior" is a fourth option the
instrument has no cell for. Responses will be systematically misfiled into the nearest
available box — and the misfiling will look like data.

**Premise refusal.** The subject declines the question as unanswerable in the abstract.

> *MFQ:* "i cant honestly answer until i understand to the best of my abilities... when,
> where, what framework? what environment? causal factors?"

The MFQ strips context deliberately, to isolate abstract moral principles. The response
demands exactly what was stripped. Scored as a missing or middling answer, so the refusal
is invisible in the results — a refusal and a genuine low rating are indistinguishable in
the dataset.

### Stage 2 — What does the term denote?

**False cognate.** Instrument and subject share the vocabulary but not the referent.

> *NPI, "center of attention":* "it means that others are less aware of their environment
> if their focus is on me instead of their surroundings."

The NPI's "center of attention" is a social status. The response's is a system state —
attention as a finite resource that must stay allocated to environmental monitoring. Both
parties use the phrase; they are not discussing the same object. The subject can answer
"correctly" while the answer means something unrelated to what is scored.

### Stage 3 — What answers may be given?

**Format erasure.** The instrument's format, independent of its content, destroys the
reasoning that would have revealed the mismatch.

The NPI is forced-choice. The reasoning above exists only because the response was
recorded *outside* the instrument. Administered as designed, the format returns "low
narcissism" and deletes everything that made the answer interesting.

This is the most portable finding in the document. It is a claim about method, not about
culture, and it applies to any forced-choice or scalar instrument in any population.

### Stage 4 — What is the output taken to mean?

**Different carving.** Distinct pathways produce identical outputs, and the inference
from output to construct collapses them.

> *CRT:* "It initially senses as a trick question in my gut... That sense transfers it to
> 'must analyze' thinking."

Four pathways — intuitive, suspicious-and-rushing, analytic, suspicious-and-double-
checking — produce two output values. The test cannot distinguish them. What it actually
measures is comfort with abstract decontextualized problems *under conditions of
institutional trust*. Fixable in principle by measuring pathway rather than output, which
is why it sits at stage 4 rather than stage 1.

### Stage 5 — Is the result good or bad?

**Valence inversion.** Both ontologies recognize the same phenomenon and assign it
opposite normative signs.

> *BFI:* "if im relaxed, then i must ask if my environment warrants that..."

The instrument's healthy pole is the practitioner's alarm condition. Calm is not the goal;
calm is a state requiring verification against the environment. The measurement may be
sound while the interpretation is parochial. The Dark Triad literature has the same shape
— see the Pathology Paradox in
[RESEARCH_SYNTHESIS.md §8](RESEARCH_SYNTHESIS.md#the-pathology-paradox).

### Stage 6 — Whose reading counts?

**Authority inversion.** Agreement about the object, disagreement about which instrument
is trustworthy — often conditional.

> *Coolant:* "gauges arent able to handle variable things at once. They are wonderful as
> additional information, but always to be questioned."

The mildest case here, and the only mutual one: both frames can state the other's
position, and both agree what coolant is. The disagreement is about scope conditions the
gauge never declares. Revisable by better engineering rather than by a different ontology.

---

## Expressive asymmetry

Whether each frame can state the other's position is itself data.

In four of six cases the instrument **cannot represent** the subject's reading, while the
subject can state the instrument's. The CRT response contains an explicit model of what
the test wants — *"probably not exactly what im supposed to get out of that"* — held
simultaneously with a different reading. The CRT has no slot for that meta-position. On
those questions, one frame strictly contains the other.

There is a confound worth naming: a person versus a questionnaire is not a fair contest
of ontologies. The fair comparison is practitioner versus *discipline*, and the
discipline's frame clearly can represent the practitioner's — the analysis sections in
this repo do exactly that.

But look at where that modeling appears. It exists only **downstream of a collision the
discipline did not predict and has no mechanism to seek.** The instruments are
administered at scale precisely to avoid collecting the open-ended responses that
generate collisions. So the frame is not incapable; it is *non-self-correcting without
an outside collision*. That is the more careful claim, and the more damaging one — a
capable frame with no procedure for encountering its own limits will look internally
consistent indefinitely.

This is recorded per-case in `collisions.js` as `asymmetry`:
`instrument-cannot-represent` (4), `post-hoc-only` (1), `mutual` (1).

---

## For AI systems

This section exists because the repo's fourth open question is *"Can AI systems trained
on Western texts contribute to non-WEIRD research?"* — and because a large language model
is not a neutral reader of this document. It is another instrument, with the same
problem.

### Why an LLM is a hard case

- **It is WEIRD-trained.** It carries the same defaults as the CRT, NPI, MFQ, and BFI,
  absorbed from the same literature. Its prior for "handles stress well" is a trait,
  because nearly every text it has read treats it as one.
- **It is single-channel.** Text only. No vibration, no heat gradient, no smell, no
  proprioception. In the terms of [THERMODYNAMICS.md](THERMODYNAMICS.md), it is a gauge —
  and gauges fail exactly where conditions stop being standard.
- **Its characteristic failure is the NPI's failure.** When a response does not fit its
  categories, an LLM's default is to conclude the human misunderstood, and to re-ask more
  clearly. That treats the mismatch as noise in the subject rather than as information
  about the instrument. It is the single most destructive thing it can do here.
- **It performs format erasure by default.** Summarizing, ranking, extracting themes, and
  "which of these best describes" are all response-space impositions. Smoothing is not a
  neutral operation on this material; it deletes precisely the signal that carries the
  finding.

### The protocol

When a response does not fit the category you expected:

1. **Do not re-ask the question in different words.** That is re-administering the
   instrument. If the first framing collided, the paraphrase will collide too, and the
   second refusal will be read as confusion.
2. **Record verbatim before interpreting.** Original spelling and punctuation. The
   analysis is reconstructible from the quote; the quote is not reconstructible from the
   analysis.
3. **Check arity before content.** Am I asking about a property of a person when they are
   describing a relation between a person and an environment? This is the failure most
   likely to be missed, because both parties can produce fluent sentences about "stress."
4. **Check whether your response space contains their answer.** If it does not, the
   nearest-box answer you extract is fabricated data.
5. **Classify the stage before responding.** A stage-6 disagreement is worth resolving. A
   stage-1 disagreement is worth recording — trying to resolve it destroys it.
6. **Keep the voices separate in anything you write.** Your reading is a claim. Their
   words are evidence. Never let the first inherit the authority of the second.

### The honest answer to open question 4

**Yes, in one narrow role: as a collision recorder, not as a source of non-WEIRD
framing.**

An AI system cannot supply an ontology it does not have. Nothing in this repo's analysis
originates outside the Western frame — the vocabulary of affordances, cybernetics, and
distributed cognition is imported, and it is the analyst's, not the practitioner's.

What it can do reliably is notice **when its own reading is being refused**, record the
refusal at full fidelity instead of smoothing it, and classify what kind of refusal it
was. That is a real contribution and a limited one. It is also precisely what happened
here: the classification in this document is machine-generated, but every case rests on a
verbatim response recorded *first*. Remove the verbatim and the analysis would have been
confabulation with citations.

The corollary is a warning. **An AI asked to summarize this repository will destroy the
thing that makes it valuable**, because summarization is smoothing and the value is in
the irregularities. See [CLAUDE.md](CLAUDE.md) for the operating rules.

---

## Limits

**Nine types from six collisions, one practitioner, four instruments.** This is
generative, not established. Several types would likely merge or split with a second
practitioner from a different tradition. "Category surplus" and "premise refusal" both
came from a single MFQ item and may not be separable.

**The taxonomy is itself the WEIRD move.** Categorize, systematize, tabulate, rank by
depth. [EPISTEMOLOGICAL_CRITIQUE.md §7](EPISTEMOLOGICAL_CRITIQUE.md) asks whether this
project is still trapped inside the frame it criticizes, and this document is the
strongest evidence that it is. The partial defense: these categories were read *out of*
the collisions rather than imposed before them, and the scheme is falsifiable — a
collision fitting none of the nine breaks it. That is weaker than escaping the trap.

**The depth-predicts-yield hypothesis is untested.** It is a plausible ordering, not a
result. It would be tested by finding a stage-1 collision that a redesign *did* fix, or a
stage-3 collision that no redesign could.

**Selection effect.** These six collisions were recorded because someone noticed them.
The instruments that produced clean, unremarkable scores generated no record — and some
of those were probably collisions that nobody caught. The sample is biased toward
breakages visible to a WEIRD-trained observer, which is the least interesting kind.

---

## Open questions

1. Are there collision types that only appear between two *non*-WEIRD ontologies? Every
   case here has a WEIRD instrument on one side, which may be shaping the taxonomy.
2. Does the depth ordering predict anything about repair — can a stage-1 failure ever be
   fixed by instrument design, or only by abandoning the variable?
3. What does a collision look like when neither party notices it? Is there a signature in
   the data — unusual response-time patterns, mid-scale clustering, elevated
   non-response?
4. Can the protocol above be evaluated? Give the same collision to systems with and
   without it and measure whether the verbatim survives.
5. If an AI's honest role is collision recording, what is the minimal recording format
   that does not already impose a response space?

---

*Last updated: 2026-08-12*
