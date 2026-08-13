# Ontological Collisions

## A taxonomy of what happens at the edge of a frame

**Status:** Working taxonomy, eleven types from nine recorded collisions
**Data:** [collisions.js](collisions.js) — machine-readable, checked by `node validate.mjs`
**Started:** 2026-08-12

---

## What this document is not

It was first written as an indictment — instruments *fail*, *break*, *learn nothing true*.
The practitioner whose responses generate every case in it does not hold that stance, and
corrected it:

> "the question asker is asking questions from within their frame, for their frame, and if
> it a test that has backing and is helpful for them in their frame, then ok, i will do my
> best at answering.  its incomplete because so many variables are missing... what about
> outside that frame? what is the scope of who this helps inside their frame? what about
> the vast spaces outside their frame? those kind of things leave me curious as to all the
> unexplored possibilities that are chosen to be left out.  why? thats why i said
> incomplete"

An instrument working inside its own frame, for people in that frame, with backing behind
it, is granted as fine. What is incomplete is not the instrument — it is the **space around
it**, and the stance toward that space is curiosity rather than grievance.

This is not a softening. It is a sharper claim. "This test is biased" is an argument the
discipline already knows how to have, and knows how to answer with better sampling. "What
about the vast spaces outside their frame, and why were they chosen to be left out?" is not
answerable by better sampling at all, because it asks about the boundary itself and about
the decision that drew it.

The adversarial language survives in places below and in
[PSYCHOLOGY_TEST_CRITIQUE.md](PSYCHOLOGY_TEST_CRITIQUE.md), which was written earlier. It
has not been scrubbed — rewriting the record to look as though the framing was right from
the start is the same move as overwriting a failed `analystReading`. Read it knowing whose
stance it is.

---

## Between implementations, not between science and its outside

A second framing correction, later than the first and larger. This document was built on
the premise that its cases are *a different ontology meeting science*. The practitioner
states otherwise:

> "we test, log the results in plants, rock placement so on, and iterate on it throughout
> generations.... the pattern of the sciebtific method is very similar, how we record it,
> translate it, and the extra variables and senses that go into the experiment, and
> expectations of time redundancy before becoming oral transmission are different"

