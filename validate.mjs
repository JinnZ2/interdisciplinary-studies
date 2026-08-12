import { readFileSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const D = require('./data.js');
const C = require('./collisions.js');

// GitHub's heading slugs: lowercase, drop punctuation, then map each remaining
// space to one hyphen (so " & " becomes a double hyphen — do not collapse).
const slug = s => s.toLowerCase().replace(/[^\w\- ]/g, '').replace(/ /g, '-');
const anchorCache = new Map();
function anchorsOf(file) {
  if (!anchorCache.has(file)) {
    const md = readFileSync(new URL('./' + file, import.meta.url), 'utf8');
    anchorCache.set(file, new Set(
      md.split('\n').filter(l => /^#{1,6} /.test(l)).map(l => slug(l.replace(/^#+ /, '')))
    ));
  }
  return anchorCache.get(file);
}
const anchors = anchorsOf('RESEARCH_SYNTHESIS.md');

let bad = 0;
const ids = new Set(D.domains.map(d => d.id));
const tensionIds = new Set(D.tensions.map(t => t.id));
const confIds = new Set(D.confidenceLevels.map(c => c.id));
const evIds = new Set(D.evidenceKinds.map(e => e.id));

for (const [from, list] of Object.entries(D.connections)) {
  if (!ids.has(from)) { console.log('BAD source domain', from); bad++; }
  if (list.length !== 5) { console.log(`${from} has ${list.length} edges, expected 5`); bad++; }
  for (const c of list) {
    const tag = `${from}->${c.to}`;
    if (!ids.has(c.to)) { console.log('BAD target', tag); bad++; }
    if (c.to === from) { console.log('SELF EDGE', tag); bad++; }
    if (!confIds.has(c.confidence)) { console.log('BAD confidence', tag, c.confidence); bad++; }
    if (!evIds.has(c.evidence)) { console.log('BAD evidence', tag, c.evidence); bad++; }
    if (c.tension && !tensionIds.has(c.tension)) { console.log('BAD tension', tag, c.tension); bad++; }
    if (c.source && !anchors.has(c.source.slice(1))) { console.log('BROKEN ANCHOR', tag, c.source); bad++; }
  }
  const targets = list.map(c => c.to);
  if (new Set(targets).size !== targets.length) { console.log('DUPLICATE target in', from); bad++; }
}
for (const t of D.tensions) if (!anchors.has(t.source.slice(1))) { console.log('BROKEN tension anchor', t.source); bad++; }
if (!anchors.has(D.loop.source.slice(1))) { console.log('BROKEN loop anchor', D.loop.source); bad++; }

// the loop must be a real cycle through real edges
let cur = D.loop.steps[0].from;
for (const s of D.loop.steps) {
  if (s.from !== cur) { console.log('LOOP DISCONTINUITY at', s.from); bad++; }
  const edge = (D.connections[s.from] || []).find(c => c.to === s.to);
  if (!edge) { console.log('LOOP STEP HAS NO EDGE', s.from, '->', s.to); bad++; }
  cur = s.to;
}
if (cur !== D.loop.steps[0].from) { console.log('LOOP DOES NOT CLOSE:', cur); bad++; }
if (new Set(D.loop.steps.map(s => s.from)).size !== D.domains.length) { console.log('LOOP does not visit every domain'); bad++; }

const all = Object.values(D.connections).flat();
console.log('edges:', all.length);
console.log('confidence:', Object.fromEntries([...confIds].map(k => [k, all.filter(c => c.confidence === k).length])));
console.log('evidence:', Object.fromEntries([...evIds].map(k => [k, all.filter(c => c.evidence === k).length])));
console.log('tension-tagged:', all.filter(c => c.tension).length);

/* ---------------------------------------------------------------- *
 * collisions.js
 * ---------------------------------------------------------------- */
const stageIds = new Set(C.stages.map(s => s.id));
const typeIds = new Set(C.collisionTypes.map(t => t.id));
const asymmetries = new Set(['instrument-cannot-represent', 'post-hoc-only', 'mutual']);
const revisable = new Set(['yes', 'partly', 'no']);

for (const t of C.collisionTypes) {
  if (!stageIds.has(t.stage)) { console.log('BAD stage', t.id, t.stage); bad++; }
  if (!revisable.has(t.revisable)) { console.log('BAD revisable', t.id, t.revisable); bad++; }
}

const seen = new Set();
for (const r of C.records) {
  if (seen.has(r.id)) { console.log('DUPLICATE collision id', r.id); bad++; }
  seen.add(r.id);

  // The three voices must all be present and distinct: conflating the
  // practitioner's words with the analyst's reading is the failure this
  // file exists to prevent.
  for (const field of ['verbatim', 'instrumentReading', 'analystReading']) {
    if (!r[field] || !r[field].trim()) { console.log('MISSING', field, 'in', r.id); bad++; }
  }
  if (r.verbatim === r.analystReading) { console.log('VOICES CONFLATED in', r.id); bad++; }

  // A correction must keep the reading it corrects. Overwriting the failed
  // analystReading would erase the evidence that the analyst layer makes the
  // same errors as the instruments.
  if (r.practitionerCorrection && !r.correctionEffect) {
    console.log('CORRECTION WITHOUT EFFECT NOTE in', r.id); bad++;
  }
  if (r.correctionEffect && !r.practitionerCorrection) {
    console.log('EFFECT NOTE WITHOUT VERBATIM CORRECTION in', r.id); bad++;
  }

  if (!r.types.length) { console.log('UNTYPED collision', r.id); bad++; }
  for (const t of r.types) if (!typeIds.has(t)) { console.log('BAD collision type', r.id, t); bad++; }
  if (!asymmetries.has(r.asymmetry)) { console.log('BAD asymmetry', r.id, r.asymmetry); bad++; }
  for (const d of r.domains) if (!ids.has(d)) { console.log('BAD domain ref', r.id, d); bad++; }

  const [file, anchor] = r.source.split('#');
  if (!anchor || !anchorsOf(file).has(anchor)) { console.log('BROKEN collision source', r.id, r.source); bad++; }
}

// Every type should be exercised by at least one record, or it is speculation
// rather than a category read out of the material.
for (const t of C.collisionTypes) {
  if (!C.records.some(r => r.types.includes(t.id))) {
    console.log('UNUSED collision type (no recorded case):', t.id); bad++;
  }
}

console.log('\ncollisions:', C.records.length);
console.log('collision types:', C.collisionTypes.length);
console.log('by stage:', Object.fromEntries(C.stages.map(s => [
  s.n + '-' + s.id,
  C.records.filter(r => r.types.some(t => C.collisionTypes.find(ct => ct.id === t).stage === s.id)).length
])));
console.log('asymmetry:', Object.fromEntries([...asymmetries].map(a => [a, C.records.filter(r => r.asymmetry === a).length])));
console.log('practitioner corrections on record:', C.records.filter(r => r.practitionerCorrection).length);

console.log(bad ? `\n${bad} PROBLEM(S)` : '\nAll checks passed');
