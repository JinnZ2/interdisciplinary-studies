/*
 * collisions.js — recorded collisions between ontologies.
 *
 * Companion to data.js. Where data.js holds one ontology's rendering of the
 * subject matter (six domains, thirty edges), this file holds the events where
 * that rendering met a person who does not share it and failed in a specific,
 * classifiable way.
 *
 * The premise: the breakage is the measurement. An instrument's internal
 * validity checks cannot tell you what the instrument presupposes. A collision
 * can — and *which kind* of collision it is determines what you learn.
 *
 * Loaded the same way as data.js: plain <script src> in the browser,
 * require() under Node. Checked by validate.mjs.
 *
 * ---------------------------------------------------------------------------
 * THREE VOICES, KEPT SEPARATE
 *
 * Every record distinguishes:
 *
 *   verbatim          The practitioner's own words. Primary source. Original
 *                     spelling and punctuation. Never edit, never tidy.
 *   instrumentReading What the test concludes from the response.
 *   analystReading    The repo's interpretation of what the practitioner meant.
 *
 * analystReading is NOT the practitioner's ontology. It is a WEIRD-framed
 * translation of it, written in the third person by an analyst who does not
 * share that ontology — the same move the instruments make, one level up.
 * It is included because it is useful and because it is what the repo actually
 * contains, not because it is authoritative. Anything reading this file should
 * treat `verbatim` as evidence and `analystReading` as a claim.
 *
 * The practitioner is the person best placed to correct analystReading, and
 * corrections belong in the record rather than in a footnote.
 *
 * ---------------------------------------------------------------------------
 * THE DEPTH ORDERING
 *
 * collisionTypes are sorted by where in the measurement chain the mismatch
 * occurs:
 *
 *   world
 *     -> is there such a variable, and of what logical kind?  (stage 1)
 *     -> what does the term denote?                           (stage 2)
 *     -> what answers may be given?                           (stage 3)
 *     -> what is the output taken to mean?                    (stage 4)
 *     -> is the result good or bad?                           (stage 5)
 *     -> whose reading counts?                                (stage 6)
 *
 * The working hypothesis of this file: the earlier the stage, the higher the
 * diagnostic yield, and the less a redesign can fix it. A stage-3 failure is
 * an instrument-design problem. A stage-1 failure says the variable is a local
 * construct that was mistaken for a universal.
 *
 * This ordering is a hypothesis, not a finding. It was read out of six
 * collisions from one practitioner. A collision fitting none of these types
 * would falsify the scheme, which is the point of writing it down.
 */