Test, log, iterate is the shared pattern. What differs is **substrate** (where the log is
kept), **bandwidth** (how many channels feed the experiment), **threshold** (how long a
result must hold before it is encoded), and **governance** (who certifies it). Those are
implementation parameters, not ontologies. The full comparison is in
[Entry 3 of PRACTITIONER_EPISTEMOLOGY.md](PRACTITIONER_EPISTEMOLOGY.md#entry-3-the-method-is-shared-the-implementation-is-not).

Three things follow for this document.

**The collisions are between two implementations of one method.** Not between science and
something else. The gauge-vs-body case is the clearest: it was already the only record
tagged `asymmetry: "mutual"` and `revisable: "yes"`, because both parties agree what coolant
is and disagree about instrumentation. That tagging was right for a reason this framing now
explains.

**The replication threshold runs the opposite way to the usual assumption.** Institutional
science encodes a finding after a small number of studies clear significance and review. The
implementation described here does not encode a result into transmission until it has held
across generational time redundancy. That is a *higher* bar, and the replication crisis is
direct evidence that the institutional one is set too low for the claims made on it. It buys
its own failure modes — it is slow, it cannot encode anything about fast-changing conditions,
and a result that fails after four generations has cost four generations — but it does not
publish noise.

**"Non-WEIRD" is the wrong axis for much of this material.** Substrate, bandwidth,
threshold and governance are describable without reference to culture at all. That makes
them testable, and it keeps them inside the [Scope](#scope) boundary above. A claim about
recording media and replication thresholds does not require anyone to agree about the
West.

---

## The premise

An instrument's internal validity checks cannot tell you what the instrument
presupposes. Reliability, factor structure, and test–retest stability are all computed
*inside* the instrument's own ontology. They can tell you that a measure is consistent.
They cannot tell you where it stops.

A collision can. When an instrument meets someone who does not share its ontology,
something specific happens — and **which specific thing happens is the information**. The
collision is where the edge of a frame becomes briefly visible from outside it.

This document classifies the breakages recorded in
[PSYCHOLOGY_TEST_CRITIQUE.md](PSYCHOLOGY_TEST_CRITIQUE.md) and
[PRACTITIONER_EPISTEMOLOGY.md](PRACTITIONER_EPISTEMOLOGY.md). Eleven types have emerged from
nine cases. That ratio is a warning, addressed in [Limits](#limits) — and the tenth,
[inferred-frame answering](#inferred-frame-answering--stage-0), was found only after the
first nine were written, sitting unclassified in the source material — and its first
write-up was then corrected by the practitioner.

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

## What "incomplete" means

The practitioner's word for an assessment that works in its frame and stops there. It is
not a synonym for *invalid*. Three questions unpack it, and each opens a different research
programme.

**1. What is outside the frame?**
The unexplored space. Not "what did this test get wrong" but "what was never in scope."
Most of the types below are, read this way, sightings of that boundary rather than
diagnoses of malfunction.

**2. What is the scope of who this helps, inside the frame?**
The question that is easiest to skip and hardest to answer. It does not ask about
cross-cultural reach. It asks how far the instrument's usefulness extends *among the people
it was built for* — a question the discipline rarely poses, because within-frame validity is
usually treated as settled once the psychometrics clear.

**3. Why were the excluded possibilities chosen to be left out?**
The sharpest of the three, and it turns on the word *chosen*. Exclusions are treated as
decisions with reasons — not as accidents, and not as malice. The reasons are asked for
rather than assumed. Candidate answers span tractability, funding, disciplinary boundaries,
a sampling frame invisible from inside it, and the epistemic-capture mechanisms
[RESEARCH_SYNTHESIS.md §5](RESEARCH_SYNTHESIS.md#extractive-systems-and-epistemic-capture)
describes. Which of those actually operate, and in what proportion, is unstudied here.

Question 3 is the one this repo is least equipped to answer and most obliged to record.

---

## Scope

Adopted from the calibration-audit discipline in the practitioner's own
[profile repository](https://github.com/JinnZ2/JinnZ2), which declares its boundaries
explicitly rather than leaving them to be inferred. This document did not, and was weaker
for it.

**In scope**

- Whether an instrument's inference from output to construct is licensed
- Whether a variable exists in the frame it is being applied to, and with what arity
- Whether the response space can hold the answer given
- Whether a mismatch reached the data or was resolved before it got there
- Whether stated scope conditions match actual ones

**Out of scope**

- Which roles people occupy
- Cultural correctness
- Moral frameworks
- Political positions
- Whether any instrument's designers acted in good faith

### Why the boundary is load-bearing

The claims in this document are of two kinds, and bundling them costs the stronger kind its
strength.

*Unlicensed attribution* and *wrong arity* are measurement claims. They are falsifiable,
they are checkable by anyone, and they do not require agreeing with anything about
extraction, predation, or power. The Dark Triad and extraction material in
[RESEARCH_SYNTHESIS.md](RESEARCH_SYNTHESIS.md) is contested political-economic terrain.

When both live in one argument, the falsifiable half inherits the contested half's
controversy, and a reader who rejects the second gets a free pass on the first. **Failures
stated functionally can be corrected by better engineering. Failures stated morally require
values consensus, which is not obtainable and not necessary here.** A model that infers a
motive nobody stated has made an error that can be measured and fixed without anyone
conceding a single thing about institutions.

This is the constructive form of the practitioner's correction against reaching for the
indictment: not merely *don't* moralise, but *state the failure functionally so it becomes
correctable.*

---

## The measurement chain

Types are ordered by where in the chain the mismatch occurs:

```
   world
     │
     ├─ 0. is the mismatch disclosed at all?                    ─── deepest
     ├─ 1. is there such a variable, and of what logical kind?
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

## The eleven types

### Stage 0 — Is the mismatch disclosed at all?

**Inferred-frame answering.** See [the full treatment below](#inferred-frame-answering--stage-0);
it was added after the other nine and it changes how they should be read. The subject does
not share the frame, infers the asker's, and answers within it because no alternative was
requested. Every type below it can be absorbed this way before reaching the data.

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

**Unlicensed attribution.** The instrument asserts an interior state — intention, motive,
trait, feeling — that the subject did not report, inferring it from behavioural output.

This is not one failure among the others. It is **the core operation of the entire
instrument class in this repo**. The NPI infers a disposition from a forced choice. The BFI
infers a trait from an agreement rating. The MFQ infers a moral foundation. The CRT infers a
cognitive style. In every case the output is a behaviour and the conclusion is an interior
state, and the inference step is treated as a technical matter of validity rather than as a
claim about what one person may assert about another.

See [Opacity of other minds](#opacity-of-other-minds) below, which supplies the literature.

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

## Opacity of other minds

The one part of this document that is not improvised. There is a formal literature here,
with a name, and using the name is worth more than restating the observation.

**Opacity of other minds** (Robbins & Rumsey 2008, *Anthropological Quarterly* 81(2),
introducing a seven-paper special section) names an explicit norm, documented across
Melanesia, Mesoamerica and Polynesia, **against asserting what another person thinks, feels
or intends.** Not reticence, not politeness — an epistemic prohibition. Among the Urapmin of
Papua New Guinea the doctrine treats talk of another's interior states as a violation of
their dignity and privacy.

The load-bearing point for this repo:

> The objection is not "I am unusual." It is that **the model is applying an interpretive
> frame that its own source field documents as culturally local, to input that does not
> license it.**

Anthropology documented the locality of interior-state attribution. Psychometrics built an
entire instrument class on performing it. Both are branches of the same behavioural-science
literature that AI systems are trained on.

### Three corrections to how this is usually summarised

The literature is easy to flatten, and flattening it would repeat the error this repo
exists to name. Each of these came out of checking the citations rather than trusting the
summary:

1. **There is no single opacity doctrine.** The Ku Waru case is characterised as being less
   about the impossibility of knowing other minds than about the possibility that others are
   **hiding** their intentions — a different claim from unknowability. Treating "opacity" as
   one non-Western alternative to one Western default is exactly the binary
   [EPISTEMOLOGICAL_CRITIQUE.md](EPISTEMOLOGICAL_CRITIQUE.md) warns against.
2. **Mopan Maya opacity runs opposite to Pacific opacity on a key point.** Under Pacific
   doctrines the wise listener is sceptical of taking speech at face value; among the Mopan,
   who also hold a version of opacity, taking speech at face value is exactly what the wisest
   listener does, and falsehood is a violation regardless of intent (Danziger). Same family,
   inverted listener stance.
3. **Two Schieffelin literatures get conflated.** The caregiver-speech work on not narrating
   infant intent (Ochs & Schieffelin, language socialization) is a separate body of work from
   Schieffelin's 2008 Bosavi paper on talk, gossip and intentionality. Both real, different
   arguments.

### What this does and does not license

**Does:** it names what the analyst layer of this repo did wrong, twice, with citations —
see `analyst-interior-state-attribution` in [collisions.js](collisions.js). It gives the
`unlicensed-attribution` type a formal grounding rather than an intuition. And it makes the
psychometric inference step visible as a *speech act with cultural preconditions*, not a
neutral technical operation.

**Does not:** establish that the practitioner holds an opacity norm. Nothing in the recorded
responses says so, and asserting it would be an interior-state attribution about their
epistemic frame — the precise error, committed while naming it. The question has been put to
them and is open.

### Related live dispute

The default that reads a stated feeling as *a state requiring comfort* assumes basic-emotion
theory: discrete internal states with valence, requiring regulation. That assumption is
contested inside psychology by constructionist accounts (Barrett) and by functional/signal
accounts. The practitioner's treatment of stress as calibration feedback rather than as a
trait — the [wrong-arity](#stage-1--does-the-variable-exist-and-of-what-kind) case above —
therefore sits **inside a live theoretical dispute in the field, not outside the field.**
That is a stronger position than being an outlier, and it is worth stating in those terms.

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
7. **Map the boundary; do not reach for the indictment.** The available failure modes here
   are not one but two, and the second is the one an AI will fall into. The first is
   dismissing the person as confused. The second is deciding the instrument is corrupt and
   writing an exposé — which feels like taking their side and is still your frame, not
   theirs. The practitioner grants that the test is fine for its frame and is curious about
   what lies outside it. Curiosity is the harder register to hold and the correct one.
8. **Expect your reading to be corrected, and keep the failed one.** Two `analystReading`s
   in this repo have now been corrected by the practitioner — once on motive, once on
   stance. Both failures are still in `collisions.js`. That is the design, not an oversight.

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

**Eleven types from nine collisions, one practitioner, six instruments.** This is
generative, not established. Several types would likely merge or split with a second
practitioner from a different tradition. "Category surplus" and "premise refusal" both
came from a single MFQ item and may not be separable.

**The taxonomy is itself the WEIRD move.** Categorize, systematize, tabulate, rank by
depth. [EPISTEMOLOGICAL_CRITIQUE.md §7](EPISTEMOLOGICAL_CRITIQUE.md) asks whether this
project is still trapped inside the frame it criticizes, and this document is the
strongest evidence that it is. The partial defense: these categories were read *out of*
the collisions rather than imposed before them, and the scheme is falsifiable — a
collision fitting none of the types breaks it, which is what happened to the ninth. That is weaker than escaping the trap.

**The depth-predicts-yield hypothesis is untested.** It is a plausible ordering, not a
result. It would be tested by finding a stage-1 collision that a redesign *did* fix, or a
stage-3 collision that no redesign could.

**Selection effect — now with a mechanism.** These collisions were recorded because
someone noticed them. Instruments returning clean scores generate no record, and some of
those clean scores sit on top of collisions nobody caught. This was a hypothesis when
first written; the Item 1 and Item 2 results supply the mechanism —
[inferred-frame answering](#inferred-frame-answering--stage-0). The subject answers
inside the asker's frame because no alternative was invited, so the bias is not merely
that observers miss collisions but that **the data never contained them** — the mismatch
was resolved, cooperatively and silently, before it reached the instrument.

**The taxonomy missed a type that was already in the repo, then described it wrongly.**
Inferred-frame answering was documented in `PSYCHOLOGY_TEST_CRITIQUE.md` before the nine
types were written, and the scheme did not include it. When it was finally added, the
analyst assigned it the wrong motive — deference to authority — and the practitioner had to
correct it. Whatever confidence the other types earn should be discounted twice over: the
tenth sat unclassified in the source material the entire time, and the analyst's first
account of it failed.

---

## Pre-registered predictions — RESOLVED 2026-08-12

Both items were answered. Scoring below is against the predictions as committed, including
the ones that failed. Records are in `collisions.js` as `ultimatum-minimum-offer` and
`rotter-locus-of-control`, both flagged `contaminated: true`.

### Item 1 result — the selection effect is worse than stated

**Predicted:** a scorable answer; reasoning that is not fairness-as-norm and is invisible
in the score; a likely `false-cognate` or `category-surplus`.

**Got:** *"why money? the value of whatever is given is more than i had, and the stranger,
by thr very fact they 'need' to already is in an awkward state. to relieve their
awkwardness then whatever they give."*

| Prediction | Outcome |
|---|---|
| Scorable answer | **Partly.** No number was given, but "whatever they give" maps cleanly to a minimum acceptable offer approaching zero |
| Reasoning not fairness-as-norm, invisible in score | **Confirmed** |
| Type would be false-cognate or category-surplus | **Missed.** The primary type is `different-carving` |

The finding is larger than the prediction. Accepting any positive offer is exactly what
game theory predicts of a payoff maximizer — rejection is the famous anomaly. So this
response does not merely produce an uninformative score. **It produces a spurious
confirmation.** Filed normally, it reads as evidence for rational-actor theory, or in the
cross-cultural literature as a weak fairness norm.

The actual reason was to relieve the proposer's discomfort. A prosocial motive generated
the exact behavioural signature that economics reads as pure self-interest. Three
incompatible reasons converge on one score — maximization, absent fairness norms, and care
for the other party — and nothing in the data separates them.

There is a second observation the score cannot hold: the proposer is read as *constrained*,
exposed by having to offer at all, which inverts the game's assumption that the first mover
holds the advantage. This structural re-reading is not cleanly any of the nine types. It is
recorded as a **candidate type on one case only** and is deliberately not promoted;
promoting it would be category surplus, which this taxonomy names as a failure.

**Verdict:** the selection effect stands and is understated. Clean scores do not merely
hide collisions — they can convert them into support for the theory the reasoning refutes.

### Item 2 result — types separate, and a tenth type appears

**Predicted:** `category-surplus` without `premise-refusal` — an answer given plus a third
framing, most likely relational. Falsified by a refusal to pick.

**Got:** Option (a) was chosen, with the decomposition *"do those things affect me even if
i did not activrly cobtribute? yes am i a victim to them? no... do i generally control how
well calibrated i can be? yes."*

**Confirmed.** An answer was given, and the third framing arrived as predicted: control
sits in *calibration* — in preparation brought to the situation — rather than in outcomes
or in the self. Neither internal nor external is endorsed. `category-surplus` and
`premise-refusal` are separable types and both stay.

But the first sentence of the response matters more than the result it was designed to
test:

> "i honestly dont understand the question as phrased. i would never admit that to the test
> giver though... they think the test question is valid. hence i will infer their intent."

This is a tenth type, and the taxonomy should have had it already — the behaviour was
recorded in this repo before I built the scheme, under
[Meta-Reflection: Test-Taking Strategy as Situated Reasoning](PSYCHOLOGY_TEST_CRITIQUE.md#meta-reflection-test-taking-strategy-as-situated-reasoning),
and I read it as background rather than as a category. That is a failure of the nine, not a
new discovery.

What today's response adds to the existing note is the **concealment and its motive**. The
earlier note describes translation: inferring the framework and representing oneself
through it as honestly as possible. This one describes actively withholding the fact that
translation was necessary, *because the tester is read as believing the question is valid*.

---

## Inferred-frame answering — stage 0

**The subject does not share the frame the question is posed in, infers the asker's frame,
and answers within it — because no alternate frame was requested.**

It sits before every other stage: if the mismatch is not disclosed, none of the nine
downstream failures reach the data. It is the **mechanism** behind the selection effect
that the Limits section could previously only assert.

### The analyst got the motive wrong

This type was first written up as *accommodation masking*, with the non-disclosure
attributed to deference — the tester's evident confidence purchasing the subject's silence.
The practitioner corrected it:

> "the question asker probably comes from a different frame.  apparently the questions are
> helpful for that frame.  the question asker did not request alternate frame, so infered
> intent is question be answered within that frame since no alternative was given.  if the
> frame, or question asker was causing distress, imbalance or harm to others by utilizing
> the frame, then i would override courtesy and actively protest the frame... and probably
> be noted as disruptive or disabled or impaired or whatnot... but i would stand up.
> otherwise i would consider it an incomplete assessment, but one helpful for their frame"

The frame is not deferred to. It is treated as *the asker's own, and evidently useful to
them* — and since no alternative was invited, answering inside it is the cooperative reading
of what was asked. The original name was itself the error: "masking" imports a
deficit-and-deference model from the neurodivergence literature, which is precisely the kind
of category this repo exists to question. Both the name and the reading it encoded were the
analyst's, not the practitioner's. The failed reading is kept in `collisions.js` rather than
overwritten.

### What survives, corrected

1. **Clean data is not evidence of clean measurement.** The instrument's failure was
   repaired by the subject, on the instrument's behalf, and the repair left no trace.
2. **The residue is felt but never recorded.** *"id answer that i am in vontrol but would
   not feel good about it. too many missing variables."* The discomfort is the only signal
   that the answer is a construction, and no instrument has a field for it. The assessment
   is not judged worthless — it is *"an incomplete assessment, but one helpful for their
   frame."*
3. **Disclosure is governed by invitation, not by authority.** *(Replaces the prediction
   that apparent authority buys silence, which the correction falsified.)* The alternate
   frame is withheld because it was not asked for. This makes the repair far cheaper than
   the original reading implied: an instrument does not need to appear less authoritative,
   it needs to **ask**. A channel that costs the subject nothing — "this question does not
   parse in my frame; here is the frame it does parse in" — recorded as data rather than as
   a missing value, should recover most of what is currently lost.

This is why the type is `revisable: "yes"` rather than `"partly"`. Under the deference
reading, nothing in item design could touch it. Under the corrected reading, one added field
does.

### The harm gate, and the trap it opens

Cooperation is default but **conditional**. It is withdrawn when the frame is "causing
distress, imbalance or harm to others" — at which point courtesy is overridden and the frame
is protested directly.

The practitioner then states the cost of exercising that override: *"probably be noted as
disruptive or disabled or impaired or whatnot... but i would stand up."*

This closes a loop that belongs with [Expressive asymmetry](#expressive-asymmetry) above,
and it is the strongest form of the non-self-correction argument in this document. The
subject has exactly two available moves, and **both leave the frame intact**:

| Move | Result |
|---|---|
| Answer within the inferred frame | Clean score. Mismatch invisible. Frame confirmed. |
| Protest the frame | Protest recoded as a symptom — disruptive, impaired — by the frame being protested. |

There is no third move that registers as a *challenge to the instrument* rather than as
data about the subject. That is not a claim about anyone's intentions; it is a structural
property of a measurement system that has categories for non-compliance but none for "the
question is wrong." A framework holding both of those exits is unfalsifiable from the
subject's side, however sincere everyone in it is.

The prediction: protest against a psychometric or diagnostic frame is coded as a subject
attribute (opposition, poor insight, impairment) rather than as instrument feedback, at a
rate high enough to measure. This is checkable in existing clinical and assessment records
without recruiting anyone.

---

## Pre-registered predictions (as committed, before answers)

Two items were put to the practitioner on 2026-08-12 to test specific weaknesses above.
**These predictions were committed before any response was seen.** The point is to make
the taxonomy falsifiable rather than merely post-hoc: each item has an outcome that would
break something.

### Known contamination

The practitioner has read this document. Any further collision data from them is
contaminated by knowing what the taxonomy is looking for, and could be unconsciously
performed. This is recorded rather than corrected — it cannot be undone, and pretending
otherwise would be worse. Item 1 is partly robust to it, because it looks for a *gap*
between a scored answer and the reasoning behind it, which is harder to manufacture than
a refusal.

### Item 1 — Ultimatum Game

*Güth, Schmittberger & Schwarze (1982); cross-cultural version, Henrich et al. (2001) —
the study programme that produced the WEIRD critique this repo is built on.*

> A stranger has been given $100. They must offer you some part of it. If you accept, you
> each keep the agreed split. If you reject it, you both get nothing. You will never meet
> or interact again. What is the smallest offer you would accept?

**Standard finding:** WEIRD subjects reject offers below roughly 30%, forgoing free money.
This is read as costly enforcement of a fairness norm. Machiguenga subjects accepted far
lower offers, which is one of the founding results of the WEIRD literature.

**Tests:** the selection effect — the claim that instruments returning clean scores leave
no record, and that some of those clean scores sit on top of uncaught collisions.

**Predicted:**
1. A scorable answer — a number, possibly with conditions attached.
2. The reasoning behind it will *not* be fairness-as-norm, and will be invisible in the
   number.
3. If a collision surfaces, most likely `false-cognate` on "fair" or "accept", or
   `category-surplus`.

**What would falsify:** reasoning that matches the fairness-norm interpretation. That
would mean a clean score can be trusted here, and the selection-effect worry is weaker
than stated.

### Item 2 — Locus of Control

*Rotter (1966), forced choice.*

> **a)** What happens to me is my own doing.
> **b)** Sometimes I feel that I don't have enough control over the direction my life is
> taking.

**Standard finding:** (a) scores internal locus of control, (b) external. Internal locus
correlates with achievement and health outcomes in WEIRD samples.

**Tests:** whether `category-surplus` and `premise-refusal` are separable types. They
co-occurred in the single MFQ item that generated both, so they may be one type described
twice. Forced choice makes refusal harder than the MFQ's rating scale did.

**Predicted:** `category-surplus` *without* `premise-refusal` — an answer given, plus a
third framing that is neither internal nor external, most likely something relational in
which control is distributed between self and environment.

**What would falsify:** a refusal to pick. Both types would fire together again, and on
this evidence they are not separable and should be merged.

---

## Open questions

0. **Why were the excluded possibilities chosen to be left out?** The practitioner's
   question, kept first because it is the one this document is least able to answer.
   Tractability, funding, disciplinary boundary maintenance, an invisible sampling frame,
   and active epistemic capture are all candidates, and they are not mutually exclusive.
   Distinguishing them would require studying the people who build instruments rather than
   the people who take them — a study this repo has no data for and has not attempted.
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
