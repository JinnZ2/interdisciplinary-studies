# CLAUDE.md

Guidance for Claude Code (and other agents) working in this repository.

## What this repo is

A prose research repository, not a software project. It traces bidirectional
relationships between six domains — religions, cultures, economics, cognitive types,
pathologies, and extraction/predation — while arguing that the standard academic
instruments for studying them are WEIRD-biased and often measure the wrong thing.

There is no build, no test suite, no package manifest, and no dependencies. The only
code is `widget.html`, a single self-contained page.

## Repository layout

| Path | Role |
|------|------|
| `README.md` | Front door: premises, navigation table, core argument, contribution guide |
| `INDEX.md` | Compact file manifest and reading paths |
| `RESEARCH_SYNTHESIS.md` | **The argument.** Single source of truth for the theoretical framework, bibliography, and research agenda |
| `EPISTEMOLOGICAL_CRITIQUE.md` | The WEIRD-bias critique applied to each of the six domains |
| `PRACTITIONER_EPISTEMOLOGY.md` | Primary-source field notes |
| `THERMODYNAMICS.md` | Primary source: physics as embodied knowledge |
| `PSYCHOLOGY_TEST_CRITIQUE.md` | Primary source: live reactions to CRT, NPI, MFQ, BFI |
| `widget.html` | The interactive systems map (presentation only) |
| `data.js` | **The dataset.** Domains, the 30 relationships with their evidence tags, the feedback loop, the tensions |
| `validate.mjs` | `node validate.mjs` — dataset integrity and evidence-link checks |
| `LICENSE` | CC0 1.0 Universal |

## Editorial rules

These matter more than the code conventions.

**Do not smooth the practitioner voice.** `PRACTITIONER_EPISTEMOLOGY.md`,
`THERMODYNAMICS.md`, and the "Subject's Response (verbatim)" blocks in
`PSYCHOLOGY_TEST_CRITIQUE.md` are primary sources. Quoted material keeps its original
spelling, punctuation, and grammar — including "arent", "doesnt", and missing
capitals. Do not correct it, tighten it, or make it sound more academic. The
roughness is evidence. Editorial framing *around* the quotes is fair game; the quotes
themselves are not.

**Keep the distinction between voices.** These documents separate the practitioner's
words, the asker's observations, and the analysis. Preserve that separation. If you
add analysis, put it under an "Analysis" or "Observations" heading, never inside a
quote block.

**Do not resolve the reflexive contradiction.** The repo argues that its own
categories are Western constructs and says so explicitly in several places. That is
deliberate. Do not "fix" it by deleting the self-critique or by adding a confident
conclusion the sources do not support.

**Do not add citations that were not supplied.** The bibliography carries methodology
notes for a reason. If a claim needs a source and you do not have one, mark it rather
than inventing a plausible-looking reference. Fabricated citations are the single
worst failure mode available in this repo.

**One home per idea.** `RESEARCH_SYNTHESIS.md` owns the argument; `README.md` links to
it. These two previously held divergent copies of the same 370 lines and had already
drifted apart in three places. Do not reintroduce that pattern — if content belongs in
two places, put it in one and link from the other.

## Writing conventions

- Markdown, em dashes (—) for asides, `**bold**` for defined terms on first use.
- Files are `SCREAMING_SNAKE_CASE.md`. Check spelling before creating one; a
  misspelled filename (`PRACTIONER_`) shipped here once and broke every link to it.
- Each document ends with `*Last updated: YYYY-MM-DD*` or a living-document note.
  Update the date when you make a substantive change.
- Internal links are relative (`[RESEARCH_SYNTHESIS.md](RESEARCH_SYNTHESIS.md)`).
  After any rename, re-check every link:

  ```sh
  for f in *.md; do
    grep -o '](\([^)#][^)]*\))' "$f" | sed 's/](\(.*\))/\1/' | grep -v '^http' |
      while read -r t; do [ -e "$t" ] || echo "BROKEN in $f: $t"; done
  done
  ```

## Never commit tooling residue

