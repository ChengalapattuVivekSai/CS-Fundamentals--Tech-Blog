const COA_MODULES = [
  {
    id: "module-1",
    title: "Digital Foundations",
    topics: [
      { id: "number-systems", name: "Number Systems" },
      { id: "binary-arithmetic", name: "Binary Arithmetic" },
      { id: "signed-number-representation", name: "Signed Number Representation" },
      { id: "binary-codes", name: "Binary Codes" },
      { id: "logic-gates", name: "Logic Gates" },
      { id: "boolean-algebra", name: "Boolean Algebra" },
      { id: "combinational-circuits", name: "Combinational Circuits" }
    ]
  },
  {
    id: "module-2",
    title: "CPU & Instruction Execution",
    topics: [
      { id: "von-neumann-architecture", name: "Von Neumann Architecture" },
      { id: "cpu-components", name: "CPU Components" },
      { id: "instruction-cycle", name: "Instruction Cycle" },
      { id: "instruction-formats", name: "Instruction Formats" },
      { id: "addressing-modes", name: "Addressing Modes" },
      { id: "risc-vs-cisc", name: "RISC vs CISC" },
      { id: "control-unit", name: "Control Unit" }
    ]
  },
  {
    id: "module-3",
    title: "Memory Organization",
    topics: [
      { id: "memory-hierarchy", name: "Memory Hierarchy" },
      { id: "ram-vs-rom", name: "RAM vs ROM" },
      { id: "cache-memory", name: "Cache Memory" },
      { id: "virtual-memory", name: "Virtual Memory" },
      { id: "paging", name: "Paging" },
      { id: "tlb", name: "TLB" },
      { id: "stack-vs-heap", name: "Stack vs Heap" }
    ]
  },
  {
    id: "module-4",
    title: "Input Output Organization",
    topics: [
      { id: "interrupts", name: "Interrupts" },
      { id: "dma", name: "DMA" },
      { id: "polling", name: "Polling" },
      { id: "io-mapping", name: "I/O Mapping" },
      { id: "bus-architecture", name: "Bus Architecture" }
    ]
  },
  {
    id: "module-5",
    title: "Performance & Parallelism",
    topics: [
      { id: "pipelining", name: "Pipelining" },
      { id: "hazards", name: "Hazards" },
      { id: "parallel-processing", name: "Parallel Processing" },
      { id: "multicore-systems", name: "Multicore Systems" },
      { id: "simd", name: "SIMD" },
      { id: "gpu-basics", name: "GPU Basics" }
    ]
  }
];

