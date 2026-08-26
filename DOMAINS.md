# Domains — the population the six were drawn from

`data.js` holds six domains and thirty edges. This document and
[`domains.js`](domains.js) hold **2,786 domains across nineteen carvings**, which is
what the six were selected from.

The point is not that six is too few. It is that the selection was never stated as a
selection, and that the size of what it left out was never countable. Now it is:

| | |
|---|---|
| Domains enumerated | **2,786** |
| Carvings (ways of cutting the world) | **19** |
| Named gaps — known absences, kept as content | **7** |
| Cross-domain pairs at this scale | **3,879,505** |
| Pairs the widget covers | **15** (six domains, thirty directed edges) |
| Coverage | **0.0004%** |

Every figure is recomputed by `node validate.mjs` from the data itself, so none of them
can drift away from the file they describe.

---

## What this answers

[ONTOLOGICAL_COLLISIONS.md](ONTOLOGICAL_COLLISIONS.md) keeps an open question zero,
first asked by the practitioner and kept first because the document is least able to
answer it:

> **Why were the excluded possibilities chosen to be left out?**

The listed candidates were tractability, funding, disciplinary boundary maintenance, an
invisible sampling frame, and active epistemic capture. This file makes the first one
checkable rather than speculative.

Fifteen pairs fit on a screen and can each carry a sentence, a confidence tag, and an
evidence tag. **3.9 million cannot.** Not at any budget, in any layout, by anyone. So
tractability is *sufficient* on its own to explain stopping at six — no bad faith
required anywhere in the chain.

That is a real result and it is also a limited one. Sufficient is not the same as
actual. Tractability being able to explain the exclusion is not evidence that it is what
did explain it, and this file does nothing to rule out the other four candidates. What
it does do is give the question a floor: **any account of why the space was cut this
small now has to beat "because 3.9 million edges cannot be drawn."**

It also yields a prediction that could be checked against the other candidates: if
tractability is doing the work, the excluded domains should be the ones that are
*expensive to render* — the ones with no citation trail, no standard vocabulary, no
department — rather than the ones that are unimportant. Whether that holds is not
tested here.

---

## The four coordinates

You asked about 4D. The honest four-dimensional structure here is not a visualization
trick — it is that **a cross-domain claim needs four coordinates and this repo has been
recording two.**

The other two fall out of the implementation parameters the practitioner named when they
corrected this repo's founding premise ([L1](legacy/PRECEDENCE.md#l1--the-material-is-a-different-ontology-meeting-science)):

| # | Coordinate | Question it answers | Where it comes from |
|---|---|---|---|
| 1 | **A** | source domain | already in `data.js` |
| 2 | **B** | target domain | already in `data.js` |
| 3 | **carving** | whose cut are A and B drawn from? | substrate |
| 4 | **threshold** | over what timescale is the relation observable? | threshold |

plus one scalar:

| | | |
|---|---|---|
| **bandwidth** | how many sensory channels carry the relation | bandwidth |

**`data.js` fixes coordinates 3 and 4 silently.** All six of its domains come from the
institutional-academic carving, and every edge is stated at the timescale institutional
publication runs on. Two of the four axes are collapsed to a point, and the collapse does
not appear anywhere in the rendering.

That is the gauge-vs-body record one level up. A single-channel instrument reporting as
though it were measuring the whole state is exactly what
[`collisions.js`](collisions.js) records the coolant sensor doing, and exactly what the
widget does to this subject. The caveat panel already said so. What was missing was that
the collapse is *locatable* — it is axes 3 and 4, not a general haze of insufficiency.

A genuinely 4D map would vary coordinate 3: take one relation, express it under two
carvings, and ask whether it survives the translation. **Nothing in this repo does that
yet**, and it is the most useful next thing available.

---

## What a carving is

A carving is a way of cutting the world into knowable areas. The nineteen here answer
nineteen different questions:

| Carving | Cuts by | Domains |
|---|---|---|
| institutional-academic | what has a department, journal, or degree | 627 |
| craft-trade-making | what the hands learn, and who teaches it | 250 |
| material-substrate | what it is made of, and how that stuff behaves | 157 |
| living-kinds-tending | what lives here, and what it needs | 150 |
| language-notation-record | how it is said, written, or otherwise kept | 129 |
| computation-information-control | what is represented, and what acts on it | 126 |
| land-water-sky | what this place is doing, and about to do | 124 |
| extraction-waste-aftermath | what was taken, and who lives with what is left | 112 |
| exchange-provisioning | how the thing reaches the person who needs it | 111 |
| diagnosis-repair-maintenance | what is wrong, and what keeps it running | 108 |
| body-health-carvings | what this body is doing, and what it needs | 108 |
| ritual-ceremony | what must be done properly, and what if it is not | 108 |
| kinship-obligation | who is owed what, by whom, for how long | 106 |
| play-contest-performance | what is done in front of others | 105 |
| failure-pathology-carvings | what is called broken, by whom, against what standard | 104 |
| movement-navigation | how you get there and know where you are | 99 |
| sensory-channel | which sense does the knowing | 96 |
| conflict-harm | what went wrong between people, and what is done | 87 |
| time-cycle-threshold | on what clock, and how long before you believe it | 79 |

