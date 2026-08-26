/*
 * domains.js — an enumeration of domains, grouped by the carving that cut them out.
 *
 * Companion to data.js. Where data.js holds six domains and thirty edges, this file
 * holds the population those six were drawn from — and makes the size of the omission
 * countable rather than merely admitted.
 *
 * Loaded the same way as data.js and collisions.js: plain <script src> in the browser,
 * require() under Node. Checked by validate.mjs.
 *
 * ---------------------------------------------------------------------------
 * WHY THIS FILE EXISTS
 *
 * The widget's caveat panel says a six-node graph falsifies a multi-channel subject.
 * That was an assertion. This file is the arithmetic behind it: with N domains there
 * are N(N-1)/2 unordered pairs to relate, and the widget covers fifteen of them —
 * six domains, rendered as thirty directed edges. The fraction is printed by
 * validate.mjs so nobody has to take it on trust.
 *
 * It also gives ONTOLOGICAL_COLLISIONS.md's open question zero — "why were the excluded
 * possibilities chosen to be left out?" — one candidate mechanism that can be checked
 * rather than speculated about: tractability. Thirty edges are legible on one screen.
 * The 3,879,505 pairs this file's 2,786 domains generate are not. That is a sufficient
 * reason to stop at six, it
 * requires nobody's bad faith, and it predicts that the excluded domains should be the
 * ones that are expensive to render rather than the ones that are unimportant.
 *
 * Tractability being *sufficient* is not evidence it is what happened. The other
 * candidates in that question — funding, disciplinary boundary maintenance, an
 * invisible sampling frame, active epistemic capture — are not excluded by this file
 * and are not tested by it.
 *
 * ---------------------------------------------------------------------------
 * THE FOUR COORDINATES
 *
 * A cross-domain claim needs four coordinates, not two. The four fall out of the
 * implementation parameters the practitioner named when they corrected this repo's
 * founding premise (legacy/PRECEDENCE.md, L1):
 *
 *   1. A          source domain
 *   2. B          target domain
 *   3. carving    whose cut A and B are drawn from          (substrate)
 *   4. threshold  the timescale over which the relation is observable
 *
 * plus one scalar:
 *
 *      bandwidth  how many sensory channels carry the relation
 *
 * data.js fixes coordinates 3 and 4 silently. Every one of its six domains is from the
 * institutional-academic carving, and every edge is stated at the timescale institutional
 * publication runs on. Two of the four axes are collapsed to a point and the collapse is
 * not visible in the rendering — which is the same failure the gauge-vs-body record
 * describes, one level up: a single-channel instrument reporting as though it were
 * measuring the whole state.
 *
 * A cross-domain map that varied coordinate 3 would put the same relation under two
 * carvings and ask whether it survives translation. Nothing here does that yet.
 *
 * ---------------------------------------------------------------------------
 * WHAT A "CARVING" IS, AND WHY THE FIRST ONE IS SO MUCH BIGGER
 *
 * A carving is a way of cutting the world into knowable areas. The institutional-academic
 * carving is the longest list here by a wide margin. That is a fact about this file's
 * author, not about the world: an AI trained on Western text can enumerate university
 * subfields to exhaustion and cannot enumerate what it has no corpus for. The imbalance
 * is left visible rather than corrected by padding the other carvings, because a padded
 * list would hide the measurement.
 *
 * Read the ratio between carving sizes as a property of the instrument. It is the
 * WEIRD sampling frame, showing up as a row count.
 *
 * ---------------------------------------------------------------------------
 * NAMING RULE — READ BEFORE ADDING
 *
 * Every name here is either a term in ordinary English use or a plain descriptive
 * phrase. Nothing is a claim about a specific named tradition, and nothing is a
 * borrowed or invented term from a language or practice this file has no access to.
 *
 * "Reading water depth by sound" is a description of an activity. It is honest because
 * it describes without attributing. Naming a domain after a people, or coining a
 * foreign-looking term for it, would be a fabricated citation wearing different clothes
 * — the failure mode CLAUDE.md rates worst available in this repo.
 *
 * The cost is that domains whose only names live in languages and practices not
 * represented here appear either under a clumsy English description or not at all. That
 * cost is not fixable from inside this file. It is recorded in `gaps` below.
 *
 * ---------------------------------------------------------------------------
 * SCHEMA
 *
 * carvings[]   id       stable identifier
 *              name     human-readable name of the carving
 *              cut      what question this carving answers to divide the world
 *              note     what the carving makes easy to see, and what it hides
 *              domains  array of domain names, globally unique across the file
 *
 * gaps[]       named absences — things known to be missing, kept as content rather
 *              than silently omitted. An honest gap is data; a padded list is not.
 */