const MODULE_ONE_TOPIC_CONTENT = {
  "number-systems": {
    overview: "Step 1 starts with representation. Computers must represent numbers, text, instructions, and memory addresses in strict digital form. Humans think in decimal (base 10), but machines operate in binary (base 2), while engineers frequently use octal and hexadecimal for compact readability.",
    whyItMatters: "This topic is the entry point to machine thinking. It builds direct intuition for memory representation, instruction formats, bit operations, and debugging at low-level boundaries used in OS, networking, security, compilers, and embedded systems.",
    analogy: "Like expressing the same city route in street names, map grid IDs, and GPS coordinates; the place is the same, only representation changes.",
    engineeringUsage: "You use number-system fluency when reading hex dumps, analyzing memory addresses, inspecting packet bytes, setting permission masks, and troubleshooting serialization bugs.",
    interviewQuestions: [
      "Convert 45 from decimal to binary and hexadecimal, then explain each step.",
      "Why do engineers prefer hexadecimal for binary-heavy debugging?",
      "How are memory addresses related to base conversion thinking?"
    ],
    keyNotes: [
      "Without standardized representation, hardware and software cannot interpret the same bit pattern consistently.",
      "Binary is machine-native, hexadecimal is engineer-friendly, and both are essential for systems debugging.",
      "Number systems form the conceptual bridge between abstract code and physical storage."
    ],
    flowDiagram: "Decimal\n   -> Binary\n   -> Binary Conversion\n   -> Octal\n   -> Hexadecimal\n   -> Memory Representation",
    example: "// Decimal 26 -> binary and hex\nconst decimal = 26;\nconst binary = decimal.toString(2);   // 11010\nconst hex = decimal.toString(16);     // 1a",
    revisionSummary: "Number systems define how machine data is expressed. Once representation is clear, binary arithmetic naturally becomes the next step."
  },
  "binary-arithmetic": {
    overview: "Step 2 explains how machines calculate after representing numbers. Binary arithmetic powers addition, subtraction, multiplication, and division through bit-level rules.",
    whyItMatters: "This is the foundation of ALU behavior. It builds understanding of carry generation, overflow, subtraction mechanics, and arithmetic flags used by CPUs.",
    analogy: "It is school-style column math, but with only 0 and 1, where carry movement is the central signal.",
    engineeringUsage: "Binary arithmetic directly impacts integer operations, bit manipulation, checksums, cryptographic routines, and low-level debugging of numeric errors.",
    interviewQuestions: [
      "Differentiate carry and overflow with one signed and one unsigned example.",
      "How does subtraction work using complement logic?",
      "Why does ALU design depend on predictable carry behavior?"
    ],
    keyNotes: [
      "Representation without arithmetic cannot support execution.",
      "Carry propagation is central to hardware adders and timing.",
      "Overflow understanding is critical for safe systems code."
    ],
    flowDiagram: "Binary Numbers\n      -> Binary Addition\n      -> Carry Generation\n      -> Subtraction\n      -> Overflow\n      -> ALU Foundations",
    example: "// Binary carry intuition\n// 1111 (15) + 0001 (1) in 4-bit unsigned = 0000 with carry out\nconst wrapsAt4Bits = (0b1111 + 0b0001) & 0b1111; // 0",
    revisionSummary: "Binary arithmetic shows how computation is physically executed. The next challenge is representing negative values correctly."
  },
  "signed-number-representation": {
    overview: "Step 3 answers a critical question: how can binary represent negative numbers like -1, -5, or -100? This leads to 1's complement and then the modern standard, 2's complement.",
    whyItMatters: "2's complement is used across CPU arithmetic, memory storage, programming language integer types, and assembly-level execution.",
    analogy: "Imagine a circular number wheel where values wrap past zero into negatives. 2's complement defines that wrap precisely.",
    engineeringUsage: "Whenever you use signed integers, compare boundaries, parse binary protocols, or debug overflow/underflow, you are applying signed representation logic.",
    interviewQuestions: [
      "Represent -5 in 8-bit 2's complement and explain each step.",
      "Why did 2's complement replace 1's complement in modern hardware?",
      "What is the signed range for n-bit representation?"
    ],
    keyNotes: [
      "Unsigned-only representation cannot encode negatives.",
      "2's complement enables one arithmetic pipeline for add/subtract.",
      "Signed math behavior is essential for robust low-level coding."
    ],
    flowDiagram: "Positive Binary\n      -> Need Negative Numbers\n      -> 1's Complement\n      -> Problems\n      -> 2's Complement\n      -> Modern Computer Representation",
    example: "// -5 in 8-bit two's complement\nconst positive = 0b00000101;\nconst onesComplement = (~positive) & 0xff; // 11111010\nconst twosComplement = (onesComplement + 1) & 0xff; // 11111011",
    revisionSummary: "Signed representation removes a major machine limitation and prepares the path from numeric values to richer data forms like text."
  },
  "binary-codes": {
    overview: "Step 4 extends binary beyond numbers. Systems needed a way to encode letters, symbols, emojis, and multiple human languages into machine-readable bit patterns.",
    whyItMatters: "Without encoding systems, text files, source code, the web, APIs, databases, and networking payloads would be impossible.",
    analogy: "Like assigning every character a unique passport number so systems worldwide interpret it consistently.",
    engineeringUsage: "Encoding knowledge prevents corrupted text, bad API payloads, incompatible storage formats, and multilingual data loss.",
    interviewQuestions: [
      "What problem did Unicode solve that ASCII could not?",
      "Why is UTF-8 widely used in modern systems?",
      "How do encoding mismatches break distributed systems?"
    ],
    keyNotes: [
      "ASCII introduced standard text mapping for early systems.",
      "Unicode generalized representation for global languages and symbols.",
      "Character encoding is foundational for strings, files, and network communication."
    ],
    flowDiagram: "Numbers Only\n      -> Need Text Representation\n      -> ASCII\n      -> Unicode\n      -> Modern Global Text Systems",
    example: "// Text encoding visibility\nconst text = \"A\";\nconst codePoint = text.codePointAt(0); // 65\nconst utf8Bytes = new TextEncoder().encode(text); // [65]",
    revisionSummary: "Binary codes let machines understand text. With data representation and encoding established, the next focus is physical logic construction."
  },
  "logic-gates": {
    overview: "Step 5 introduces the physical building blocks of hardware. Logic gates are tiny electronic decision units that operate on binary inputs.",
    whyItMatters: "CPUs, ALUs, memory circuits, and processor control paths are all built by composing logic gates.",
    analogy: "A gate acts like a strict checkpoint: only specific input conditions allow output to pass.",
    engineeringUsage: "Gate-level understanding improves reasoning about branches, masking logic, control signals, and CPU behavior under conditions.",
    interviewQuestions: [
      "Write the truth table for AND, OR, and XOR.",
      "Why are NAND/NOR called universal gates?",
      "How do simple gates combine into larger computational blocks?"
    ],
    keyNotes: [
      "Logic gates convert electrical states into deterministic decisions.",
      "All complex hardware emerges from simple gate combinations.",
      "Gate intuition helps bridge electrical behavior and software execution."
    ],
    flowDiagram: "Electrical Signals\n      -> Simple Logical Decisions\n      -> Logic Gates\n      -> Gate Combinations\n      -> Complex Circuits\n      -> CPU Hardware",
    example: "// AND gate behavior\nconst andGate = (a, b) => a & b;\n// 1 AND 1 => 1, everything else => 0",
    revisionSummary: "Logic gates are the atoms of digital hardware. Next, Boolean algebra teaches how to optimize gate expressions."
  },
  "boolean-algebra": {
    overview: "Step 6 is the mathematics of logic decisions. Boolean algebra expresses and simplifies digital conditions used to design efficient circuits.",
    whyItMatters: "As circuit complexity grows, simplification reduces hardware cost, improves speed, and lowers power usage.",
    analogy: "Like reducing a long condition chain into a shorter equivalent statement without changing meaning.",
    engineeringUsage: "Used in optimizing hardware logic, simplifying software predicates, and reasoning about compiler transforms.",
    interviewQuestions: [
      "Simplify a boolean expression using De Morgan's law.",
      "How does expression simplification affect hardware delay?",
      "Why does fewer logic levels improve performance?"
    ],
    keyNotes: [
      "Boolean algebra turns messy logic into optimized structure.",
      "Simplification cuts gate count and critical path depth.",
      "This is a direct performance and efficiency lever."
    ],
    flowDiagram: "Logic Gates\n      -> Complex Conditions\n      -> Boolean Expressions\n      -> Simplification\n      -> Optimized Hardware",
    example: "// Example simplification\n// (A && B) || (A && !B) => A\nconst simplified = \"A\";",
    revisionSummary: "Boolean algebra optimizes the decision layer. The next step is building functional routing components from combined gates."
  },
  "combinational-circuits": {
    overview: "Step 7 combines gates into practical systems such as MUX, DEMUX, encoders, and decoders. Output depends only on current inputs.",
    whyItMatters: "These circuits perform data routing, signal selection, memory selection, and CPU communication decisions.",
    analogy: "A MUX is a traffic controller deciding which one input lane moves forward at a given moment.",
    engineeringUsage: "Combinational logic is central to datapath routing, instruction decode, bus control, and memory access selection.",
    interviewQuestions: [
      "Design a 4:1 MUX and explain selector behavior.",
      "How do encoder and decoder roles differ in digital systems?",
      "Why are combinational blocks essential for CPU communication?"
    ],
    keyNotes: [
      "Single gates are insufficient for realistic data movement.",
      "Combinational circuits are the routing layer of digital systems.",
      "This step naturally leads to sequential circuits for memory/state."
    ],
    flowDiagram: "Logic Gates\n      -> Combined Together\n      -> Combinational Circuits\n      -> Data Routing\n      -> CPU Communication",
    example: "// 2:1 multiplexer\nconst mux = (select, in0, in1) => (select ? in1 : in0);\n// chooses which input continues forward",
    revisionSummary: "Combinational circuits solve instant logic. To store history and state, systems then move to sequential circuits (flip-flops, registers, counters)."
  }
};

