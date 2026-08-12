import { readFileSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const D = require('./data.js');

const md = readFileSync(new URL('./RESEARCH_SYNTHESIS.md', import.meta.url), 'utf8');
const slug = s => s.toLowerCase().replace(/[^\w\- ]/g, '').replace(/ /g, '-');
const anchors = new Set(md.split('\n').filter(l => /^#{1,6} /.test(l)).map(l => slug(l.replace(/^#+ /, ''))));

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
console.log(bad ? `\n${bad} PROBLEM(S)` : '\nAll checks passed');