Content in this repo has historically been appended by scripts, and three blocks of
Python (`with open(...) as f:`, `f.write(...)`, `print(...)`, stray `"""` fences)
were committed into the middle of `PRACTITIONER_EPISTEMOLOGY.md` as if they were
prose. Before committing any document, check:

```sh
grep -n '"""\|with open(\|f\.write(\|print("' *.md
```

Anything it finds is almost certainly leaked tooling, not content.

## Working on the widget

No build step, no dependencies, no network requests. Open `widget.html` directly from
disk to test — `file:///path/to/widget.html`. **Run `node validate.mjs` after any
change to `data.js`.**

### data.js holds the content; widget.html holds the presentation

Keep it that way. `data.js` is loaded as a plain `<script src>` — deliberately not
`fetch()` of a `.json` file, because browsers block that on `file://` URLs and it
would cost the repo its "just open it in a browser" property. The file also loads
under Node (`require('./data.js')`), which is how `validate.mjs` reads it.

The full schema is documented in the header comment of `data.js`. The parts that
matter when editing:

- `domains[]` — the single source of truth for the six domains. The node grid, legend,
  ring, panel titles, and every accent colour render from it. Adding a domain means one
  entry here plus its `connections` block plus five new edges from every existing
  domain.
- `connections{}` — keyed by source domain id; each edge carries `to`, `type`, `text`,
  `source`, `confidence`, `evidence`, and `tension`.
- `loop` — §7's feedback cycle, expressed as a *path through* `connections`. Every step
  must resolve to a real edge. `validate.mjs` enforces this, and it is the point: the
  loop cannot assert more confidence than the edges it walks.
- `tensions[]` — §8's unresolved tensions. Edges reference them by id.

### Rules for the evidence tags

These are the widget's reason to exist, so treat them carefully.

- `source` must be a real anchor in `RESEARCH_SYNTHESIS.md`. Use `null` — which renders
  as "No section yet" — rather than pointing at a vaguely related section. An honest
  gap is content; a misleading link is not.
- `confidence: "well-supported"` never means "true". It means the claim has survived
  more scrutiny than its neighbours, using instruments this repo spends three documents
  criticising. Do not upgrade a tag to make the argument look stronger.
- The combination `well-supported` + `weird-instrument` is not a contradiction. It is
  the exact failure mode `EPISTEMOLOGICAL_CRITIQUE.md` describes: well-replicated
  within a sampling frame that excludes most of humanity. Leave those edges tagged that
  way.
- Downgrading an edge is a legitimate and valuable edit. If you cannot find support for
  a claim, mark it `proposed` rather than leaving an inherited tag in place.

### UI constraints to preserve

- **Domain nodes and loop steps must stay real `<button>` elements.** They were
  `<div onclick=...>`, which no keyboard user could reach. Do not revert to divs, and do
  not add inline `onclick` attributes — the page uses delegated listeners so it survives
  a strict Content-Security-Policy.
- **Build everything with `textContent`, never `innerHTML`.** Connection prose is
  contributed text and must never be parsed as markup.
- Selection state is `aria-pressed`, not a CSS class. The connection list is
  `aria-live="polite"`. Tabs implement the full ARIA tab pattern including arrow keys.
- The SVG ring is `role="img"` and is *not* the accessible interface — the numbered step
  list below it is. Keep the list in sync with the ring; do not make the ring the only
  way to reach a step.
- Accent colours pass through the `--accent` CSS custom property. Keep the six distinct
  — `religion` and `cognitive` were both `#58a6ff`, which made the legend ambiguous.
- `#domain-id` in the URL deep-links to a selected domain; unknown ids are ignored
  rather than throwing.
- The caveat panel is not decoration. `PRACTITIONER_EPISTEMOLOGY.md` and
  `THERMODYNAMICS.md` argue that single-channel instruments falsify multi-channel
  reality, which is what a six-node graph does to this subject. Do not remove it to
  make the widget look more authoritative.

## Git

- Work happens on feature branches; do not commit directly to `main`.
- Commit messages: imperative mood, one line, describing the content change
  ("Add practitioner's framework on thermodynamics").