const MODULE_ONE_FLOW_STEPS = [
  "1. Electric Signals",
  "2. Binary Representation",
  "3. Number Systems",
  "4. Binary Arithmetic",
  "5. Signed Numbers",
  "6. Character Encoding",
  "7. Logic Gates",
  "8. Boolean Logic",
  "9. Circuit Building",
  "10. Memory and State Storage",
  "11. Foundation of CPU Design"
];

const MODULE_ONE_MORE_LEARNING = {
  intro:
    "You still need calculation flow intuition in the AI era. Not to manually compute binary every day, but to build machine intuition, debugging depth, memory understanding, and systems thinking.",
  whyItStillMatters: [
    "AI infrastructure, databases, compilers, GPUs, distributed systems, and operating systems still rely on these foundations.",
    "The SWE-friendly depth is understanding voltage as signal, transistors as switches, binary detection, and how calculations happen internally.",
    "You do not need transistor fabrication, semiconductor physics, or analog electronics depth for this layer."
  ],
  waterAnalogy: [
    { label: "Voltage", value: "Water pressure" },
    { label: "Current", value: "Water flow" },
    { label: "Resistance", value: "Narrow pipe restriction" }
  ],
  signalNotes: [
    "Electrons flow in a wire. Current is the movement of electrons.",
    "Voltage is electrical pressure that pushes electrons.",
    "Resistance opposes electron flow, similar to a narrow pipe slowing water."
  ],
  binaryReasoning: [
    "Computers use voltage levels for 0 and 1 because voltage is easier to detect reliably than exact current flow.",
    "Trying to track exact electron flow is noisy, unstable, and difficult at high speed.",
    "Stable HIGH and LOW voltage thresholds make digital logic reliable and scalable."
  ],
  hardwareFlow: [
    "Power Supply",
    "Voltage Creates Electric Field",
    "Transistors Act as Switches",
    "Binary States Form",
    "Logic Gates Use Signals",
    "Millions of Gates Form CPU"
  ],
  calculationFlow: [
    "Voltage Signals",
    "Logic Gates",
    "Half Adder",
    "Full Adder",
    "Binary Addition",
    "ALU",
    "CPU Calculations"
  ],
  sweMindsetFlow: [
    "Electricity",
    "Voltage Signals",
    "Binary",
    "Logic Gates",
    "Circuits",
    "CPU",
    "Memory",
    "Programs",
    "Applications"
  ]
};