const DOMAIN_CARVINGS = {

  carvings: [

  {
    id: "institutional-academic",
    name: "The institutional-academic carving",
    cut: "What is there a department, journal, or degree for?",
    note: "Cuts by who certifies knowledge and where it is published. Makes funding, training pipelines and citation flow legible. Hides everything practised without a credential, and treats the boundary between two subfields as though it were a boundary in the world. This is the carving all six of data.js's domains come from.",
    domains: [
      // physics and the physical sciences
      "classical mechanics", "statistical mechanics", "thermodynamics", "electromagnetism",
      "optics", "acoustics", "fluid dynamics", "aerodynamics", "plasma physics",
      "condensed matter physics", "solid state physics", "soft matter physics",
      "quantum mechanics", "quantum field theory", "particle physics", "nuclear physics",
      "atomic physics", "molecular physics", "astrophysics", "cosmology",
      "general relativity", "special relativity", "gravitational physics", "biophysics",
      "geophysics", "medical physics", "computational physics", "nonlinear dynamics",
      "chaos theory", "complexity science", "cryogenics", "metrology", "photonics",
      "spintronics", "superconductivity", "magnetohydrodynamics", "rheology", "tribology",
      "vacuum physics", "surface physics", "semiconductor physics", "laser physics",
      "quantum optics", "atmospheric physics", "space physics", "accelerator physics",
      "health physics", "acoustical physics", "econophysics", "sonochemistry",

      // chemistry
      "organic chemistry", "inorganic chemistry", "physical chemistry",
      "analytical chemistry", "biochemistry", "electrochemistry", "photochemistry",
      "thermochemistry", "quantum chemistry", "computational chemistry",
      "polymer chemistry", "materials chemistry", "surface chemistry", "colloid chemistry",
      "catalysis", "crystallography", "spectroscopy", "chromatography", "radiochemistry",
      "nuclear chemistry", "green chemistry", "medicinal chemistry",
      "agricultural chemistry", "food chemistry", "environmental chemistry",
      "atmospheric chemistry", "marine chemistry", "geochemistry", "cosmochemistry",
      "astrochemistry", "supramolecular chemistry", "organometallic chemistry",
      "stereochemistry", "chemical kinetics", "chemical thermodynamics", "petrochemistry",
      "flavor chemistry", "forensic chemistry", "clinical chemistry", "cheminformatics",

      // biology and life sciences
      "molecular biology", "cell biology", "genetics", "genomics", "proteomics",
      "metabolomics", "transcriptomics", "epigenetics", "developmental biology",
      "evolutionary biology", "population genetics", "quantitative genetics",
      "phylogenetics", "systematics", "biological taxonomy", "ecology", "community ecology",
      "ecosystem ecology", "behavioral ecology", "chemical ecology", "landscape ecology",
      "microbial ecology", "disease ecology", "fire ecology", "conservation biology",
      "restoration ecology", "microbiology", "virology", "bacteriology", "mycology",
      "parasitology", "immunology", "physiology", "neurobiology", "neuroscience",
      "botany", "zoology", "entomology", "ornithology", "herpetology", "ichthyology",
      "mammalogy", "primatology", "marine biology", "limnology", "soil biology",
      "astrobiology", "synthetic biology", "systems biology", "structural biology",
      "biomechanics", "bioinformatics", "cryobiology", "chronobiology", "ethology",
      "sociobiology", "paleobiology", "paleontology", "paleobotany", "palynology",
      "histology", "embryology", "gross anatomy", "comparative anatomy", "cytology",
      "biogeography", "phycology", "bryology", "lichenology", "nematology", "malacology",
      "arachnology", "myrmecology", "apiology", "helminthology", "protozoology",
      "radiobiology", "photobiology", "gerontology", "teratology", "toxinology",
      "biosemiotics", "biogerontology", "molecular ecology", "evolutionary development",

      // earth, ocean, atmosphere, space
      "geology", "mineralogy", "petrology", "sedimentology", "stratigraphy",
      "structural geology", "plate tectonics", "volcanology", "seismology", "hydrology",
      "hydrogeology", "glaciology", "geomorphology", "pedology", "paleoclimatology",
      "meteorology", "climatology", "oceanography", "physical oceanography",
      "chemical oceanography", "biological oceanography", "atmospheric science",
      "remote sensing", "geodesy", "cartography", "geographic information science",
      "economic geology", "engineering geology", "planetary science", "selenology",
      "meteoritics", "speleology", "karst science", "permafrost science",
      "coastal science", "estuarine science", "soil science", "agronomy",
      "geomicrobiology", "geostatistics", "isotope geochemistry", "magnetostratigraphy",
      "dendrochronology", "geoarchaeology", "environmental science", "biogeochemistry",

      // medicine and clinical fields
      "internal medicine", "general surgery", "anesthesiology", "cardiology",
      "pulmonology", "gastroenterology", "nephrology", "hepatology", "hematology",
      "oncology", "endocrinology", "rheumatology", "infectious disease medicine",
      "neurology", "psychiatry", "dermatology", "ophthalmology", "otolaryngology",
      "urology", "obstetrics", "gynecology", "pediatrics", "neonatology", "geriatrics",
      "emergency medicine", "intensive care medicine", "family medicine",
      "occupational medicine", "sports medicine", "aerospace medicine",
      "hyperbaric medicine", "wilderness medicine", "tropical medicine",
      "palliative medicine", "pain medicine", "rehabilitation medicine",
      "anatomical pathology", "clinical pathology", "forensic pathology", "radiology",
      "interventional radiology", "nuclear medicine", "radiation oncology",
      "pharmacology", "pharmacokinetics", "toxicology", "epidemiology", "public health",
      "global health", "biostatistics", "medical genetics", "transplant medicine",
      "transfusion medicine", "orthopedics", "plastic surgery", "neurosurgery",
      "cardiothoracic surgery", "vascular surgery", "trauma surgery", "bariatric surgery",
      "dentistry", "periodontics", "endodontics", "orthodontics", "prosthodontics",
      "oral surgery", "veterinary medicine", "veterinary surgery", "nursing",
      "midwifery", "physiotherapy", "occupational therapy", "speech-language pathology",
      "audiology", "optometry", "podiatry", "dietetics", "clinical nutrition", "pharmacy",
      "medical imaging", "clinical embryology", "sleep medicine", "addiction medicine",
      "preventive medicine", "medical informatics", "nosology",

      // engineering
      "civil engineering", "structural engineering", "geotechnical engineering",
      "transportation engineering", "water resources engineering",
      "environmental engineering", "mechanical engineering", "thermal engineering",
      "mechatronics", "robotics", "control engineering", "aerospace engineering",
      "aeronautical engineering", "astronautical engineering", "electrical engineering",
      "power systems engineering", "electronics engineering",
      "telecommunications engineering", "computer engineering", "chemical engineering",
      "process engineering", "petroleum engineering", "reservoir engineering",
      "mining engineering", "metallurgical engineering", "materials engineering",
      "ceramic engineering", "polymer engineering", "nuclear engineering",
      "biomedical engineering", "tissue engineering", "genetic engineering",
      "agricultural engineering", "food engineering", "forest engineering",
      "marine engineering", "naval architecture", "ocean engineering",
      "industrial engineering", "systems engineering", "manufacturing engineering",
      "quality engineering", "reliability engineering", "safety engineering",
      "fire protection engineering", "acoustical engineering", "optical engineering",
      "software engineering", "network engineering", "security engineering",
      "railway engineering", "automotive engineering", "building services engineering",
      "lighting engineering", "corrosion engineering", "welding engineering", "geomatics",
      "seismic engineering", "wind engineering", "cryogenic engineering",
      "instrumentation engineering", "sanitary engineering", "irrigation engineering",
      "value engineering", "human factors engineering", "photovoltaic engineering",

      // mathematics and formal sciences
      "number theory", "abstract algebra", "linear algebra", "group theory", "ring theory",
      "field theory", "galois theory", "category theory", "topology", "algebraic topology",
      "differential topology", "euclidean geometry", "differential geometry",
      "algebraic geometry", "analytic geometry", "discrete geometry", "real analysis",
      "complex analysis", "functional analysis", "harmonic analysis", "measure theory",
      "probability theory", "stochastic processes", "mathematical statistics",
      "combinatorics", "graph theory", "set theory", "model theory", "proof theory",
      "computability theory", "mathematical logic", "numerical analysis",
      "mathematical optimization", "operations research", "game theory",
      "information theory", "coding theory", "cryptography", "dynamical systems",
      "ergodic theory", "ordinary differential equations", "partial differential equations",
      "calculus of variations", "mathematical physics", "financial mathematics",
      "actuarial science", "queueing theory", "control theory", "decision theory",
      "order theory", "lattice theory", "matroid theory", "knot theory", "tiling theory",
      "nonstandard analysis", "constructive mathematics", "reverse mathematics",

      // computing
      "algorithms", "data structures", "computational complexity",
      "programming language theory", "compiler construction", "operating systems",
      "distributed systems", "computer architecture", "computer networks",
      "database systems", "information retrieval", "machine learning", "deep learning",
      "natural language processing", "computer vision", "computer graphics",
      "human-computer interaction", "computer security", "formal verification",
      "quantum computing", "parallel computing", "high-performance computing",
      "embedded systems", "real-time systems", "software architecture",
      "computational geometry", "computational linguistics", "knowledge representation",
      "automated reasoning", "multi-agent systems", "reinforcement learning",
      "computational social science", "scientific visualization", "digital signal processing",
      "speech recognition", "recommender systems", "computer algebra",
      "programming pedagogy", "site reliability practice", "computational creativity",

      // social sciences
      "sociology", "rural sociology", "urban sociology", "medical sociology",
      "cultural anthropology", "social anthropology", "linguistic anthropology",
      "biological anthropology", "archaeology", "underwater archaeology",
      "industrial archaeology", "ethnography", "ethnology", "demography",
      "human geography", "physical geography", "political geography", "political science",
      "comparative politics", "international relations", "political theory",
      "public administration", "public policy", "microeconomics", "macroeconomics",
      "econometrics", "development economics", "behavioral economics",
      "institutional economics", "ecological economics", "labor economics",
      "health economics", "agricultural economics", "industrial organization",
      "economic history", "economic geography", "cognitive psychology",
      "social psychology", "developmental psychology", "clinical psychology",
      "personality psychology", "organizational psychology", "educational psychology",
      "health psychology", "environmental psychology", "cross-cultural psychology",
      "psycholinguistics", "psychometrics", "neuropsychology", "cognitive science",
      "criminology", "penology", "victimology", "social work", "pedagogy",
      "curriculum studies", "comparative education", "special education",
      "library science", "information science", "archival science", "museology",
      "communication studies", "media studies", "journalism", "rhetoric",
      "management science", "accounting", "marketing science", "actuarial practice",
      "logistics", "supply chain management", "human resource management",
      "peace and conflict studies", "development studies", "migration studies",
      "futures studies", "science policy", "social network analysis",

      // humanities
      "metaphysics", "epistemology", "normative ethics", "applied ethics", "aesthetics",
      "philosophical logic", "philosophy of science", "philosophy of mind",
      "philosophy of language", "philosophy of mathematics", "political philosophy",
      "phenomenology", "hermeneutics", "social history", "intellectual history",
      "art history", "history of science", "history of technology", "historiography",
      "classical studies", "philology", "comparative literature", "literary theory",
      "poetics", "narratology", "linguistics", "phonetics", "phonology",
      "morphology", "syntax", "semantics", "pragmatics", "sociolinguistics",
      "historical linguistics", "dialectology", "lexicography", "translation studies",
      "religious studies", "theology", "comparative religion", "mythology",
      "folklore studies", "area studies", "gender studies", "cultural studies",
      "science and technology studies", "disability studies", "urban studies",
      "environmental humanities", "digital humanities", "musicology", "ethnomusicology",
      "music theory", "art criticism", "film studies", "theatre studies", "dance studies",
      "architectural history", "landscape architecture", "urban planning",
      "industrial design", "graphic design", "typography", "textual criticism",
      "epigraphy", "papyrology", "numismatics", "heraldry", "genealogy", "codicology",
      "paleography", "diplomatics", "iconography", "conservation science",
      "critical theory", "semiotics", "bioethics", "medical humanities"
    ]
  },

  {
    id: "craft-trade-making",
    name: "Craft, trade, and making",
    cut: "What must the hands learn to do, and who teaches it?",
    note: "Cuts by apprenticeship and by tool. Makes skill transmission, tolerance, and material feedback legible. Largely invisible to the first carving, which has departments for the physics of a weld and none for welding. Where a domain here has an academic twin, the twin studies it and this one does it — and the two are false cognates more often than not.",
    domains: [
      "blacksmithing", "farriery", "bladesmithing", "gunsmithing", "locksmithing",
      "whitesmithing", "coppersmithing", "silversmithing", "goldsmithing", "pewtersmithing",
      "tinsmithing", "coppersmith tinning", "foundry work", "sand casting",
      "investment casting", "die casting", "lost-wax casting", "forging", "drop forging",
      "cold forging", "sheet metal work", "panel beating", "metal spinning", "machining",
      "lathe turning", "milling", "grinding", "surface grinding", "toolmaking",
      "die making", "mould making", "jig and fixture making", "gauge making",
      "arc welding", "MIG welding", "TIG welding", "oxy-acetylene welding", "brazing",
      "soldering", "microcontroller soldering", "surface-mount rework", "hardfacing",
      "thermal spraying", "electroplating", "anodizing", "galvanizing", "case hardening",
      "heat treatment", "annealing", "tempering", "quenching", "engine building",
      "cylinder head porting", "fuel system tuning", "carburetor tuning", "engine timing",
      "clutch and driveline work", "transmission rebuilding", "differential setup",
      "hydraulic system building", "pneumatic system building", "bearing fitting",
      "seal fitting", "shaft alignment", "dynamic balancing", "millwrighting",
      "pipefitting", "steamfitting", "plumbing", "gasfitting", "boilermaking",
      "sheet-metal ducting", "refrigeration work", "furnace work", "chimney sweeping",
      "carpentry", "framing", "finish carpentry", "timber framing", "log building",
      "joinery", "cabinetmaking", "furniture making", "chairmaking", "wood turning",
      "wood carving", "marquetry", "veneering", "coopering", "wheelwrighting",
      "boatbuilding", "shipwrighting", "sailmaking", "rigging", "ropework",
      "knot tying", "splicing", "net making", "basketry", "wickerwork", "caning",
      "thatching", "shingling", "roofing", "slating", "masonry", "bricklaying",
      "stonemasonry", "drystone walling", "plastering", "rendering", "lime work",
      "tiling", "terrazzo work", "concrete forming", "rebar tying", "scaffolding",
      "glazing", "glassblowing", "lampworking", "stained glass work", "glass cutting",
      "mirror silvering", "pottery", "wheel throwing", "hand building", "slip casting",
      "glaze chemistry in practice", "kiln firing", "pit firing", "raku firing",
      "brickmaking", "tile making", "adobe building", "cob building", "rammed earth work",
      "earth plastering", "spinning fiber", "hand weaving", "loom dressing", "dyeing",
      "natural dyeing", "indigo vat keeping", "felting", "fulling", "knitting",
      "crochet", "lacemaking", "embroidery", "quilting", "tailoring", "dressmaking",
      "pattern cutting", "millinery", "shoemaking", "cobbling", "leatherwork",
      "tanning", "brain tanning", "saddlery", "harness making", "bookbinding",
      "papermaking", "printmaking", "letterpress", "etching", "engraving", "lithography",
      "screen printing", "calligraphy", "sign painting", "gilding", "house painting",
      "decorative painting", "wood finishing", "french polishing", "upholstery",
      "clockmaking", "watchmaking", "instrument making", "luthiery", "violin making",
      "organ building", "piano tuning", "bell founding", "drum making", "reed making",
      "bowmaking", "fletching", "flintknapping", "cordage making", "hide working",
      "bone and antler working", "horn working", "shell working", "beadwork",
      "jewelry making", "lapidary work", "gem cutting", "enameling", "chasing and repoussé",
      "electrical wiring", "conduit bending", "panel building", "motor rewinding",
      "transformer winding", "cable jointing", "line work", "antenna building",
      "electronics assembly", "PCB layout in practice", "cable harness making",
      "small engine repair", "chainsaw maintenance", "bicycle building",
      "wheel truing", "tire work", "glassfiber layup", "composite layup", "sailcloth work",
      "sign fabrication", "neon bending", "taxidermy", "butchery", "charcuterie",
      "cheesemaking", "brewing", "distilling", "malting", "milling grain", "baking",
      "sourdough keeping", "smoking and curing", "fermentation keeping", "canning",
      "beekeeping", "candle making", "soap making", "charcoal burning", "lime burning",
      "salt making", "well digging", "ditching", "hedge laying", "coppicing", "pollarding",
      "sawyering", "timber cruising", "log scaling", "firewood processing"
    ]
  },

  {
    id: "diagnosis-repair-maintenance",
    name: "Diagnosis, repair, and maintenance",
    cut: "What is wrong, and what will keep it running?",
    note: "Cuts by failure and by upkeep rather than by object. The practitioner material in this repo lives here. Almost nothing in the first carving is organized this way — diagnosis is a stage inside a discipline there, never a domain of its own — which is one reason the practitioner's competence has no name in it.",
    domains: [
      "fault isolation", "differential diagnosis by exclusion", "symptom-to-cause reasoning",
      "intermittent fault hunting", "no-fault-found investigation", "root cause analysis",
      "failure mode analysis", "post-mortem inspection", "wear pattern reading",
      "fracture surface reading", "corrosion pattern reading", "erosion pattern reading",
      "deposit and residue reading", "wear debris analysis", "oil analysis by feel and smell",
      "coolant condition assessment", "fuel contamination detection", "leak finding",
      "pressure decay testing", "smoke testing", "dye penetrant inspection",
      "ultrasonic thickness testing", "vibration signature reading", "bearing noise diagnosis",
      "gear mesh listening", "exhaust note diagnosis", "misfire identification",
      "knock and detonation detection", "belt and pulley diagnosis", "backlash checking",
      "runout measurement", "alignment checking by eye", "straightedge and feeler work",
      "torque feel calibration", "thread condition assessment", "fastener fatigue judgement",
      "weld inspection by eye", "solder joint inspection", "continuity tracing",
      "short circuit localization", "ground fault tracing", "voltage drop testing",
      "parasitic draw hunting", "intermittent connection hunting", "sensor plausibility checking",
      "gauge-versus-body cross-checking", "instrument distrust calibration",
      "sensor fault discrimination", "control loop hunting diagnosis",
      "software-versus-hardware discrimination", "reproduction of intermittent conditions",
      "load testing under real conditions", "test-drive diagnosis", "bench testing",
      "substitution testing", "half-split fault finding", "signal tracing",
      "preventive maintenance scheduling", "condition-based maintenance",
      "run-to-failure judgement", "lubrication regime setting", "filter change judgement",
      "consumable life estimation", "spare parts triage", "field expedient repair",
      "improvised replacement fabrication", "temporary fix risk assessment",
      "limp-home decision making", "abort-versus-continue judgement",
      "damage containment", "shutdown sequencing", "restart sequencing",
      "commissioning", "recommissioning", "mothballing", "winterizing",
      "storage preparation", "reconditioning", "refurbishment", "remanufacturing",
      "retrofitting", "reverse engineering for repair", "obsolete part substitution",
      "salvage assessment", "cannibalization decisions", "write-off judgement",
      "repair-versus-replace economics in the field", "warranty fault attribution",
      "workmanship assessment", "prior-repair archaeology", "bodge detection",
      "maintenance record reading", "history-based fault prediction",
      "seasonal failure anticipation", "grade and load failure anticipation",
      "cold-start failure anticipation", "heat soak failure anticipation",
      "duty cycle assessment", "derating judgement", "safe operating envelope estimation",
      "tolerance stack-up in the field", "fit and clearance judgement",
      "surface finish judgement by touch", "hardness judgement by file",
      "material identification by spark", "material identification by sound",
      "material identification by weight", "counterfeit part detection"
    ]
  },

  {
    id: "material-substrate",
    name: "Material and substrate",
    cut: "What is it made of, and how does that stuff behave?",
    note: "Cuts by the medium rather than by the discipline or the task. A person who knows green wood knows something that crosses joinery, boatbuilding, fuel, and forage. The first carving splits that knowledge across four departments and none of them holds it whole.",
    domains: [
      "green wood behavior", "seasoned wood behavior", "wood movement with humidity",
      "grain reading", "figure and runout", "knot and defect judgement", "sapwood and heartwood",
      "wood durability by species", "bark properties", "resin and pitch behavior",
      "sap flow and timing", "bast fiber properties", "reed and cane properties",
      "bamboo behavior", "straw and thatch properties", "leaf and frond materials",
      "gourd and shell materials", "cork behavior", "charcoal properties",
      "ash properties", "soot and carbon black", "wood tar and pitch",
      "clay plasticity", "clay shrinkage", "temper and grog", "slip behavior",
      "glaze fit and crazing", "kiln atmosphere effects", "vitrification behavior",
      "earth and subsoil for building", "sand grading", "gravel and aggregate behavior",
      "silt behavior", "loam behavior", "peat behavior", "topsoil structure",
      "soil compaction behavior", "soil moisture holding", "soil pH behavior",
      "lime and quicklime behavior", "gypsum behavior", "cement hydration",
      "concrete curing behavior", "mortar workability", "grout behavior",
      "stone hardness and workability", "stone bedding planes", "frost susceptibility of stone",
      "granite behavior", "limestone behavior", "sandstone behavior", "slate behavior",
      "marble behavior", "basalt behavior", "obsidian fracture", "flint fracture",
      "chert behavior", "quartz behavior", "mica behavior", "asbestos hazard behavior",
      "iron behavior", "cast iron behavior", "wrought iron behavior", "carbon steel behavior",
      "stainless steel behavior", "tool steel behavior", "spring steel behavior",
      "galvanized steel behavior", "aluminum behavior", "aluminum alloy behavior",
      "copper behavior", "brass behavior", "bronze behavior", "lead behavior",
      "tin behavior", "zinc behavior", "nickel behavior", "titanium behavior",
      "magnesium behavior", "solder alloy behavior", "babbitt behavior",
      "weld metallurgy in practice", "heat-affected zone behavior", "galvanic pairing",
      "work hardening behavior", "fatigue behavior", "creep behavior",
      "hydrogen embrittlement", "stress corrosion", "pitting corrosion", "crevice corrosion",
      "glass behavior", "annealing stress in glass", "ceramic behavior",
      "refractory behavior", "abrasive behavior", "grinding wheel behavior",
      "rubber behavior", "elastomer aging", "gasket material behavior", "seal compatibility",
      "plastic behavior", "thermoplastic behavior", "thermoset behavior", "resin cure behavior",
      "fiberglass behavior", "carbon fiber behavior", "aramid fiber behavior",
      "adhesive behavior", "epoxy behavior", "glue joint behavior", "hide glue behavior",
      "paint film behavior", "varnish behavior", "oil finish behavior", "wax behavior",
      "solvent behavior", "fuel volatility", "fuel aging", "diesel gelling",
      "lubricant film behavior", "grease compatibility", "hydraulic fluid behavior",
      "coolant chemistry in practice", "antifreeze behavior", "water hardness behavior",
      "steam behavior", "ice behavior", "snow behavior", "frost behavior", "permafrost behavior",
      "leather behavior", "rawhide behavior", "sinew behavior", "gut and membrane behavior",
      "horn and antler behavior", "bone behavior", "shell behavior", "feather behavior",
      "wool behavior", "cotton behavior", "linen behavior", "silk behavior",
      "hemp fiber behavior", "synthetic fiber behavior", "cordage stretch and set",
      "fat and tallow behavior", "wax and comb behavior", "honey behavior",
      "starch behavior", "gluten behavior", "dough behavior", "curd behavior",
      "brine behavior", "salt behavior", "smoke behavior in curing", "ferment behavior"
    ]
  },

  {
    id: "sensory-channel",
    name: "Sensory channel",
    cut: "Which sense does the knowing, and what can only that sense reach?",
    note: "Cuts by the channel carrying the information rather than by subject matter. This carving barely exists in the first one, which is organized almost entirely around what can be written down. THERMODYNAMICS.md and the gauge-vs-body record both live here. A single-channel instrument cannot represent most of this list, which is the point of listing it.",
    domains: [
      "reading vibration through the hands", "reading vibration through the feet",
      "reading vibration through a seat", "reading vibration through a held tool",
      "distinguishing vibration sources by frequency", "feeling imbalance in rotation",
      "feeling looseness in a joint", "feeling bind and drag", "feeling detent and notch",
      "feeling thread engagement", "feeling material yield point", "feeling cutting edge bite",
      "feeling grain direction through a blade", "feeling density by hand",
      "feeling moisture by hand", "feeling temper by flex", "feeling fabric hand",
      "feeling soil texture by ribbon", "feeling dough development", "feeling curd set",
      "judging temperature by radiant heat", "judging temperature by hand proximity",
      "judging temperature gradient across a surface", "judging heat soak",
      "judging airflow by skin", "judging humidity by skin", "judging wind chill",
      "judging pressure change by ear", "judging altitude by ear",
      "listening for bearing failure", "listening for cavitation", "listening for knock",
      "listening for air leak", "listening for water in a pipe",
      "listening for fill level by tone", "listening for hollow versus solid",
      "listening for crack by ring", "listening to ice for thickness",
      "listening to a fire for stage", "listening to a kiln", "listening to a saw cut",
      "listening to an engine under load", "listening for gear wear",
      "reading water depth by sound", "reading rapids by sound", "reading rain by sound",
      "reading wind in trees", "reading animal alarm calls", "reading bird behavior for weather",
      "reading insect sound for temperature", "smelling electrical overheating",
      "smelling burning oil versus burning coolant", "smelling fuel richness",
      "smelling brake and clutch heat", "smelling refrigerant leak",
      "smelling spoilage stage", "smelling fermentation stage", "smelling soil health",
      "smelling rain approaching", "smelling smoke type and fuel", "smelling infection",
      "smelling ketosis and illness on breath", "tasting for salt balance",
      "tasting for ripeness", "tasting water quality", "tasting for doneness",
      "reading color of hot metal", "reading flame color", "reading smoke color",
      "reading exhaust color", "reading oxide color for temperature",
      "reading surface sheen for finish", "reading light angle for flatness",
      "reading shadow for straightness", "reading reflection for distortion",
      "reading water surface for what is below", "reading cloud form",
      "reading snow surface for layer", "reading track and sign", "reading scat",
      "reading plant stress by color", "reading leaf posture for water",
      "reading skin color for circulation", "reading gait for injury",
      "proprioceptive load estimation", "balance-based footing assessment",
      "kinesthetic tool alignment", "muscle-memory repeatability",
      "whole-body resonance sensing", "peripheral motion detection",
      "dark adaptation and night vision use", "cross-channel confirmation",
      "channel conflict resolution", "sensory calibration against environment",
      "recognizing miscalibration in oneself", "knowing which channel to trust when"
    ]
  },

  {
    id: "land-water-sky",
    name: "Land, water, sky, and weather",
    cut: "What is this place doing, and what is it about to do?",
    note: "Cuts by place and by what a place is doing now. Overlaps the first carving's earth sciences but organizes differently: by the decision the knowledge serves rather than by the mechanism it studies. Much of this list is knowledge held at a specific place and not transferable off it — which the first carving codes as anecdote because it does not generalize.",
    domains: [
      "local weather signs", "frontal passage reading", "storm approach reading",
      "thunderstorm development reading", "hail risk reading", "tornado sign reading",
      "squall line reading", "fog formation prediction", "frost prediction",
      "first frost date judgement", "last frost date judgement", "freeze-thaw cycling",
      "temperature inversion reading", "wind shift prediction", "wind funneling by terrain",
      "katabatic wind behavior", "sea breeze behavior", "chinook behavior",
      "microclimate identification", "frost pocket identification", "sun pocket identification",
      "shelter belt siting", "aspect and slope effects", "elevation effects on season",
      "snowpack assessment", "avalanche terrain reading", "cornice reading",
      "snow layer probing", "ice thickness assessment", "ice color reading",
      "pressure ridge reading", "river ice breakup reading", "overflow ice detection",
      "spring runoff timing", "flood stage prediction", "flash flood terrain reading",
      "watershed reading", "drainage pattern reading", "seep and spring finding",
      "water table estimation", "dowsing practice", "well siting", "aquifer behavior locally",
      "stream gradient reading", "riffle and pool reading", "eddy reading",
      "undercut bank reading", "sandbar migration", "channel migration reading",
      "delta behavior", "estuary mixing", "tidal timing", "tidal race reading",
      "rip current reading", "surf reading", "swell reading", "wave period judgement",
      "shoal reading", "reef reading", "current reading by water surface",
      "sea state assessment", "sea ice reading", "iceberg behavior",
      "coastal erosion reading", "dune behavior", "beach profile change",
      "soil erosion reading", "gully formation reading", "landslide terrain reading",
      "rockfall hazard reading", "scree behavior", "mudflow terrain reading",
      "sinkhole terrain reading", "subsidence reading", "permafrost thaw reading",
      "peat bog behavior", "wetland seasonal behavior", "vernal pool timing",
      "salt flat behavior", "desert pavement reading", "flash desert bloom timing",
      "dust storm reading", "sandstorm reading", "haboob reading",
      "fire weather reading", "fuel moisture judgement", "fire behavior prediction",
      "crown fire risk reading", "spotting distance judgement", "burn scar reading",
      "prescribed burn timing", "smoke drift prediction", "firebreak siting",
      "star navigation", "sun position timekeeping", "shadow length reading",
      "solstice and equinox marking", "moon phase tracking", "moonrise timing",
      "eclipse anticipation", "planet visibility tracking", "meteor shower timing",
      "aurora prediction", "twilight duration judgement", "horizon refraction reading",
      "mirage reading", "halo and sundog reading", "rainbow position reading",
      "cloud base height estimation", "cloud type succession", "lenticular cloud reading",
      "contrail persistence reading", "visibility estimation", "ceiling estimation",
      "dew point judgement", "evaporation rate judgement", "soil moisture by season",
      "growing degree day tracking", "chill hour tracking", "drought stage reading",
      "monsoon timing", "dry season onset", "wet season onset", "seasonal drift tracking"
    ]
  },

  {
    id: "living-kinds-tending",
    name: "Living kinds and their tending",
    cut: "What lives here, what does it need, and what does it tell you?",
    note: "Cuts by organism and by relationship to it. The first carving splits this into botany, zoology, agronomy, veterinary medicine and forestry; this one keeps the animal and the person tending it in one domain, because that is how the knowledge is actually held. Note how much of it is timing knowledge — which the first carving is poorly shaped to hold, since a result about timing needs seasons to test.",
    domains: [
      "seed selection", "seed saving", "seed viability testing", "seed dormancy breaking",
      "germination timing", "seedbed preparation", "transplant timing", "hardening off",
      "direct sowing judgement", "spacing judgement", "thinning judgement",
      "succession planting", "companion planting", "intercropping", "crop rotation",
      "cover cropping", "green manuring", "fallowing", "no-till practice",
      "ridge and furrow practice", "raised bed practice", "terracing practice",
      "irrigation scheduling", "flood irrigation practice", "drip irrigation practice",
      "dryland farming practice", "rainfed timing", "mulching practice",
      "composting", "vermicomposting", "manure management", "soil amendment judgement",
      "liming judgement", "fertility assessment by plant", "nutrient deficiency reading",
      "weed identification", "weed pressure judgement", "weeding timing",
      "pest identification", "pest threshold judgement", "beneficial insect encouragement",
      "pollinator support", "trap cropping", "biological control practice",
      "plant disease identification", "blight anticipation", "rust identification",
      "fungal pressure reading", "resistance breeding by selection",
      "grafting", "budding", "layering", "cutting propagation", "division propagation",
      "rootstock selection", "pruning for form", "pruning for fruit", "dormant pruning",
      "summer pruning", "training and espalier", "thinning fruit", "harvest timing by taste",
      "harvest timing by color", "harvest timing by feel", "ripening management",
      "curing of roots and tubers", "storage condition management", "root cellaring",
      "grain moisture judgement", "grain storage management", "silage making",
      "haymaking timing", "hay curing judgement", "forage quality assessment",
      "pasture rotation", "stocking rate judgement", "overgrazing recognition",
      "browse line reading", "range condition assessment", "riparian grazing management",
      "livestock body condition scoring", "livestock behavior reading",
      "herd hierarchy reading", "calving assistance", "lambing assistance",
      "foaling assistance", "farrowing management", "weaning judgement",
      "breeding timing", "heat detection", "gestation tracking", "culling judgement",
      "hoof trimming", "shearing", "dehorning judgement", "castration practice",
      "livestock lameness diagnosis", "bloat recognition", "colic recognition",
      "parasite load judgement", "worming timing", "vaccination timing",
      "quarantine practice", "biosecurity practice", "predator sign reading",
      "guardian animal handling", "herding dog handling", "horse training",
      "oxen training", "pack animal loading", "harness fitting", "gentling practice",
      "poultry management", "brooding management", "egg candling", "molting management",
      "beekeeping seasonal management", "swarm management", "queen rearing",
      "hive health reading", "honey flow timing", "silkworm rearing", "fish pond management",
      "aquaculture feeding judgement", "shellfish bed management", "kelp harvesting",
      "foraging identification", "mushroom identification", "lookalike discrimination",
      "medicinal plant identification", "harvest sustainability judgement",
      "wild plant seasonal timing", "tree species identification", "tree health assessment",
      "hazard tree assessment", "felling direction judgement", "forest thinning judgement",
      "natural regeneration reading", "succession stage reading", "old growth recognition",
      "sap tapping timing", "bark harvesting timing", "coppice cycle management",
      "hunting sign reading", "animal movement prediction", "trapping practice",
      "fishing spot reading", "fish behavior by season", "run timing", "netting practice"
    ]
  },

  {
    id: "body-health-carvings",
    name: "Body, capacity, and health",
    cut: "What is this body doing, and what does it need?",
    note: "Deliberately overlaps the first carving's medicine, because the overlap is the finding. The same territory carved by symptom, by capacity, by fit-to-task and by life stage produces four incompatible domain sets — and `absence-of-diagnostic-categories` in collisions.js is the case where a person carved it by fit-to-task and the instrument could not represent the answer.",
    domains: [
      "reading one's own fatigue", "reading one's own dehydration", "reading hunger states",
      "reading sleep debt", "reading overtraining", "reading illness onset in oneself",
      "pacing over long effort", "load carrying technique", "lifting technique",
      "recovery judgement", "pain discrimination", "pain-versus-injury judgement",
      "acclimatization to heat", "acclimatization to cold", "acclimatization to altitude",
      "hypothermia recognition", "hyperthermia recognition", "frostbite recognition",
      "dehydration management in the field", "electrolyte judgement",
      "breath control practice", "posture practice", "flexibility practice",
      "strength development practice", "endurance development practice",
      "gait retraining", "balance training", "fall prevention practice",
      "wound cleaning practice", "bleeding control", "splinting", "immobilization",
      "burn care in the field", "blister management", "infection recognition",
      "fever management", "hydration therapy", "improvised medical care",
      "triage under scarcity", "evacuation decision making", "self-rescue judgement",
      "birth attendance", "postpartum care", "infant feeding practice", "infant soothing",
      "child development observation", "milestone judgement without a chart",
      "adolescent transition marking", "elder care practice", "mobility support practice",
      "dementia companionship practice", "dying attendance", "grief practice",
      "body preparation after death", "body disposition practice",
      "fit of body to task", "reach and clearance judgement", "hand size and tool fit",
      "grip strength allocation", "handedness and tool adaptation",
      "task routing by capability", "division of labor by functionality",
      "accommodation without naming", "workaround design for a body",
      "assistive device fitting", "prosthesis fitting", "wheelchair fitting",
      "hearing aid fitting", "sign language use", "lipreading", "tactile signing",
      "braille reading", "screen reader navigation", "low vision navigation",
      "sensory overload management", "sensory seeking management",
      "attention regulation practice", "executive load management", "energy budgeting",
      "spoon theory practice", "flare anticipation", "chronic pain pacing",
      "medication timing by feel", "side effect discrimination", "withdrawal management",
      "sobriety maintenance practice", "craving management", "relapse recognition",
      "panic management", "dissociation recognition", "grounding practice",
      "trauma response recognition", "co-regulation practice", "solitude regulation",
      "fasting practice", "feasting practice", "dietary restriction management",
      "food intolerance discrimination", "allergy avoidance practice",
      "menstrual cycle tracking", "fertility awareness", "menopause navigation",
      "contraception practice", "sexual health practice", "hygiene practice under scarcity",
      "sanitation practice", "water treatment practice", "vector avoidance practice"
    ]
  },

  {
    id: "kinship-obligation",
    name: "Kinship, obligation, and social form",
    cut: "Who is owed what, by whom, and for how long?",
    note: "Cuts by obligation rather than by institution. The first carving studies this from outside as anthropology and sociology; held from inside it is not a subject but a set of running commitments. Most of it is skill: knowing when to ask, when not to, and what a refusal costs. The instruments in this repo have no field for any of it.",
    domains: [
      "kin reckoning", "descent tracking", "affinal relation tracking", "clan reckoning",
      "lineage memory", "genealogical recitation", "naming practice", "name avoidance practice",
      "teknonymy practice", "adoption practice", "fostering practice", "godparent practice",
      "milk kinship practice", "age-set membership", "cohort obligation",
      "elder deference practice", "junior obligation practice", "sibling order obligation",
      "in-law avoidance practice", "joking relationship practice", "respect speech use",
      "honorific use", "address term selection", "greeting protocol", "leave-taking protocol",
      "hospitality obligation", "guest obligation", "host obligation", "shelter obligation",
      "feeding obligation", "sanctuary practice", "safe passage practice",
      "gift obligation", "return gift timing", "gift refusal handling",
      "debt of honor tracking", "favor accounting", "reciprocity balancing",
      "generalized reciprocity practice", "balanced reciprocity practice",
      "labor exchange practice", "work party organizing", "barn raising practice",
      "harvest cooperation", "herding cooperation", "childcare cooperation",
      "elder care cooperation", "mutual aid organizing", "burial society practice",
      "rotating credit practice", "common fund keeping", "commons stewardship",
      "grazing rights management", "water rights management", "fishing rights management",
      "gleaning rights practice", "usufruct practice", "inheritance practice",
      "partible inheritance practice", "primogeniture practice", "dowry practice",
      "bridewealth practice", "marriage negotiation", "courtship practice",
      "betrothal practice", "divorce practice", "widowhood practice", "remarriage practice",
      "household formation", "compound organization", "residence rule practice",
      "neolocal establishment", "extended household management", "boarding practice",
      "fictive kin practice", "chosen family practice", "sponsorship practice",
      "mentorship obligation", "apprenticeship obligation", "patronage practice",
      "clientage practice", "alliance maintenance", "feud management", "peace-making practice",
      "mediation practice", "arbitration practice", "council practice",
      "consensus practice", "assembly practice", "speaking order practice",
      "silence as participation", "veto practice", "walkout practice",
      "boycott practice", "shunning practice", "shaming practice", "praise practice",
      "reputation maintenance", "gossip management", "secret keeping", "confidence handling",
      "disclosure judgement", "who-to-tell judgement", "frame-mismatch disclosure judgement",
      "courtesy override judgement", "harm-gated cooperation"
    ]
  },

  {
    id: "exchange-provisioning",
    name: "Exchange, value, and provisioning",
    cut: "How does the thing get to the person who needs it?",
    note: "Cuts by movement of goods and claims rather than by market. Includes the market as one case among many. `ultimatum-minimum-offer` in collisions.js is a case where an instrument from this carving's institutional corner met a person carving it differently, and produced a spurious confirmation.",
    domains: [
      "haggling", "price discovery by conversation", "fixed price practice",
      "barter practice", "trade goods valuation", "commodity grading by eye",
      "weight and measure practice", "measure by volume", "measure by handful",
      "measure by bundle", "tally keeping", "credit extension by trust",
      "ledger keeping", "running a tab", "debt forgiveness practice",
      "installment practice", "layaway practice", "pawn practice", "lending at interest",
      "interest prohibition practice", "risk pooling", "insurance practice",
      "mutual insurance practice", "crop insurance judgement", "hedging practice",
      "storage as savings", "livestock as savings", "metal as savings",
      "currency selection", "multiple currency handling", "currency distrust practice",
      "hyperinflation coping", "scrip use", "voucher use", "ration management",
      "queue management", "allocation under scarcity", "triage of resources",
      "stockpiling judgement", "hoarding recognition", "surplus distribution",
      "gleaning practice", "salvage economy participation", "scavenging practice",
      "repair economy participation", "secondhand valuation", "swap meet practice",
      "informal market practice", "street vending", "market stall management",
      "middleman practice", "brokerage practice", "auction practice",
      "sealed bid practice", "sharecropping", "tenancy practice", "wage negotiation",
      "piece rate work", "day labor practice", "seasonal migration for work",
      "remittance practice", "household budgeting under scarcity",
      "food budgeting", "fuel budgeting", "heating fuel rationing",
      "subsistence provisioning", "hunting for the pot", "fishing for the pot",
      "kitchen gardening", "preserving for winter", "seasonal food planning",
      "famine food knowledge", "lean season management", "hunger gap management",
      "sharing under scarcity", "feeding the visitor first", "portion allocation",
      "supply route knowledge", "caravan practice", "porterage", "droving",
      "freight consolidation", "load planning", "packing practice", "lashing practice",
      "cold chain management", "spoilage risk management", "inventory by memory",
      "just-in-time practice", "buffer stock practice", "bulk buying judgement",
      "cooperative purchasing", "producer cooperative practice", "guild practice",
      "union practice", "strike practice", "collective bargaining",
      "tribute payment", "taxation compliance", "tax avoidance practice",
      "smuggling practice", "black market navigation", "sanction navigation",
      "corruption navigation", "bribery navigation", "protection payment",
      "rent extraction recognition", "monopoly recognition", "price gouging recognition",
      "enclosure recognition", "dispossession recognition"
    ]
  },

  {
    id: "language-notation-record",
    name: "Language, notation, and record",
    cut: "How is it said, written, remembered, or otherwise kept?",
    note: "Cuts by how knowledge is stored and moved — the substrate and translation parameters from L1. The practitioner's statement that results are logged 'in plants, rock placement so on' belongs here, and shows what the first carving's version of this list is missing: it enumerates writing systems and has no entry for a record kept inside the phenomenon it describes.",
    domains: [
      "oral transmission", "verbatim memorization", "formulaic composition",
      "mnemonic verse", "song as record", "chant as record", "genealogy recitation",
      "story cycle keeping", "proverb use", "riddle use", "parable use",
      "teaching by story", "teaching by demonstration", "teaching by withholding",
      "learning by watching", "learning by doing under supervision",
      "correction by silence", "correction by redoing", "apprentice sequencing",
      "knowledge release by readiness", "restricted knowledge handling",
      "initiation-gated knowledge", "seasonal knowledge release",
      "record kept in living plants", "record kept in stone placement",
      "record kept in landscape modification", "record kept in trail marking",
      "record kept in cairn", "record kept in blaze", "record kept in notch",
      "record kept in knotted cord", "record kept in tally stick", "record kept in bead",
      "record kept in textile pattern", "record kept in basket pattern",
      "record kept in pottery motif", "record kept in tattoo", "record kept in scar",
      "record kept in body ornament", "record kept in building orientation",
      "record kept in seed line", "record kept in breed line", "record kept in graft line",
      "place name as record", "route description as record", "song line as route",
      "star pattern as calendar", "shadow marker as calendar", "horizon marker as calendar",
      "notch calendar keeping", "seasonal indicator species tracking",
      "handwriting", "shorthand", "stenography", "transcription", "dictation",
      "note taking systems", "marginalia practice", "commonplace book keeping",
      "field notebook practice", "logbook keeping", "maintenance log keeping",
      "laboratory notebook practice", "diary keeping", "correspondence practice",
      "form filling", "records management", "filing systems", "indexing",
      "cataloguing", "abstracting", "citation practice", "provenance documentation",
      "chain of custody documentation", "version control practice",
      "changelog practice", "commit message practice", "documentation writing",
      "specification writing", "procedure writing", "checklist design",
      "sign posting", "labeling practice", "warning design", "pictogram design",
      "wayfinding design", "map making by hand", "sketch mapping", "mental mapping",
      "diagram drawing", "schematic reading", "blueprint reading", "isometric drawing",
      "orthographic projection", "exploded view drawing", "pattern drafting",
      "musical notation", "tablature", "dance notation", "knitting notation",
      "weaving draft notation", "chemical notation", "mathematical notation",
      "logical notation", "phonetic transcription", "interlinear glossing",
      "translation practice", "interpretation practice", "simultaneous interpreting",
      "code switching", "register switching", "jargon acquisition",
      "plain language practice", "euphemism practice", "indirect speech practice",
      "silence conventions", "turn-taking conventions", "interruption conventions",
      "whistled speech", "drum signaling", "smoke signaling", "flag signaling",
      "light signaling", "hand signal systems", "trade pidgin use", "lingua franca use",
      "language revitalization practice", "orthography design", "typesetting practice"
    ]
  },

  {
    id: "ritual-ceremony",
    name: "Ritual, ceremony, and the sacred",
    cut: "What must be done properly, and what happens if it is not?",
    note: "Cuts by correct performance and consequence. data.js's `religion` domain is this carving flattened to a single node by the first carving's version of it. Note that many entries here are also entries in other carvings — a planting rite is agricultural timing and ceremony at once — and that the split between them is imported, not found.",
    domains: [
      "seasonal ceremony timing", "solstice observance", "equinox observance",
      "first fruits observance", "harvest thanksgiving", "planting rite",
      "rain petition practice", "hunting rite", "first kill observance",
      "apology to the taken", "permission asking before harvest",
      "offering practice", "libation practice", "food offering practice",
      "incense practice", "candle practice", "lamp keeping", "fire keeping",
      "hearth practice", "threshold practice", "doorway observance",
      "house blessing", "boat blessing", "tool blessing", "seed blessing",
      "animal blessing", "field blessing", "well blessing", "bridge observance",
      "naming ceremony", "birth ceremony", "coming of age ceremony",
      "initiation practice", "vision quest practice", "fasting retreat",
      "seclusion practice", "vigil keeping", "pilgrimage practice",
      "circumambulation practice", "procession practice", "station keeping",
      "marriage ceremony", "handfasting", "vow making", "oath taking",
      "witness practice", "funeral practice", "wake keeping", "mourning period observance",
      "anniversary observance", "ancestor veneration", "ancestor feeding",
      "grave tending", "memorial practice", "remembrance recitation",
      "purification practice", "ritual bathing", "smoke cleansing", "water blessing",
      "salt practice", "ash practice", "sweeping practice", "renewal practice",
      "atonement practice", "confession practice", "penance practice",
      "reconciliation ritual", "peace ceremony", "treaty ceremony",
      "prayer practice", "meditation practice", "contemplative practice",
      "breath practice as devotion", "posture practice as devotion",
      "recitation practice", "liturgy practice", "call to prayer practice",
      "sabbath keeping", "feast day observance", "fast day observance",
      "dietary law practice", "slaughter practice", "food preparation law",
      "purity rule practice", "taboo observance", "avoidance practice",
      "sacred site protocol", "sacred site avoidance", "silence observance",
      "dreaming interpretation", "omen reading", "divination practice",
      "lot casting", "augury practice", "scapulimancy practice",
      "healing ceremony", "sweat practice", "trance practice", "possession practice",
      "spirit relation practice", "mask practice", "costume practice",
      "sacred object keeping", "relic keeping", "regalia keeping",
      "song ownership practice", "ceremony ownership practice", "right to perform"
    ]
  },

  {
    id: "movement-navigation",
    name: "Movement, navigation, and orientation",
    cut: "How do you get there, and how do you know where you are?",
    note: "Cuts by wayfinding. Notable for how much of it is unwritten by construction: a route held as a sequence of recognitions cannot be transmitted as coordinates without losing what makes it usable. That is a translation failure, in L1's sense, and it is the reason this knowledge is routinely misclassified as folklore.",
    domains: [
      "dead reckoning", "pace counting", "time-distance estimation",
      "terrain association", "handrail navigation", "catching feature use",
      "attack point use", "aiming off", "contour navigation", "ridge following",
      "drainage following", "route finding in forest", "route finding in scrub",
      "route finding in desert", "route finding on ice", "route finding in snow",
      "whiteout navigation", "night navigation", "fog navigation",
      "star compass use", "sun compass use", "shadow stick use", "moon navigation",
      "swell navigation", "wave refraction reading", "seamark use", "landmark chaining",
      "back-bearing practice", "map and compass use", "declination adjustment",
      "altimeter navigation", "pilotage", "coastal piloting", "river piloting",
      "portage route knowledge", "trail reading", "game trail following",
      "tracking a person", "backtracking", "lost person behavior prediction",
      "search pattern practice", "self-location when lost", "relocation practice",
      "urban wayfinding", "underground navigation", "cave navigation",
      "building evacuation navigation", "blind navigation", "echolocation practice",
      "cane technique", "guide dog work", "tactile map use",
      "convoy discipline", "column movement", "spacing discipline",
      "river crossing judgement", "ford selection", "ice crossing judgement",
      "snow bridge assessment", "crevasse route finding", "rope team travel",
      "scrambling judgement", "exposure assessment", "retreat decision making",
      "weather window judgement", "turnaround time discipline",
      "load hauling over distance", "sled hauling", "packing a load for travel",
      "animal packing", "canoe handling", "kayak handling", "raft handling",
      "sailing trim", "tacking practice", "anchoring judgement", "mooring practice",
      "docking practice", "towing practice", "vehicle recovery",
      "off-road line selection", "traction judgement", "mud judgement",
      "sand driving", "snow driving", "ice driving", "grade descent technique",
      "convoy spacing on grade", "trailer reversing", "load securement",
      "flight route planning", "terrain avoidance", "fuel reserve judgement",
      "migration route knowledge", "seasonal round movement", "transhumance practice",
      "nomadic camp siting", "camp siting judgement", "water source spacing"
    ]
  },

  {
    id: "time-cycle-threshold",
    name: "Time, cycle, and threshold",
    cut: "On what clock does this happen, and how long before you can believe it?",
    note: "This carving is coordinate 4 in its own right. It is the axis data.js collapses without saying so: every edge there is stated at the timescale institutional publication runs on. L2 in the ledger is what happened when this repo assumed one clock was the only clock.",
    domains: [
      "generational time redundancy", "multi-generation observation",
      "encoding threshold judgement", "how long before a result is believed",
      "how long before a result is transmitted", "confirmation across lifetimes",
      "long baseline observation", "century-scale observation", "decadal observation",
      "annual cycle tracking", "seasonal round tracking", "lunar month tracking",
      "tidal cycle tracking", "diurnal cycle tracking", "circadian entrainment",
      "ultradian rhythm tracking", "real-time judgement", "sub-second reaction",
      "reflex timing", "anticipation timing", "lead and lag judgement",
      "rhythm keeping", "tempo matching", "polyrhythm holding", "entrainment practice",
      "synchronization practice", "turn timing", "interval estimation",
      "duration estimation without a clock", "elapsed time by shadow",
      "elapsed time by candle", "elapsed time by burn", "elapsed time by tide",
      "elapsed time by song length", "cooking time by sense", "firing time by color",
      "curing time judgement", "aging time judgement", "fermentation time judgement",
      "drying time judgement", "settling time judgement", "soak time judgement",
      "rest period judgement", "recovery time judgement", "fallow period judgement",
      "rotation period judgement", "return interval judgement", "burn interval judgement",
      "flood recurrence judgement", "drought recurrence judgement",
      "storm return period", "pest cycle tracking", "mast year tracking",
      "irruption year tracking", "boom and bust cycle reading",
      "succession timescale reading", "regeneration timescale reading",
      "erosion timescale reading", "sediment timescale reading",
      "half-life reasoning", "decay timescale reasoning", "wear rate estimation",
      "corrosion rate estimation", "fatigue life estimation", "service life estimation",
      "obsolescence anticipation", "lead time management", "critical path reasoning",
      "deadline triage", "urgency versus importance sorting", "waiting well",
      "patience as method", "premature conclusion resistance",
      "publication clock pressure", "career clock pressure", "funding cycle pressure",
      "election cycle pressure", "quarterly reporting pressure", "news cycle pressure"
    ]
  },

  {
    id: "conflict-harm",
    name: "Conflict, harm, and its handling",
    cut: "What went wrong between people, and what is done about it?",
    note: "Cuts by breach and response. The first carving splits this across law, criminology, peace studies and clinical psychology; held from inside it is one continuous skill. Note the entries about being recoded as a symptom for protesting a frame — that trap is described in ONTOLOGICAL_COLLISIONS.md and has no home in the first carving at all.",
    domains: [
      "grievance airing", "complaint escalation judgement", "when to let it go",
      "confrontation timing", "de-escalation practice", "voice modulation for calm",
      "distance and posture management", "exit planning", "bystander intervention",
      "witness solidarity", "third party calling", "elder calling",
      "mediation practice by kin", "neutral ground selection", "talking circle practice",
      "airing without accusation", "apology practice", "apology acceptance judgement",
      "restitution setting", "compensation negotiation", "blood price practice",
      "restorative practice", "reintegration practice", "probation by community",
      "banishment practice", "exile practice", "outlawry practice",
      "feud escalation control", "vendetta suspension", "truce practice",
      "hostage exchange practice", "peace token practice", "treaty keeping",
      "boundary marking", "boundary dispute handling", "trespass handling",
      "theft handling", "restitution for theft", "livestock raid handling",
      "water dispute handling", "grazing dispute handling", "inheritance dispute handling",
      "marriage dispute handling", "custody arrangement practice",
      "workplace grievance handling", "whistleblowing judgement",
      "retaliation anticipation", "protective disclosure timing",
      "protest tactics", "civil disobedience practice", "noncooperation practice",
      "sabotage judgement", "strike discipline", "picket practice",
      "riot dynamics reading", "crowd behavior reading", "crush risk reading",
      "police interaction management", "checkpoint navigation",
      "interrogation resistance", "false confession avoidance",
      "coerced compliance recognition", "duress recognition",
      "manipulation recognition", "gaslighting recognition", "grooming recognition",
      "coercive control recognition", "safety planning", "escape planning",
      "shelter seeking", "harm reduction practice", "risk of protest being recoded",
      "symptom-coding of dissent recognition", "diagnostic retaliation recognition",
      "credibility discounting recognition", "testimonial injustice recognition",
      "self-advocacy under an authority", "advocacy on behalf of another",
      "documentation for later", "evidence preservation by a non-professional",
      "chain of harm tracing", "pattern recognition across incidents",
      "collective testimony organizing", "solidarity maintenance under pressure",
      "informer detection", "trust repair after betrayal", "reconciliation refusal"
    ]
  },

  {
    id: "play-contest-performance",
    name: "Play, contest, and performance",
    cut: "What is done in front of others, for its own sake or to win?",
    note: "Cuts by audience and stake. Included because the first carving treats it as either leisure (not knowledge) or as an object of study (someone else's knowledge), and both readings miss that a performer holds a large body of unwritten technique that fails in exactly the ways an instrument would want to measure.",
    domains: [
      "improvisation practice", "ensemble listening", "following a lead",
      "taking a lead", "timing a joke", "reading a room", "holding attention",
      "losing an audience recognition", "recovery from a mistake on stage",
      "stage presence", "projection", "breath support for voice", "vocal care",
      "harmony finding by ear", "tuning by ear", "temperament choice",
      "call and response practice", "drum conversation", "dance floor reading",
      "partner dance leading", "partner dance following", "group dance formation",
      "step learning by watching", "choreographic memory", "rhythm teaching",
      "storytelling pacing", "audience participation management", "heckler handling",
      "puppetry technique", "mask performance", "clowning technique",
      "physical comedy timing", "stunt safety judgement", "fight choreography",
      "acrobatic spotting", "aerial rigging safety", "juggling practice",
      "sleight of hand", "misdirection practice", "escape technique",
      "competitive strategy", "opponent reading", "tell recognition", "bluffing",
      "bet sizing", "risk tolerance under contest", "tilt recognition",
      "tournament pacing", "seeding judgement", "handicapping",
      "game rule negotiation", "house rule setting", "dispute resolution in play",
      "fair play enforcement", "sportsmanship practice", "graceful losing",
      "coaching practice", "drill design", "practice periodization",
      "skill plateau management", "form correction by feel", "video-free self-coaching",
      "team role assignment", "substitution judgement", "momentum reading",
      "crowd energy management", "home advantage use", "away discipline",
      "refereeing", "line calling", "judging aesthetic performance",
      "scoring subjective criteria", "criteria drift recognition",
      "wrestling technique", "grappling technique", "striking technique",
      "weapon form practice", "archery form", "throwing technique",
      "marksmanship", "wind calling for a shot", "range estimation for a shot",
      "hunting stalk technique", "call and decoy use", "field craft concealment",
      "swimming technique", "diving technique", "breath hold practice",
      "climbing technique", "route reading on rock", "bouldering problem solving",
      "skiing technique", "skating technique", "sledding technique",
      "riding seat", "jumping technique", "horsemanship in competition",
      "sailing racing tactics", "paddling technique", "rowing crew timing",
      "cycling pack riding", "running form", "trail running technique",
      "endurance pacing under contest", "gamesmanship recognition"
    ]
  },

  {
    id: "failure-pathology-carvings",
    name: "Failure, disorder, and the naming of it",
    cut: "What is being called broken, by whom, and against what standard?",
    note: "Deliberately parallel to data.js's `pathology` domain, and deliberately larger. Every entry names a *judgement that something is disordered*, which is a different object from the condition itself. Keeping them separate is what the `wrong-arity` and `valence-inversion` collision types exist to protect: a relation between a body and an environment is not a property of the body.",
    domains: [
      "deviation from a norm", "norm construction", "reference range setting",
      "cutoff selection", "threshold effects at a cutoff", "borderline case handling",
      "diagnostic category creation", "diagnostic category retirement",
      "category expansion over time", "diagnostic drift", "diagnostic inflation",
      "comorbidity handling", "differential exclusion", "syndrome versus disease",
      "symptom clustering", "prodrome recognition", "remission definition",
      "recovery definition", "cure definition", "chronicity framing",
      "disability framing", "impairment versus disability distinction",
      "medical model framing", "social model framing", "fit-to-environment framing",
      "capability framing", "deficit framing", "difference framing",
      "pathologizing of variation", "pathologizing of dissent",
      "pathologizing of grief", "pathologizing of poverty response",
      "pathologizing of survival behavior", "pathologizing of unfamiliar reasoning",
      "adaptive-in-context reframing", "environment-first reframing",
      "malingering attribution", "somatization attribution", "noncompliance attribution",
      "poor insight attribution", "resistance attribution", "attention seeking attribution",
      "drug seeking attribution", "unreliable narrator attribution",
      "credibility by presentation", "credibility by vocabulary",
      "credibility by affect", "affect mismatch penalty", "flat affect misreading",
      "articulacy advantage", "inarticulacy penalty", "translation burden on the patient",
      "self-report ceiling", "self-report floor", "response set effects",
      "acquiescence bias", "social desirability effects", "faking-good detection",
      "faking-bad detection", "test-taking strategy invisibility",
      "inferred-frame answering", "silent repair of a broken item",
      "missing data as absence of problem", "nonresponse coded as neutral",
      "unscorable coded as low", "mid-scale clustering", "forced choice artifacts",
      "scale coarseness effects", "ordinal treated as interval",
      "aggregate applied to individual", "trait attribution from one occasion",
      "situation stripped from behavior", "base rate neglect in diagnosis",
      "screening in a low prevalence population", "false positive burden",
      "false negative burden", "overdiagnosis", "underdiagnosis",
      "diagnostic disparity by group", "instrument norming population",
      "translation of an instrument across languages", "back translation limits",
      "cultural equivalence assumption", "construct portability assumption",
      "measurement invariance failure", "differential item functioning",
      "mechanical failure modes", "wear-out failure", "infant mortality failure",
      "random failure", "common cause failure", "cascading failure",
      "latent defect", "design defect", "maintenance-induced failure",
      "operator error attribution", "human error framing", "blame allocation",
      "just culture practice", "normalization of deviance", "drift into failure",
      "near miss reporting", "incident reporting suppression", "safety theater"
    ]
  },

  {
    id: "extraction-waste-aftermath",
    name: "Extraction, waste, and aftermath",
    cut: "What was taken, what was left behind, and who lives with it?",
    note: "Parallel to data.js's `extraction` domain, carved to keep the aftermath attached to the taking. That attachment is the substantive claim: the first carving routinely scopes environmental effect as externality — a category that means 'real but not in this measurement' — which L2 identified as structural rather than budgetary.",
    domains: [
      "surplus extraction", "rent seeking", "resource concession granting",
      "royalty setting", "severance taxation", "profit repatriation",
      "transfer pricing", "asset stripping", "debt peonage", "indenture",
      "forced labor", "prison labor", "child labor", "wage theft",
      "piece rate manipulation", "company store dependence", "company town dependence",
      "land enclosure", "commons privatization", "dispossession by title",
      "eminent domain use", "displacement without compensation", "resettlement failure",
      "water diversion", "water rights capture", "aquifer depletion",
      "groundwater mining", "river dewatering", "dam displacement",
      "fishery depletion", "bycatch waste", "bottom trawling damage",
      "overgrazing to degradation", "soil mining", "nutrient export without return",
      "deforestation", "clearcutting", "high grading a forest", "slash disposal",
      "mine tailings management", "tailings dam risk", "acid mine drainage",
      "heap leach residue", "mercury use in mining", "cyanide use in mining",
      "artisanal mining hazard", "strip mining aftermath", "mountaintop removal aftermath",
      "subsidence from extraction", "orphan well legacy", "flaring and venting",
      "produced water disposal", "injection-induced seismicity",
      "pipeline spill aftermath", "tanker spill aftermath", "oil sands tailings",
      "refinery fenceline exposure", "petrochemical corridor exposure",
      "smelter plume exposure", "lead contamination legacy", "arsenic contamination legacy",
      "PFAS contamination legacy", "solvent plume legacy", "brownfield legacy",
      "superfund site life", "landfill leachate", "open dump burning",
      "e-waste processing exposure", "ship breaking exposure", "asbestos removal exposure",
      "waste export", "waste colonialism recognition", "recycling stream contamination",
      "plastic accumulation", "microplastic accumulation", "nurdle spill",
      "agricultural runoff", "eutrophication", "dead zone formation",
      "pesticide drift", "pollinator collapse", "antibiotic resistance from feedlots",
      "manure lagoon failure", "feedlot odor exposure", "dust exposure from tillage",
      "carbon emission accounting", "offset accounting", "leakage in offsets",
      "externality scoping", "cost shifting to the future", "cost shifting to elsewhere",
      "discount rate choice", "intergenerational transfer of harm",
      "reclamation bonding", "reclamation failure", "restoration underfunding",
      "monitoring cessation", "abandonment", "site handover to the public",
      "who stays after the operation leaves", "long tail of cleanup",
      "epidemiology of a fenceline community", "cancer cluster investigation",
      "burden of proof placement", "proof burden on the exposed", "latency and causation",
      "settlement with nondisclosure", "regulatory capture", "revolving door",
      "self-reported compliance", "inspection frequency", "penalty as cost of business"
    ]
  },

  {
    id: "computation-information-control",
    name: "Computation, information, and control",
    cut: "What is being represented, and what acts on the representation?",
    note: "Overlaps the first carving's computing entries and is cut differently: by what the representation does rather than by what technique produces it. Included in full because this repo's analyst layer is an instance of it — ATTRIBUTION_PROBE.md exists to measure one of these entries, and the `analyst-interior-state-attribution` record is a case of another.",
    domains: [
      "representation choice", "abstraction leakage", "model-territory confusion",
      "proxy variable selection", "proxy drift", "metric gaming",
      "target corruption under measurement", "optimization pressure effects",
      "objective misspecification", "reward hacking", "specification gaming",
      "distribution shift", "out-of-distribution behavior", "silent failure modes",
      "confidence calibration", "overconfidence in outputs", "uncertainty communication",
      "refusal behavior", "hedging behavior", "unlicensed attribution by a model",
      "motive attribution from behavior", "affect attribution from text",
      "interior state attribution", "anthropomorphic projection",
      "response space imposition", "smoothing of irregular input",
      "normalization of dialect", "correction of nonstandard spelling",
      "summarization loss", "theme extraction loss", "verbatim preservation",
      "voice separation in a record", "provenance of a claim in a synthesis",
      "citation fabrication", "plausible-source generation", "hallucination detection",
      "grounding in supplied sources", "retrieval quality", "context window effects",
      "prompt sensitivity", "instruction following versus intent",
      "single-channel input limits", "text-only sensing limits",
      "training corpus composition", "sampling frame of a corpus",
      "corpus language imbalance", "annotation labor conditions",
      "label noise", "annotator disagreement", "ground truth construction",
      "benchmark overfitting", "benchmark contamination", "evaluation design",
      "control arm design", "pre-registration of a prediction",
      "post-hoc rationalization detection", "ablation reasoning",
      "feedback loop in deployment", "recommendation feedback loop",
      "filter bubble formation", "engagement optimization effects",
      "attention capture", "dark pattern design", "consent interface design",
      "default setting power", "choice architecture", "algorithmic pricing",
      "algorithmic scheduling", "algorithmic management of workers",
      "automated decision review", "appeal channel design", "recourse design",
      "explanation generation", "explanation faithfulness", "audit trail design",
      "model documentation", "dataset documentation", "deployment monitoring",
      "drift detection", "incident response for models", "rollback practice",
      "red teaming", "adversarial input handling", "jailbreak resistance",
      "privacy leakage", "membership inference", "de-anonymization",
      "differential privacy practice", "federated learning practice",
      "data minimization", "retention policy", "deletion verification",
      "surveillance infrastructure", "biometric identification", "facial recognition use",
      "predictive policing", "risk scoring of people", "credit scoring",
      "insurance underwriting by algorithm", "eligibility determination by algorithm",
      "welfare fraud detection systems", "error cost asymmetry in scoring",
      "contestability of a score", "opacity of a scoring system",
      "control loop design", "feedback control", "feedforward control",
      "setpoint selection", "deadband selection", "hysteresis in control",
      "actuator saturation", "sensor fusion", "sensor disagreement handling",
      "fail-safe design", "fail-operational design", "graceful degradation",
      "watchdog design", "alarm design", "alarm flooding", "alarm fatigue",
      "supervisory control", "human-in-the-loop design", "automation complacency",
      "mode confusion", "handover from automation", "trust calibration in automation"
    ]
  }

  ],

  /*
   * Named absences. An honest gap is content; a padded list is not.
   *
   * These are not a modest disclaimer attached to a finished list. They are the
   * part of the enumeration that the enumeration cannot perform, written down so
   * that the count above is read as a floor and not as a census.
   */
  gaps: [
    {
      id: "no-english-name",
      absence: "Domains whose only names are in languages this file has no access to",
      why: "The naming rule in the header forbids coining or borrowing terms from traditions not represented here, because a plausible-looking borrowed term is a fabricated citation in different clothes. The rule is right and it has a cost: these domains appear under a clumsy English description or not at all.",
      consequence: "Every English description in this file is already a translation, and translation was one of the five implementation parameters. The list therefore measures a translated population, not the population."
    },
    {
      id: "not-carved-as-knowledge",
      absence: "Competences nobody in the represented traditions considers a domain",
      why: "An enumeration can only include what someone has already cut out as a knowable area. Anything held so ordinarily that it was never named — the way a hand knows a familiar door — has no entry to add.",
      consequence: "The list is biased toward knowledge that has been made explicit, which is the same bias that made the psychology instruments in this repo look complete to the people who built them."
    },
    {
      id: "restricted-knowledge",
      absence: "Domains that are deliberately not public",
      why: "Initiation-gated, lineage-held, and otherwise restricted knowledge is withheld on purpose. Listing such a domain by name would be a disclosure the holders did not authorize, even where the name alone is known.",
      consequence: "Absence here is not evidence of nonexistence, and this gap cannot be closed by better research. Closing it would be the offense."
    },
    {
      id: "granularity-arbitrary",
      absence: "The right level of detail",
      why: "\"welding\" or five welding processes; \"medicine\" or two hundred specialties. The institutional-academic carving is enumerated finely because its subdivisions are documented, and the craft carvings coarsely because theirs are not written down. Nothing principled sets the level.",
      consequence: "The total is an artifact of a choice, not a measurement. It could be argued up or down by an order of magnitude without adding or removing any knowledge from the world. Treat the count as a lower bound on a quantity that has no exact value."
    },
    {
      id: "carvings-not-exhaustive",
      absence: "Ways of cutting the world not represented by any carving here",
      why: "Nineteen carvings are listed. There is no argument that nineteen is the number, and the nineteen were themselves chosen by someone inside one of them.",
      consequence: "This is the same reflexive problem ONTOLOGICAL_COLLISIONS.md states about its taxonomy: the categories were read out of the material rather than imposed on it, which is a partial defense and weaker than escaping the trap."
    },
    {
      id: "same-name-different-domain",
      absence: "The distinction between two domains that share a name",
      why: "\"thermodynamics\" in the first carving and thermodynamics as THERMODYNAMICS.md describes it — entropy known as a heat gradient through the hands — are enumerated as one entry because they share an English word. They are false cognates, which is one of the eleven collision types.",
      consequence: "Global name uniqueness is enforced by validate.mjs for tractability, and it silently merges an unknown number of genuinely distinct domains. Every merge of this kind understates the total."
    },
    {
      id: "relations-not-enumerated",
      absence: "The relations themselves",
      why: "This file enumerates domains, not the cross-domain relations the request was ultimately about. The pair count printed by validate.mjs is the size of the space, not a claim that any particular pair is related.",
      consequence: "A populated cross-domain map at this scale is not achievable by enumeration, and saying so is a result rather than a shortfall. See DOMAINS.md."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = DOMAIN_CARVINGS;
}