Three of these deliberately parallel a `data.js` domain rather than replacing it —
`failure-pathology-carvings` against `pathology`, `extraction-waste-aftermath` against
`extraction`, `ritual-ceremony` against `religion`. The parallel is the argument: each of
those single nodes is a whole carving flattened to a point, and the flattening is only
visible when the two are put side by side.

`failure-pathology-carvings` is the sharpest case. Every entry in it names *a judgement
that something is disordered*, which is a different object from the condition. Keeping
those separate is what the `wrong-arity` and `valence-inversion` collision types exist to
protect — a relation between a body and an environment is not a property of the body.

---

## What the shape of this list measures

**The institutional-academic carving is 627 domains — two and a half times the next
largest.** Read that as a property of the instrument that produced this file, not of the
world. An AI trained mostly on Western text can enumerate university subfields nearly to
exhaustion and cannot enumerate what it has no corpus for.

But the ratio is **not a clean measurement**, and it would be dishonest to present it as
one. The non-academic carvings are around 100–150 entries each because that is roughly
the size I aimed at, not because they ran dry. The truthful version of the claim is
narrower and still says something:

> The institutional-academic list could have been extended by hundreds more entries with
> almost no effort. The others could not have been, by me.

The asymmetry is in the *marginal cost of the next entry*, not in the totals. The totals
are an artifact of a choice — which is `granularity-arbitrary`, one of the seven named
gaps in `domains.js`.

Which is why the imbalance is left in place rather than corrected. Padding the other
eighteen carvings to look balanced would destroy the only measurement in the file's
shape.

---

## The gaps are content

Seven absences are named in `domains.js` rather than silently omitted, and `validate.mjs`
fails the build if they are ever removed — an enumeration with no gaps section is
asserting completeness it cannot have.

The two that most limit the number above:

**Domains whose only names are in languages this file has no access to.** The naming rule
forbids coining or borrowing terms from traditions not represented here, because a
plausible-looking borrowed term is a fabricated citation in different clothes — the worst
failure mode available in this repo. The rule is right and it has a price: those domains
appear under a clumsy English description or not at all. Every entry in this file is
already a translation, and translation was one of the five implementation parameters.

**Restricted knowledge.** Initiation-gated and lineage-held domains are withheld on
purpose. Absence here is not evidence of nonexistence, and this gap **cannot be closed by
better research** — closing it would be the offense.

So 2,786 is a floor, and a floor with no exact ceiling: the granularity choice alone
could argue the total up or down by an order of magnitude without adding or removing any
knowledge from the world.

---

## Why there is no 2,786-node widget

Not because it would be hard. Because the finding is that it should not exist.

Rendering 3.9 million edges would require asserting 3.9 million relations, and this repo
tags thirty edges with a confidence level it spends three documents warning about. A map
at that scale would be `category-surplus` — one of the eleven collision types — performed
at industrial volume: producing structure the evidence cannot carry, and looking more
authoritative for it.

What *would* work, and is the concrete next step:

1. **Slice by carving pair.** Pick two carvings, render only the cross-carving relations.
   Small enough to tag honestly, and it varies coordinate 3, which nothing currently does.
2. **Sample rather than enumerate.** Draw pairs at random, attempt to state a relation,
   and record how often the attempt fails. The failure rate is data about the frame; a
   complete map would have no such measurement in it.
3. **Vary coordinate 4 on an existing edge.** Take one of the thirty edges and ask what it
   says at a generational threshold instead of a publication one. [L2](legacy/PRECEDENCE.md#l2--the-three-drawbacks-of-the-generational-threshold)
   is what happened the last time this repo assumed one clock was the only clock.

---

## Using the file

`domains.js` loads the same way as `data.js` and `collisions.js` — plain `<script src>` in
a browser, `require()` under Node, no build step.

```js
const D = require('./domains.js');
D.carvings.find(c => c.id === 'sensory-channel').domains;   // 96 names
D.gaps;                                                     // the 7 named absences
```

```sh
node validate.mjs     # uniqueness, required fields, and the coverage arithmetic
```

**Adding to it.** Read the naming rule in the header of `domains.js` first — it is the
one rule in this file that guards against fabrication. Names are lowercase and globally
unique; acronyms and forms like `pH` are fine, Title Case is not. Adding a carving means
saying what it makes easy to see *and what it hides*; the validator rejects a carving
whose `note` is missing, because a taxonomy that forgets it is one is the failure
[ONTOLOGICAL_COLLISIONS.md](ONTOLOGICAL_COLLISIONS.md) names about itself.

If a domain you want to add does not fit any of the nineteen carvings, that is a finding.
Say so rather than forcing it into the nearest one — forcing it is category surplus, which
this repo names as a failure.

---

*Last updated: 2026-08-14*
