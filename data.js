/*
 * data.js — the canonical dataset behind widget.html.
 *
 * Loaded as a plain <script src>, which works when widget.html is opened
 * directly from disk. (fetch() of a local .json file is blocked by browser
 * CORS rules on file:// URLs, which would have cost the repo its "just open
 * it in a browser" property. This file is the JSON in all but syntax.)
 *
 * It also loads under Node — `require('./data.js')` — so the dataset can be
 * validated, queried, or re-exported without a build step.
 *
 * ---------------------------------------------------------------------------
 * SCHEMA
 *
 * domains[]        id, label, icon, accent, desc
 *
 * connections{}    keyed by source domain id; each entry:
 *   to             target domain id
 *   type           short name for the kind of relationship
 *   text           the claim itself
 *   source         anchor into RESEARCH_SYNTHESIS.md that argues it,
 *                  or null when nothing in the synthesis backs it yet
 *   confidence     "well-supported" | "contested" | "proposed"
 *   evidence       "historical" | "cross-cultural" | "weird-instrument"
 *                  | "theoretical"
 *   tension        id of an unresolved tension this edge participates in,
 *                  or null
 *
 * loop{}           the feedback cycle of §7, expressed as a path through the
 *                  graph above — every step resolves to a real connection,
 *                  so the loop inherits that edge's evidence rather than
 *                  asserting anything new
 *
 * tensions[]       the unresolved tensions of §8, referenced by edges
 *
 * ---------------------------------------------------------------------------
 * ON THE confidence AND evidence FIELDS
 *
 * These are a first pass, assigned by reading each claim against the
 * synthesis and its bibliography. They are meant to be argued with. In
 * particular, "well-supported" never means "true" — it means the claim has
 * survived more scrutiny than its neighbours, using instruments this repo
 * spends three documents criticising. An edge marked
 * confidence:"well-supported" / evidence:"weird-instrument" is precisely the
 * combination EPISTEMOLOGICAL_CRITIQUE.md warns about: well-replicated
 * *within* a sampling frame that excludes most of humanity.
 */