const STORAGE_KEYS = {
  completed: "coa_completed_topics",
  theme: "coa_theme",
  openModules: "coa_open_modules",
  notes: "coa_sticky_notes",
  moduleInfoOpen: "coa_module_info_open"
};

const DEFAULT_OPEN_MODULES = ["module-1"];

const ALL_TOPICS = COA_MODULES.flatMap((module) =>
  module.topics.map((topic) => ({ ...topic, moduleId: module.id, moduleTitle: module.title }))
);

const dom = {
  root: document.documentElement,
  modulesAccordion: document.getElementById("modulesAccordion"),
  topicDetail: document.getElementById("topicDetail"),
  topicSearch: document.getElementById("topicSearch"),
  searchMeta: document.getElementById("searchMeta"),
  notesList: document.getElementById("notesList"),
  noteForm: document.getElementById("noteForm"),
  noteInput: document.getElementById("noteInput"),
  themeToggle: document.getElementById("themeToggle"),
  mobileNavToggle: document.getElementById("mobileNavToggle"),
  sidebar: document.getElementById("sidebar"),
  sidebarBackdrop: document.getElementById("sidebarBackdrop"),
  navLinks: document.querySelector(".nav-links"),
  statModules: document.getElementById("statModules"),
  statTopics: document.getElementById("statTopics"),
  statCompleted: document.getElementById("statCompleted"),
  statProgress: document.getElementById("statProgress")
};

const state = {
  searchTerm: "",
  activeTopicId: null,
  detailTab: "core",
  completedTopics: new Set(),
  openModules: new Set(),
  stickyNotes: [],
  moduleInfoOpen: new Set()
};

const statState = {
  modules: 0,
  topics: 0,
  completed: 0,
  progress: 0
};

