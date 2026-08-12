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
| `widget.html` | The interactive systems map |
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

## Working on widget.html

A single file: no build step, no dependencies, no network requests. Open it directly
in a browser to test — `file:///path/to/widget.html`.

Structure:

- `domains` — the single source of truth. Each entry carries `id`, `label`, `icon`,
  `accent`, and `desc`. The node grid, legend, panel titles, and per-connection accent
  colours are all rendered from it. Adding a domain means adding one entry here plus
  its `connections` block.
- `connections` — keyed by domain `id`, each an array of `{ target, text, type }`.
  `target` is matched against a domain's `label`, so the two must stay in sync.
- Rendering — nodes and legend are built in JS, not hand-written in HTML, so the six
  domains are never listed twice.

Constraints to preserve:

- **Domain nodes must stay real `<button>` elements.** They were `<div onclick=...>`,
  which no keyboard user could reach. Do not revert to divs, and do not add inline
  `onclick` attributes — the page uses one delegated listener so it survives a strict
  Content-Security-Policy.
- **Build connection items with `textContent`, never `innerHTML`.** Connection prose
  is contributed text and must never be parsed as markup.
- Selection state is `aria-pressed`, not a CSS class, so it is exposed to assistive
  technology. The connection list is `aria-live="polite"`.
- Accent colours are passed through the `--accent` CSS custom property. Keep the six
  distinct — `religion` and `cognitive` were both `#58a6ff`, making the legend
  ambiguous.
- `#domain-id` in the URL deep-links to a selected domain; unknown ids are ignored
  rather than throwing.

## Git

- Work happens on feature branches; do not commit directly to `main`.
- Commit messages: imperative mood, one line, describing the content change
  ("Add practitioner's framework on thermodynamics").