const SYSTEMS_DATA = {

  domains: [
    { id: "religion",   label: "Religions",              icon: "⛪",  accent: "#58a6ff", desc: "Moralizing gods, ritual modes, doctrinal vs imagistic transmission" },
    { id: "culture",    label: "Cultures",               icon: "🌍", accent: "#a371f7", desc: "Fluid vs hardwired attributes, collectivism vs individualism" },
    { id: "economics",  label: "Economics",              icon: "⚖️", accent: "#3fb950", desc: "Extractive vs inclusive institutions, behavioral biases, inequality" },
    { id: "cognitive",  label: "Cognitive Types",        icon: "🧠", accent: "#d29922", desc: "Analytic vs intuitive/holistic, System 1 vs System 2, rationality" },
    { id: "pathology",  label: "Pathologies",            icon: "⚡", accent: "#f85149", desc: "Dark Triad traits, adaptive dysfunction, systemic parasitism" },
    { id: "extraction", label: "Extraction & Predation", icon: "🔺", accent: "#db6d28", desc: "Surplus extraction, rent-seeking, parasitic institutions" }
  ],

  confidenceLevels: [
    { id: "well-supported", label: "Well-supported", desc: "Multiple converging lines of evidence; the claim has survived scrutiny — within its sampling frame." },
    { id: "contested",      label: "Contested",      desc: "Evidence is mixed, disputed, or has failed replication. Directionality is often unclear." },
    { id: "proposed",       label: "Proposed",       desc: "Argued in this synthesis but not directly tested. A hypothesis, not a finding." }
  ],

  evidenceKinds: [
    { id: "historical",       label: "Historical / institutional", desc: "Case evidence from documented institutions and events." },
    { id: "cross-cultural",   label: "Cross-cultural",             desc: "Comparative data spanning multiple societies. Broader, but the categories compared are usually still Western." },
    { id: "weird-instrument", label: "WEIRD instrument",           desc: "Rests on standardized psychometrics administered largely to Western, Educated, Industrialized, Rich, Democratic samples. See PSYCHOLOGY_TEST_CRITIQUE.md." },
    { id: "theoretical",      label: "Theoretical",                desc: "Reasoned from the framework. No direct measurement stands behind it." }
  ],

  tensions: [
    {
      id: "religion-paradox",
      label: "The Religion Paradox",
      question: "Does religion stabilize extractive systems by supplying elite legitimation, or destabilize them by supplying moral frameworks that can be turned against elites?",
      note: "Evidence suggests both, depending on whether the religious configuration is hardwired or fluid. Edges tagged here point in opposite directions and cannot all be true at once.",
      source: "#the-religion-paradox"
    },
    {
      id: "pathology-paradox",
      label: "The Pathology Paradox",
      question: "Are Dark Triad traits genuinely pathological, or adaptive phenotypic responses to extractive ecologies?",
      note: "If psychopathy is adaptive in extractive systems, then the 'pathology' label is a statement about context rather than dysfunction — and clinical treatment is institutionally misdirected.",
      source: "#the-pathology-paradox"
    },
    {
      id: "cognitive-politics",
      label: "The Cognitive Politics of Reform",
      question: "Can analytic thinking be cultivated at population scale without triggering the social-cognitive shutdown that reduces cooperation?",
      note: "If analytic thinking suppresses social cognition, rationalist reform movements may undermine the very solidarity that collective action requires.",
      source: "#the-cognitive-politics-of-reform"
    }
  ],

  connections: {

    religion: [
      {
        to: "culture",
        type: "structural coupling",
        text: "'Big God' religions create hardwired, entangled cultural attributes that coordinate large-scale cooperation but resist reform. Polytheistic traditions tend toward more fluid cultures.",
        source: "#big-god-religions-as-coordination-mechanisms",
        confidence: "contested",
        evidence: "cross-cultural",
        tension: "religion-paradox"
      },
      {
        to: "economics",
        type: "behavioral modulation",
        text: "Religious involvement correlates with greater consistency in economic decision-making and reduced reactivity to gains/losses. Religious dietary laws and observances reshape entire market demand patterns.",
        source: "#religion-as-cognitive-prosthetic",
        confidence: "contested",
        evidence: "weird-instrument",
        tension: null
      },
      {
        to: "cognitive",
        type: "cognitive fit",
        text: "Intuitive cognitive style correlates with stronger religious belief; analytic thinking is inversely related to supernatural belief. Rational thinkers may develop intrinsic (internalized) religiosity rather than extrinsic.",
        source: "#cognitive-science-of-religion",
        confidence: "contested",
        evidence: "weird-instrument",
        tension: "cognitive-politics"
      },
      {
        to: "pathology",
        type: "exploitation vector",
        text: "Doctrinal modes of religiosity (repetitive teaching, institutional hierarchy) can be co-opted by narcissistic leaders. Religious legitimation is a classic tool for masking extractive power.",
        source: "#religious-masking-of-predation",
        confidence: "proposed",
        evidence: "theoretical",
        tension: null
      },
      {
        to: "extraction",
        type: "ideological justification",
        text: "The dominium terrae (Genesis 1:26) has served as theological justification for both environmental extraction and human exploitation. Religious surplus extraction (tithes, temple economies) predates capitalism.",
        source: "#the-dual-use-problem",
        confidence: "well-supported",
        evidence: "historical",
        tension: "religion-paradox"
      }
    ],

    culture: [
      {
        to: "religion",
        type: "constraint / enablement",
        text: "Cultural fluidity determines how readily religious configurations can be repurposed or reformed. Hardwired cultures (e.g., caste systems) make religious-political reform extremely difficult.",
        source: "#cultural-attributes-hardwired-vs-fluid",
        confidence: "proposed",
        evidence: "theoretical",
        tension: "religion-paradox"
      },
      {
        to: "economics",
        type: "market shaping",
        text: "Collectivist cultures prioritize group-oriented purchasing and risk-pooling; individualist cultures drive demand for status-enhancing, personalized products. Cultural distance directly affects transaction costs.",
        source: "#cultural-attributes-hardwired-vs-fluid",
        confidence: "contested",
        evidence: "weird-instrument",
        tension: null
      },
      {
        to: "cognitive",
        type: "co-evolution",
        text: "Analytic thinking correlates with individualism; holistic/intuitive thinking correlates with collectivism and social density. Wheat-farming cultures develop more analytic cognition than rice-farming ones.",
        source: "#5-cognitive-types-and-epistemic-capture",
        confidence: "contested",
        evidence: "cross-cultural",
        tension: null
      },
      {
        to: "pathology",
        type: "vulnerability differential",
        text: "Cultures with high social density and strong conformity pressures may suppress detection of Dark Triad leaders. Conversely, individualist cultures may under-provide collective guardrails against predation.",
        source: "#6-pathology-as-contextual-adaptation",
        confidence: "proposed",
        evidence: "theoretical",
        tension: null
      },
      {
        to: "extraction",
        type: "resilience / fragility",
        text: "Hardwired cultural attributes (entangled, specific) make societies easier to exploit through divide-and-conquer. Fluid cultures can more rapidly reorganize against extractive elites.",
        source: "#cultural-attributes-hardwired-vs-fluid",
        confidence: "proposed",
        evidence: "historical",
        tension: null
      }
    ],

    economics: [
      {
        to: "religion",
        type: "demand-side",
        text: "Economic inequality intensifies status anxiety, which increases demand for religious meaning-making. Low-income countries show more negative perceptions of nature/resource conflicts, often mediated by religious frameworks.",
        source: "#3-religion-as-cultural-technology",
        confidence: "proposed",
        evidence: "theoretical",
        tension: "religion-paradox"
      },
      {
        to: "culture",
        type: "institutional imprinting",
        text: "Extractive economic institutions tend to produce cultures of distrust and short-termism. Inclusive institutions foster cultures of innovation, broad-based prosperity, and adaptive efficiency.",
        source: "#core-framework-acemoglu--robinson",
        confidence: "well-supported",
        evidence: "historical",
        tension: null
      },
      {
        to: "cognitive",
        type: "cognitive stress",
        text: "Economic inequality elicits Dark Triad-like competitive mindsets (distrust, self-interest, dominance preference) across populations. Cognitive load from poverty impairs decision-making quality.",
        source: "#cognitive-load-and-decision-making",
        confidence: "contested",
        evidence: "weird-instrument",
        tension: null
      },
      {
        to: "pathology",
        type: "selection pressure",
        text: "Economic inequality is positively associated with Dark Triad traits at the population level. Extractive systems select for and reward psychopathic, narcissistic, and Machiavellian behavior in leadership.",
        source: "#inequality-elicits-the-dark-triad",
        confidence: "contested",
        evidence: "weird-instrument",
        tension: "pathology-paradox"
      },
      {
        to: "extraction",
        type: "structural identity",
        text: "Extractive political institutions naturally accompany extractive economic institutions—power concentrates, property rights narrow, and surplus flows upward. This is the core engine of predation.",
        source: "#core-framework-acemoglu--robinson",
        confidence: "well-supported",
        evidence: "historical",
        tension: null
      }
    ],

    cognitive: [
      {
        to: "religion",
        type: "neural correlate",
        text: "Analytic cognitive style activates brain networks that suppress social cognition, making religious belief less intuitive. Holistic thinkers gravitate toward intrinsic religious orientation (faith as end, not means).",
        source: "#cognitive-science-of-religion",
        confidence: "contested",
        evidence: "weird-instrument",
        tension: "cognitive-politics"
      },
      {
        to: "culture",
        type: "cultural feedback",
        text: "Cognitive style is not just individual—it is shaped by social, cultural, and economic environment. Analytic thinking encourages inspecting cultural teachings for self-relevance and questioning social mores.",
        source: "#5-cognitive-types-and-epistemic-capture",
        confidence: "contested",
        evidence: "cross-cultural",
        tension: "cognitive-politics"
      },
      {
        to: "economics",
        type: "decision architecture",
        text: "Cognitive biases (loss aversion, anchoring, present bias) systematically distort economic decisions. Religious individuals show attenuated impulsivity in investment tasks, suggesting cognitive self-regulation.",
        source: "#f-behavioral-economics--cognitive-biases",
        confidence: "well-supported",
        evidence: "weird-instrument",
        tension: null
      },
      {
        to: "pathology",
        type: "exploitation of limits",
        text: "Dark Triad individuals exploit cognitive biases in others—using charm (Machiavellianism), appearance (narcissism), or threats (psychopathy) as manipulation tools. They are experts at hacking bounded rationality.",
        source: "#dark-triad-stratification-by-function",
        confidence: "contested",
        evidence: "weird-instrument",
        tension: null
      },
      {
        to: "extraction",
        type: "epistemic capture",
        text: "Predatory systems depend on information asymmetries and cognitive overload. Extractive elites benefit when populations operate under high cognitive load, depleted self-control, and heuristic-driven reasoning.",
        source: "#extractive-systems-and-epistemic-capture",
        confidence: "proposed",
        evidence: "theoretical",
        tension: null
      }
    ],

    pathology: [
      {
        to: "religion",
        type: "institutional capture",
        text: "Narcissistic leaders often perform well in religious job interviews and gain followings through favorable first impressions. Religious institutions with strong hierarchy and deference to authority are vulnerable to Dark Triad infiltration.",
        source: "#religious-masking-of-predation",
        confidence: "proposed",
        evidence: "weird-instrument",
        tension: "religion-paradox"
      },
      {
        to: "culture",
        type: "cultural normalization",
        text: "Dark Triad traits are more prevalent in unequal societies because they are adaptive for status competition. Cultural norms that incentivize ruthless self-advancement normalize what would otherwise be pathological.",
        source: "#inequality-elicits-the-dark-triad",
        confidence: "contested",
        evidence: "cross-cultural",
        tension: "pathology-paradox"
      },
      {
        to: "economics",
        type: "career selection",
        text: "Dark Triad individuals are drawn to economics, law, and politics majors. Companies with psychopathic leaders destroy shareholder value long-term but deliver short-term extraction. Machiavellianism predicts higher salaries.",
        source: "#dark-triad-stratification-by-function",
        confidence: "contested",
        evidence: "weird-instrument",
        tension: null
      },
      {
        to: "cognitive",
        type: "cognitive asymmetry",
        text: "Dark Triad individuals show reduced empathy and theory of mind, but heightened sensitivity to status threats. They exploit the intuitive, social-cognitive processing of others while remaining analytically cold.",
        source: "#the-mismatch-hypothesis",
        confidence: "contested",
        evidence: "weird-instrument",
        tension: null
      },
      {
        to: "extraction",
        type: "contextual adaptation",
        text: "Pathology and predation are not identical but are systemically coupled. What is labeled 'pathological' in a cooperative context may be highly adaptive in an extractive one—psychopathy as institutional logic.",
        source: "#the-mismatch-hypothesis",
        confidence: "proposed",
        evidence: "theoretical",
        tension: "pathology-paradox"
      }
    ],

    extraction: [
      {
        to: "religion",
        type: "dual use",
        text: "Religious institutions have historically managed extraction through tithes, temple economies, and theocratic rent. Moralizing gods can enforce cooperation for elites or mobilize resistance against them.",
        source: "#the-dual-use-problem",
        confidence: "well-supported",
        evidence: "historical",
        tension: "religion-paradox"
      },
      {
        to: "culture",
        type: "cultural deformation",
        text: "Extractive systems produce cultures of survivalism, risk aversion, and distrust. Peasant economies under extraction develop strategies that prioritize security over profit maximization.",
        source: "#cultural-resistance",
        confidence: "contested",
        evidence: "historical",
        tension: null
      },
      {
        to: "economics",
        type: "foundational mechanism",
        text: "Extraction and exploitation are the key engines in surplus production for the few by the many. Both natural resources and reproductive labor are treated as externalities in capitalist accounting.",
        source: "#core-framework-acemoglu--robinson",
        confidence: "well-supported",
        evidence: "historical",
        tension: null
      },
      {
        to: "cognitive",
        type: "cognitive depletion",
        text: "Extractive institutions create chronic cognitive load through unpredictability, surveillance, and scarcity. This impairs the analytic capacities needed to recognize and resist predation.",
        source: "#extractive-systems-and-epistemic-capture",
        confidence: "proposed",
        evidence: "theoretical",
        tension: null
      },
      {
        to: "pathology",
        type: "systemic selection",
        text: "Predatory extraction systems select for and elevate individuals with Dark Triad traits. The 'pathology' label often reflects the mismatch between predatory behavior and cooperative norms, not dysfunction per se.",
        source: "#the-feedback-loop",
        confidence: "contested",
        evidence: "weird-instrument",
        tension: "pathology-paradox"
      }
    ]
  },

  /*
   * §7's "predatory matrix" is not separate data — it is a six-step cycle
   * through the connections above. Each step names an edge that already
   * exists, so the loop cannot claim more confidence than its weakest link.
   */
  loop: {
    title: "The Predatory Matrix",
    source: "#7-the-integrated-feedback-loop",
    steps: [
      { from: "extraction", to: "economics", label: "Extractive institutions create economic inequality." },
      { from: "economics",  to: "pathology", label: "Inequality selects for and elevates Dark Triad personalities into leadership." },
      { from: "pathology",  to: "religion",  label: "Those leaders use religious legitimation to stabilize their rule." },
      { from: "religion",   to: "culture",   label: "Legitimation hardens into entangled cultural attributes that resist reform." },
      { from: "culture",    to: "cognitive", label: "Hardwired religious-cultural systems reduce cognitive flexibility in populations." },
      { from: "cognitive",  to: "extraction", label: "Cognitive depletion from scarcity and surveillance impairs resistance, preserving extractive institutions." }
    ],
    escapes: [
      "Fluid cultures that can repurpose attributes",
      "Inclusive institutions that broaden power and property rights",
      "Cognitive environments that reduce chronic scarcity-load"
    ]
  },

  /*
   * The practitioner material in this repo argues that single-channel
   * instruments falsify multi-channel reality — which is a fair description
   * of what a six-node graph does to this subject matter. The widget states
   * that against itself rather than letting the diagram's tidiness pass for
   * an argument.
   */
  caveat: {
    title: "This map is a single-channel instrument",
    body: "Six labelled boxes and thirty arrows are a gauge. THERMODYNAMICS.md and the gauge-vs-body field note argue that gauges fail exactly where conditions stop being standard — they measure one variable at one point and cannot integrate across channels. The six categories here are Western constructs, most of the edges rest on instruments built for Western subjects, and the tidiness of the diagram is a property of the diagram, not of the world. Read the confidence and evidence tags as the gauge's error bars, and PRACTITIONER_EPISTEMOLOGY.md as the body that disagrees with it.",
    links: [
      { label: "EPISTEMOLOGICAL_CRITIQUE.md", href: "EPISTEMOLOGICAL_CRITIQUE.md" },
      { label: "PRACTITIONER_EPISTEMOLOGY.md", href: "PRACTITIONER_EPISTEMOLOGY.md" },
      { label: "THERMODYNAMICS.md", href: "THERMODYNAMICS.md" },
      { label: "The Measurement Gap", href: "RESEARCH_SYNTHESIS.md#the-measurement-gap" }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SYSTEMS_DATA;
}