const storage = {
  getJSON(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },

  setJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

function init() {
  hydrateState();
  bindEvents();
  renderModules();
  renderNotes();
  updateStats(true);

  if (!state.activeTopicId && ALL_TOPICS.length > 0) {
    state.activeTopicId = ALL_TOPICS[0].id;
  }

  if (state.activeTopicId) {
    renderTopicDetail(state.activeTopicId);
  }
}

function hydrateState() {
  const completed = storage.getJSON(STORAGE_KEYS.completed, []);
  const openModules = storage.getJSON(STORAGE_KEYS.openModules, DEFAULT_OPEN_MODULES);
  const notes = storage.getJSON(STORAGE_KEYS.notes, []);
  const moduleInfoOpen = storage.getJSON(STORAGE_KEYS.moduleInfoOpen, []);
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || localStorage.getItem("ekb-root-theme") || "dark";

  state.completedTopics = new Set(completed);
  state.openModules = new Set(openModules);
  state.stickyNotes = Array.isArray(notes) ? notes : [];
  state.moduleInfoOpen = new Set(moduleInfoOpen);

  applyTheme(savedTheme);
}

function bindEvents() {
  dom.topicSearch.addEventListener("input", (event) => {
    state.searchTerm = event.target.value.trim().toLowerCase();
    renderModules();
  });

  dom.modulesAccordion.addEventListener("click", (event) => {
    const moduleButton = event.target.closest(".module-head");
    const topicButton = event.target.closest(".topic-btn");

    if (moduleButton) {
      const moduleId = moduleButton.dataset.moduleId;
      toggleModule(moduleId);
      return;
    }

    if (topicButton) {
      const topicId = topicButton.dataset.topicId;
      state.activeTopicId = topicId;
      state.detailTab = "core";
      renderModules();
      renderTopicDetail(topicId);
    }

    const moreButton = event.target.closest(".module-more-toggle");
    if (moreButton) {
      const moduleId = moreButton.dataset.moduleId;
      toggleModuleInfo(moduleId);
    }
  });

  dom.topicDetail.addEventListener("click", (event) => {
    const tabButton = event.target.closest("[data-detail-tab]");
    if (!tabButton || !state.activeTopicId) {
      return;
    }

    state.detailTab = tabButton.dataset.detailTab;
    renderTopicDetail(state.activeTopicId);
  });

  dom.modulesAccordion.addEventListener("change", (event) => {
    const check = event.target.closest(".topic-check");
    if (!check) {
      return;
    }

    const topicId = check.dataset.topicId;
    if (check.checked) {
      state.completedTopics.add(topicId);
    } else {
      state.completedTopics.delete(topicId);
    }

    storage.setJSON(STORAGE_KEYS.completed, Array.from(state.completedTopics));
    renderModules();
    updateStats();
  });

  dom.noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = dom.noteInput.value.trim();
    if (!text) {
      return;
    }

    state.stickyNotes.unshift({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      text,
      createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })
    });

    dom.noteInput.value = "";
    storage.setJSON(STORAGE_KEYS.notes, state.stickyNotes);
    renderNotes();
  });

  dom.notesList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-note]");
    if (!deleteButton) {
      return;
    }

    const noteId = deleteButton.dataset.deleteNote;
    state.stickyNotes = state.stickyNotes.filter((note) => note.id !== noteId);
    storage.setJSON(STORAGE_KEYS.notes, state.stickyNotes);
    renderNotes();
  });

  dom.themeToggle.addEventListener("click", () => {
    const nextTheme = dom.root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
    localStorage.setItem("ekb-root-theme", nextTheme);
  });

  dom.mobileNavToggle.addEventListener("click", () => {
    const shouldOpen = !dom.sidebar.classList.contains("open");
    setMobileSidebar(shouldOpen);
  });

  dom.sidebarBackdrop.addEventListener("click", () => {
    setMobileSidebar(false);
  });

  dom.navLinks.addEventListener("click", () => {
    if (window.innerWidth <= 980) {
      setMobileSidebar(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth > 980) {
      return;
    }

    const clickedInsideSidebar = event.target.closest("#sidebar");
    const clickedToggle = event.target.closest("#mobileNavToggle");
    const clickedBackdrop = event.target.closest("#sidebarBackdrop");
    if (!clickedInsideSidebar && !clickedToggle) {
      if (!clickedBackdrop) {
        setMobileSidebar(false);
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      setMobileSidebar(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMobileSidebar(false);
    }
  });
}

function applyTheme(theme) {
  dom.root.setAttribute("data-theme", theme);
  dom.themeToggle.textContent = theme === "dark" ? "Light" : "Dark";
}

function renderModules() {
  const fragment = document.createDocumentFragment();
  let visibleTopicCount = 0;

  COA_MODULES.forEach((module, moduleIndex) => {
    const matchingTopics = module.topics.filter((topic) =>
      topic.name.toLowerCase().includes(state.searchTerm)
    );

    const shouldFilterOut = state.searchTerm && matchingTopics.length === 0;
    if (shouldFilterOut) {
      return;
    }

    visibleTopicCount += state.searchTerm ? matchingTopics.length : module.topics.length;
    const topicsToRender = state.searchTerm ? matchingTopics : module.topics;
    const forceOpen = state.searchTerm.length > 0;
    const isOpen = forceOpen || state.openModules.has(module.id);
    const isMoreOpen = state.moduleInfoOpen.has(module.id);
    const moduleNumber = moduleIndex + 1;

    const moduleItem = document.createElement("section");
    moduleItem.className = `module-item${isOpen ? " open" : ""}`;

    moduleItem.innerHTML = `
      <button class="module-head" type="button" data-module-id="${module.id}">
        <div>
          <strong>Module ${moduleNumber}: ${module.title}</strong>
          <small>${topicsToRender.length} topic${topicsToRender.length > 1 ? "s" : ""}</small>
        </div>
        <span class="module-arrow">></span>
      </button>
      ${
        module.id === "module-1"
          ? `<div class="module-more-block">
              <button class="module-more-toggle" type="button" data-module-id="${module.id}">
                ${isMoreOpen ? "Hide More Info" : "More Info"}
              </button>
              <div class="module-more-content${isMoreOpen ? " open" : ""}">
                ${getModuleOneMoreInfoHtml()}
              </div>
            </div>`
          : ""
      }
      <div class="module-body">
        <div class="module-body-inner">
          <ul class="topic-list">
            ${topicsToRender
              .map((topic) => {
                const completed = state.completedTopics.has(topic.id);
                const active = state.activeTopicId === topic.id;
                const topicIndex = module.topics.findIndex((item) => item.id === topic.id) + 1;
                return `
                  <li class="topic-row${completed ? " completed" : ""}${active ? " active" : ""}">
                    <input class="topic-check" data-topic-id="${topic.id}" type="checkbox" ${completed ? "checked" : ""} aria-label="Mark ${topic.name} as completed" />
                    <button class="topic-btn" type="button" data-topic-id="${topic.id}">${moduleNumber}.${topicIndex} ${topic.name}</button>
                  </li>
                `;
              })
              .join("")}
          </ul>
        </div>
      </div>
    `;

    fragment.appendChild(moduleItem);
  });

  dom.modulesAccordion.innerHTML = "";
  dom.modulesAccordion.appendChild(fragment);

  const totalFound = state.searchTerm ? visibleTopicCount : ALL_TOPICS.length;
  dom.searchMeta.textContent = state.searchTerm
    ? `Search "${state.searchTerm}" -> ${totalFound} topic${totalFound !== 1 ? "s" : ""}`
    : "Showing all topics";
}

function toggleModuleInfo(moduleId) {
  if (state.moduleInfoOpen.has(moduleId)) {
    state.moduleInfoOpen.delete(moduleId);
  } else {
    state.moduleInfoOpen.add(moduleId);
  }

  storage.setJSON(STORAGE_KEYS.moduleInfoOpen, Array.from(state.moduleInfoOpen));
  renderModules();
}

function setMobileSidebar(isOpen) {
  if (window.innerWidth > 980) {
    dom.sidebar.classList.remove("open");
    dom.sidebarBackdrop.classList.remove("open");
    document.body.classList.remove("body-no-scroll");
    dom.mobileNavToggle.setAttribute("aria-expanded", "false");
    return;
  }

  dom.sidebar.classList.toggle("open", isOpen);
  dom.sidebarBackdrop.classList.toggle("open", isOpen);
  document.body.classList.toggle("body-no-scroll", isOpen);
  dom.mobileNavToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function toggleModule(moduleId) {
  if (state.searchTerm) {
    return;
  }

  if (state.openModules.has(moduleId)) {
    state.openModules.delete(moduleId);
  } else {
    state.openModules.add(moduleId);
  }

  storage.setJSON(STORAGE_KEYS.openModules, Array.from(state.openModules));
  renderModules();
}

function renderTopicDetail(topicId) {
  const topicData = ALL_TOPICS.find((topic) => topic.id === topicId);
  if (!topicData) {
    return;
  }

  const topicCode = getTopicCode(topicData.id);
  const detail = buildTopicDetail(topicData);
  const isModuleOneTopic = topicData.moduleId === "module-1";
  const visualRows = detail.visualization
    .map(
      (bar) => `
        <div class="visual-row">
          <span class="visual-label">${bar.label}</span>
          <span class="visual-bar" style="width:${bar.value}%"></span>
        </div>
      `
    )
    .join("");

  dom.topicDetail.className = "topic-card fade-in";
  dom.topicDetail.innerHTML = `
    <header class="topic-head">
      <div>
        <p class="kicker">${topicData.moduleTitle} | ${topicCode}</p>
        <h3>${topicCode} ${topicData.name}</h3>
      </div>
      <span class="badge">COA Topic</span>
    </header>
    ${
      isModuleOneTopic
        ? renderModuleOneTabs()
        : ""
    }
    ${renderDetailContent(topicData, detail, visualRows)}
  `;
}

function renderModuleOneTabs() {
  return `
    <nav class="detail-tabs" aria-label="Topic detail tabs">
      <button class="detail-tab${state.detailTab === "core" ? " active" : ""}" type="button" data-detail-tab="core">Core Notes</button>
      <button class="detail-tab${state.detailTab === "learning" ? " active" : ""}" type="button" data-detail-tab="learning">More Learning</button>
      <button class="detail-tab${state.detailTab === "flow" ? " active" : ""}" type="button" data-detail-tab="flow">Signal Flow</button>
    </nav>
  `;
}

function renderDetailContent(topicData, detail, visualRows) {
  if (topicData.moduleId === "module-1") {
    if (state.detailTab === "learning") {
      return renderModuleOneLearningContent();
    }

    if (state.detailTab === "flow") {
      return renderModuleOneFlowContent(detail);
    }
  }

  return renderCoreDetailContent(detail, visualRows);
}

function renderCoreDetailContent(detail, visualRows) {
  return `
    <section class="topic-section">
      <h4>1. Topic Overview</h4>
      <p>${detail.overview}</p>
    </section>

    <section class="topic-section">
      <h4>2. Why It Matters for Software Engineers</h4>
      <p>${detail.whyItMatters}</p>
    </section>

    <section class="topic-section">
      <h4>3. Real-world Analogy</h4>
      <p>${detail.analogy}</p>
    </section>

    <section class="topic-section">
      <h4>4. Real-world Engineering Usage</h4>
      <p>${detail.engineeringUsage}</p>
    </section>

    <section class="topic-section">
      <h4>5. Interview Questions</h4>
      <ol>${detail.interviewQuestions.map((item) => `<li>${item}</li>`).join("")}</ol>
    </section>

    <section class="topic-section">
      <h4>6. Key Notes</h4>
      <ul>${detail.keyNotes.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>

    <section class="topic-section">
      <h4>7. Visualization Section</h4>
      <div class="visual-block">${visualRows}</div>
      ${
        detail.flowDiagram
          ? `<pre class="flow-diagram"><code>${escapeHtml(detail.flowDiagram)}</code></pre>`
          : ""
      }
    </section>

    <section class="topic-section">
      <h4>8. Example Section</h4>
      <pre class="code-sample"><code>${escapeHtml(detail.example)}</code></pre>
    </section>

    <section class="topic-section">
      <h4>9. Revision Summary</h4>
      <p>${detail.revisionSummary}</p>
    </section>
  `;
}

function renderModuleOneLearningContent() {
  return `
    <section class="topic-section">
      <h4>More Learning: Why This Still Matters</h4>
      <p>${MODULE_ONE_MORE_LEARNING.intro}</p>
      <ul>${MODULE_ONE_MORE_LEARNING.whyItStillMatters.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>

    <section class="topic-section">
      <h4>Electricity Basics for SWE</h4>
      <div class="mini-grid">
        ${MODULE_ONE_MORE_LEARNING.waterAnalogy
          .map(
            (item) => `
              <article class="mini-card">
                <span class="mini-label">${item.label}</span>
                <strong>${item.value}</strong>
              </article>
            `
          )
          .join("")}
      </div>
      <ul>${MODULE_ONE_MORE_LEARNING.signalNotes.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>

    <section class="topic-section">
      <h4>Why Voltage Represents 0 and 1</h4>
      <ul>${MODULE_ONE_MORE_LEARNING.binaryReasoning.map((item) => `<li>${item}</li>`).join("")}</ul>
      <div class="signal-pill-row">
        <span class="signal-pill high">High Voltage = 1</span>
        <span class="signal-pill low">Low Voltage = 0</span>
      </div>
    </section>

    <section class="topic-section">
      <h4>Simple Hardware Stack</h4>
      ${renderFlowStack(MODULE_ONE_MORE_LEARNING.sweMindsetFlow, "blue")}
    </section>
  `;
}

function renderModuleOneFlowContent(detail) {
  return `
    <section class="topic-section topic-hero-visual">
      <h4>Signal Flow Visual</h4>
      <p>From electrical behavior to applications, this is the machine-thinking path you want in your head.</p>
      ${renderFlowStack(MODULE_ONE_MORE_LEARNING.sweMindsetFlow, "cyan")}
    </section>

    <section class="topic-section">
      <h4>Inside the Hardware</h4>
      ${renderFlowRail(MODULE_ONE_MORE_LEARNING.hardwareFlow)}
    </section>

    <section class="topic-section">
      <h4>Calculation Flow</h4>
      ${renderFlowRail(MODULE_ONE_MORE_LEARNING.calculationFlow)}
      ${
        detail.flowDiagram
          ? `<pre class="flow-diagram"><code>${escapeHtml(detail.flowDiagram)}</code></pre>`
          : ""
      }
    </section>
  `;
}

function renderFlowStack(items, tone) {
  return `
    <div class="flow-stack ${tone}">
      ${items
        .map(
          (item, index) => `
            <div class="flow-stack-node">
              <span>${item}</span>
              ${index < items.length - 1 ? '<div class="flow-stack-arrow"></div>' : ""}
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderFlowRail(items) {
  return `
    <div class="flow-rail">
      ${items
        .map(
          (item, index) => `
            <div class="flow-rail-node">
              <span>${item}</span>
              ${index < items.length - 1 ? '<div class="flow-rail-arrow">></div>' : ""}
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function getTopicCode(topicId) {
  for (let moduleIndex = 0; moduleIndex < COA_MODULES.length; moduleIndex += 1) {
    const topicIndex = COA_MODULES[moduleIndex].topics.findIndex((topic) => topic.id === topicId);
    if (topicIndex !== -1) {
      return `${moduleIndex + 1}.${topicIndex + 1}`;
    }
  }
  return "-";
}

function buildTopicDetail(topic) {
  const term = topic.name;
  const deepContent = MODULE_ONE_TOPIC_CONTENT[topic.id];

  if (deepContent) {
    return {
      overview: deepContent.overview,
      whyItMatters: deepContent.whyItMatters,
      analogy: deepContent.analogy,
      engineeringUsage: deepContent.engineeringUsage,
      interviewQuestions: deepContent.interviewQuestions,
      keyNotes: deepContent.keyNotes,
      visualization: [
        { label: "Clarity", value: 95 },
        { label: "Hardware", value: 90 },
        { label: "Software", value: 88 }
      ],
      flowDiagram: deepContent.flowDiagram,
      example: deepContent.example,
      revisionSummary: deepContent.revisionSummary
    };
  }

  return {
    overview: `${term} explains how the hardware-level mechanism behaves and how instructions or data move through the system. This foundation helps connect low-level architecture to high-level software decisions.`,
    whyItMatters: `Understanding ${term} improves performance reasoning, debugging depth, and systems-level tradeoff decisions in backend, platform, and product engineering work.`,
    analogy: `Think of ${term} like a carefully synchronized city transport network: each lane, signal, and route must be coordinated to keep traffic moving without collisions or wasted motion.`,
    engineeringUsage: `Teams use ${term} concepts while optimizing API latency, reducing cloud compute waste, choosing data layouts, and diagnosing production bottlenecks that profiler outputs alone cannot explain.`,
    interviewQuestions: [
      `How would you explain ${term} to a new engineer with one practical example?`,
      `What tradeoffs appear when ${term} is optimized for speed over simplicity?`,
      `Which system metrics would indicate ${term} is becoming a bottleneck?`
    ],
    keyNotes: [
      `Link ${term} with instruction execution and memory behavior to build intuition.`,
      `Map the concept to both CPU time and memory footprint impacts.`,
      `Practice one numerical or diagram-based explanation for interviews.`
    ],
    visualization: [
      { label: "Flow", value: 90 },
      { label: "Latency", value: 64 },
      { label: "Control", value: 78 }
    ],
    example: `// ${term} quick sketch\nfor (const instruction of pipeline) {\n  decode(instruction);\n  execute(instruction);\n  writeBack(instruction);\n}`,
    revisionSummary: `${term} is a recurring COA pattern: understand its role, identify its bottlenecks, and connect it to software architecture outcomes such as throughput, latency, and reliability.`
  };
}

function getModuleOneMoreInfoHtml() {
  const flowLines = MODULE_ONE_FLOW_STEPS.map((line) => `<li>${line}</li>`).join("");
  return `
    <div class="module-one-info">
      <h4>Module 1: Digital Foundations</h4>
      <p><strong>The beginning of how computers think:</strong> before CPUs, memory, OS internals, and networking, you must understand how machines represent information internally. There are no words or images inside hardware, only binary states.</p>
      <p><strong>Why this module exists:</strong> it builds binary thinking, hardware intuition, low-level understanding, and digital logic foundations that make later modules natural instead of magical.</p>
      <p><strong>Before digital systems:</strong> mechanical and analog machines were slow, hard to scale, less reliable, and difficult to automate.</p>
      <p><strong>The revolution:</strong> two-state design (ON/OFF, HIGH/LOW, TRUE/FALSE) became binary, aligning perfectly with stable electrical behavior (voltage/no voltage).</p>
      <p><strong>Impact:</strong> reliability, scalability, speed, simpler design, and better noise resistance.</p>
      <h5>Complete Learning Flow</h5>
      <ol>${flowLines}</ol>
      <h5>Topic Sequence (Numbered)</h5>
      <ul>
        <li>1.1 Number Systems</li>
        <li>1.2 Binary Arithmetic</li>
        <li>1.3 Signed Number Representation</li>
        <li>1.4 Binary Codes</li>
        <li>1.5 Logic Gates</li>
        <li>1.6 Boolean Algebra</li>
        <li>1.7 Combinational Circuits</li>
      </ul>
      <p><strong>Bridge concept (Step 8):</strong> sequential circuits (flip-flops, registers, counters) add memory and state, preparing CPU architecture concepts in Module 2.</p>
      <p><strong>Why software engineers should care:</strong> this module improves debugging, optimization, backend reliability, database performance intuition, networking understanding, and system-level reasoning.</p>
      <p><strong>Standard learning strategy for each topic:</strong> What is it -> Why needed -> Prior problem -> How it works -> Real-world analogy -> Hardware perspective -> Software relevance -> Interview importance -> Coding relation -> Visualization.</p>
    </div>
  `;
}

function renderNotes() {
  if (state.stickyNotes.length === 0) {
    dom.notesList.innerHTML = `<p class="meta">No notes yet. Capture insights while studying.</p>`;
    return;
  }

  dom.notesList.innerHTML = state.stickyNotes
    .map(
      (note) => `
      <article class="note-item fade-in">
        <p>${escapeHtml(note.text)}</p>
        <footer>
          <small>${note.createdAt}</small>
          <button type="button" data-delete-note="${note.id}">Delete</button>
        </footer>
      </article>
    `
    )
    .join("");
}

function updateStats(skipAnimation = false) {
  const totalModules = COA_MODULES.length;
  const totalTopics = ALL_TOPICS.length;
  const completed = Array.from(state.completedTopics).filter((topicId) =>
    ALL_TOPICS.some((topic) => topic.id === topicId)
  ).length;
  const progress = totalTopics === 0 ? 0 : Math.round((completed / totalTopics) * 100);

  animateStat("modules", dom.statModules, totalModules, skipAnimation, (value) => `${value}`);
  animateStat("topics", dom.statTopics, totalTopics, skipAnimation, (value) => `${value}`);
  animateStat("completed", dom.statCompleted, completed, skipAnimation, (value) => `${value}`);
  animateStat("progress", dom.statProgress, progress, skipAnimation, (value) => `${value}%`);
}

function animateStat(key, element, target, skipAnimation, formatter) {
  if (skipAnimation) {
    statState[key] = target;
    element.textContent = formatter(target);
    return;
  }

  const start = statState[key];
  const duration = 380;
  const begin = performance.now();

  function tick(now) {
    const ratio = Math.min((now - begin) / duration, 1);
    const eased = 1 - Math.pow(1 - ratio, 3);
    const value = Math.round(start + (target - start) * eased);
    element.textContent = formatter(value);

    if (ratio < 1) {
      requestAnimationFrame(tick);
    } else {
      statState[key] = target;
    }
  }

  requestAnimationFrame(tick);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

init();