const COLLISIONS = {

  stages: [
    { n: 1, id: "variable-existence",  label: "Does the variable exist, and of what kind?" },
    { n: 2, id: "variable-definition", label: "What does the term denote?" },
    { n: 3, id: "response-space",      label: "What answers may be given?" },
    { n: 4, id: "output-inference",    label: "What is the output taken to mean?" },
    { n: 5, id: "normative-reading",   label: "Is the result good or bad?" },
    { n: 6, id: "instrument-authority", label: "Whose reading counts?" }
  ],

  collisionTypes: [
    {
      id: "wrong-arity",
      label: "Wrong arity",
      stage: "variable-existence",
      definition: "The instrument treats as a property of a person what the other ontology holds only as a relation between a person and an environment.",
      yield: "Exposes the logical form the instrument assumes. A trait score cannot represent a relation; averaging across contexts produces a number that refers to nothing.",
      revisable: "no"
    },
    {
      id: "category-absence",
      label: "Category absence",
      stage: "variable-existence",
      definition: "The instrument's category has no counterpart in the other ontology. Not disagreement about its value — absence of the category itself.",
      yield: "Strong evidence that the category was constructed rather than discovered. Its universality was an artifact of only ever asking people who share it.",
      revisable: "no"
    },
    {
      id: "category-surplus",
      label: "Category surplus",
      stage: "variable-existence",
      definition: "The mirror case: the subject holds a category the instrument's response space does not contain.",
      yield: "Shows the response space is not merely coarse but incomplete. Responses will be systematically misfiled into the nearest available box, and the misfiling will look like data.",
      revisable: "partly"
    },
    {
      id: "premise-refusal",
      label: "Premise refusal",
      stage: "variable-existence",
      definition: "The subject declines the question as unanswerable in the abstract, demanding context the instrument deliberately strips out.",
      yield: "Identifies a variable the instrument treats as context-free that is not. Scored as a missing or middling answer, so the refusal is invisible in the results.",
      revisable: "no"
    },
    {
      id: "false-cognate",
      label: "False cognate",
      stage: "variable-definition",
      definition: "Instrument and subject share the vocabulary but not the referent. Both use the phrase; they are not discussing the same object.",
      yield: "Surfaces the ontological commitments the instrument smuggles in as ordinary language. The subject can answer 'correctly' while the answer means something unrelated.",
      revisable: "partly"
    },
    {
      id: "format-erasure",
      label: "Format erasure",
      stage: "response-space",
      definition: "The instrument's format, independent of its content, destroys the reasoning that would have revealed the mismatch.",
      yield: "A finding about method rather than culture, and the most portable one here: it applies to any forced-choice or scalar instrument, in any population.",
      revisable: "yes"
    },
    {
      id: "different-carving",
      label: "Different carving",
      stage: "output-inference",
      definition: "Several distinct cognitive pathways produce identical outputs, and the instrument's inference from output to construct collapses them.",
      yield: "Shows the instrument's hidden situational premises — good faith, institutional trust, a decontextualized problem. Fixable in principle by measuring pathway rather than output.",
      revisable: "partly"
    },
    {
      id: "valence-inversion",
      label: "Valence inversion",
      stage: "normative-reading",
      definition: "Both ontologies recognize the same phenomenon and assign it opposite normative signs.",
      yield: "Reveals a normative frame riding inside a descriptive one. The measurement may be sound while the interpretation is parochial.",
      revisable: "partly"
    },
    {
      id: "authority-inversion",
      label: "Authority inversion",
      stage: "instrument-authority",
      definition: "Agreement about the object, disagreement about which instrument is trustworthy — often conditional on whether standard conditions hold.",
      yield: "Surfaces the instrument's unstated scope conditions and its implicit claim to epistemic monopoly.",
      revisable: "yes"
    }
  ],

  /*
   * asymmetry: can each frame state the other's position?
   *
   *   instrument-cannot-represent  The instrument has no way to express the
   *                                subject's reading. The subject can state the
   *                                instrument's. One frame contains the other.
   *   post-hoc-only                The discipline behind the instrument can
   *                                represent the subject's reading, but only
   *                                after a collision it did not predict and has
   *                                no mechanism to seek.
   *   mutual                       Both frames can state the other's position.
   */
  records: [
    {
      id: "crt-bat-ball",
      instrument: {
        name: "Cognitive Reflection Test (CRT)",
        citation: "Frederick (2005), Journal of Economic Perspectives",
        item: "A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?",
        scoring: "5 cents = analytic thinker; 10 cents = intuitive thinker"
      },
      verbatim: "It initially senses as a trick question in my gut. One that senses like its 'to be wary of' actually... probably not exactly what im supposed to get out of that. That sense transfers it to 'must analyze' thinking.",
      instrumentReading: "The response is pre-answer hesitation; the score depends only on which number is produced. Either output maps to one of two cognitive styles.",
      analystReading: "Threat assessment runs before content processing. The shift to analysis is triggered by wariness, not intellectual engagement — defensive analysis, scanning for the trap. Four distinct pathways (intuitive, suspicious-and-rushing, analytic, suspicious-and-double-checking) produce only two output values.",
      types: ["different-carving"],
      asymmetry: "instrument-cannot-represent",
      note: "The practitioner states the instrument's frame explicitly — 'probably not exactly what im supposed to get out of that' — while holding their own. The instrument has no slot for that meta-position.",
      domains: ["cognitive"],
      source: "PSYCHOLOGY_TEST_CRITIQUE.md#question-1--cognitive-reflection-test-crt"
    },
    {
      id: "npi-center-of-attention",
      instrument: {
        name: "Narcissistic Personality Inventory (NPI)",
        citation: "Raskin & Hall (1979), Psychological Reports",
        item: "Forced choice: 'I really like to be the center of attention' OR 'It makes me uncomfortable to be the center of attention.'",
        scoring: "First option indicates narcissism; second indicates low narcissism"
      },
      verbatim: "Well i do feel uncomfortable being the center of attention... it means that others are less aware of their environment if their focus is on me instead of their surroundings.",
      instrumentReading: "Low narcissism. Scored identically to modesty, insecurity, and introversion.",
      analystReading: "'Center of attention' is parsed as a system state, not a social status — attention as a finite resource that must stay allocated to environmental monitoring. The reasoning is about the group's awareness, not about the self, so it is not a narcissism measurement at all.",
      types: ["false-cognate", "format-erasure"],
      asymmetry: "instrument-cannot-represent",
      note: "The clearest format case in the set. The reasoning that reveals the mismatch exists only because the response was recorded outside the instrument; the forced choice would have deleted it and returned a plausible score.",
      domains: ["pathology", "culture"],
      source: "PSYCHOLOGY_TEST_CRITIQUE.md#question-2--narcissistic-personality-inventory-npi"
    },
    {
      id: "mfq-emotional-suffering",
      instrument: {
        name: "Moral Foundations Questionnaire (MFQ)",
        citation: "Graham, Haidt, et al. (2011), Journal of Personality and Social Psychology",
        item: "'Whether or not someone suffered emotionally' — is this relevant to whether something is right or wrong?",
        scoring: "Six-point relevance scale; high ratings indicate a harm/care foundation"
      },
      verbatim: "i wonder on the context... i cant honestly answer until i understand to the best of my abilities. does the person use emotion as a weapon? a sense? a state? when, where, what framework? what environment? causal factors?",
      instrumentReading: "Unscorable, or scored as low harm/care.",
      analystReading: "The premise is refused rather than the question answered: suffering is not treated as a stable moral variable that survives removal from context. 'Emotion as a weapon' introduces a category the instrument's space (harm to minimize / weakness to manage / irrelevant) does not contain.",
      types: ["premise-refusal", "category-surplus"],
      asymmetry: "instrument-cannot-represent",
      note: "Two failures at the deepest stage in one item. The scale cannot express 'unanswerable as posed', so a refusal and a genuine low rating are indistinguishable in the data.",
      domains: ["religion", "culture"],
      source: "PSYCHOLOGY_TEST_CRITIQUE.md#question-3--moral-foundations-questionnaire-mfq"
    },
    {
      id: "bfi-handles-stress",
      instrument: {
        name: "Big Five Inventory (BFI)",
        citation: "John, Donahue & Kentle (1991); rev. Benet-Martinez & John (1998)",
        item: "'I see myself as someone who ... is relaxed, handles stress well.'",
        scoring: "Five-point agreement scale on the Neuroticism / Emotional Stability dimension"
      },
      verbatim: "Huh. Depends on the situation, the place, environment, my calibration between environment and senses. If i 'feel' stressed then my calibration is off... if im relaxed, then i must ask if my environment warrants that...",
      instrumentReading: "Ambivalent. Scored mid-scale, or averaged across contexts into a single trait value.",
      analystReading: "Stress is treated as feedback about calibration between senses and environment, not as a trait of a person. Relaxation is a condition to be verified against the environment rather than a goal — inappropriate calm is a warning that the sensory system may be missing something.",
      types: ["wrong-arity", "valence-inversion"],
      asymmetry: "instrument-cannot-represent",
      note: "The deepest case in the set. 'Handles stress well' is a one-place predicate about a person; the practitioner's frame holds only a two-place relation between senses and environment. No scale value can denote a relation, so the resulting number refers to nothing. The valence inversion rides on top: the instrument's healthy pole is the practitioner's alarm condition.",
      domains: ["pathology", "cognitive"],
      source: "PSYCHOLOGY_TEST_CRITIQUE.md#question-4--big-five-inventory-bfi"
    },
    {
      id: "absence-of-diagnostic-categories",
      instrument: {
        name: "Diagnostic and trait-label frameworks",
        citation: "Field note, not an administered instrument",
        item: "Labels such as dyslexia; trait descriptions such as 'small hands'; division of labor by role",
        scoring: "Differences between people are traits to be measured, labeled, and managed"
      },
      verbatim: "I find it so interesting that labels or pathologies like that even exist. Im faster at replacing the number 8 cylinder spark plug... because my hands are literally half the size of his. I do microcontroller soldering better and faster... lots of electrical stuff for the same reasons... Theres no division of labor based upon anything other than functionality in the environment i guess.",
      instrumentReading: "A person with a diagnosable condition, a person without one, and an accommodation arrangement between them.",
      analystReading: "Differences are geometries — spatial and sensory fits between body and task — rather than traits. The system routes around difference without naming it, so the label is not rejected as wrong; it is unnecessary. 'Functionality in the environment' is offered unprompted as the only relevant category.",
      types: ["category-absence"],
      asymmetry: "post-hoc-only",
      note: "Note the stance: the labels are found *interesting that they exist at all*, which is not the same as disputing them. That is the signature of category absence rather than disagreement — there is nothing to dispute.",
      domains: ["pathology", "cognitive", "culture"],
      source: "PRACTITIONER_EPISTEMOLOGY.md#entry-2-continued-the-absence-of-categories"
    },
    {
      id: "gauge-vs-body",
      instrument: {
        name: "Engine instrumentation",
        citation: "Field note, not an administered instrument",
        item: "Coolant level and coolant sensor fault indication",
        scoring: "Calibrated, certified, standardized. The gauge is authoritative; subjective report is not."
      },
      verbatim: "Often... mostly because gauges arent able to handle variable things at once. They are wonderful as additional information, but always to be questioned. I sense the coolant being low before the gauge says, i sense the coolant sensor fault that shuts the engine off on a grade as being inaccurate (doesnt help dealing with the situation but allows for a narrowing of possibilities so i can then trust on the rest of the machine to operate functionally under a bad situation).",
      instrumentReading: "The sensor reports a fault; the correct response is to trust the reading and stop.",
      analystReading: "The gauge is a single-channel instrument measuring one variable at one point; the body integrates temperature, vibration, sound, and heat distribution simultaneously. Authority is reallocated conditionally — the gauge is trusted until a grade changes several variables at once, which is exactly when it is calibrated wrong.",
      types: ["authority-inversion"],
      asymmetry: "mutual",
      note: "The only mutual case here, and the mildest. Both frames can state the other's position and both agree what coolant is. The disagreement is about scope conditions the instrument never declares — which is why this one is revisable by better engineering rather than by a different ontology.",
      domains: ["cognitive", "economics"],
      source: "PRACTITIONER_EPISTEMOLOGY.md#field-note-gauge-vs-body--coolant-sensing"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = COLLISIONS;
}
