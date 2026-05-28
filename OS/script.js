const OS_MODULES = [
  {
    id: "module-0",
    code: "Module 0",
    title: "COA to OS Bridge",
    folder: "00-coa-to-os-bridge",
    purpose: "Connect hardware behavior to operating system mechanisms before entering core OS abstractions.",
    outcome: "Explain how privilege, interrupts, address translation, and context state make an operating system possible.",
    linuxFocus: ["CPU privilege levels", "interrupt path", "syscall trap", "virtual addressing"],
    topics: [
      { id: "cpu-privilege-levels", name: "CPU Privilege Levels", file: "01-cpu-privilege-levels.md" },
      { id: "interrupts-traps-exceptions", name: "Interrupts, Traps, and Exceptions", file: "02-interrupts-traps-exceptions.md" },
      { id: "system-call-hardware-path", name: "System Call Hardware Path", file: "03-system-call-hardware-path.md" },
      { id: "mmu-tlb-context-switch-basics", name: "MMU, TLB, and Context Switch Basics", file: "04-mmu-tlb-context-switch-basics.md" }
    ]
  },
  {
    id: "module-1",
    code: "Module 1",
    title: "OS Foundations and Evolution",
    folder: "01-os-foundations",
    purpose: "Build the big picture for why operating systems exist and how they evolved into modern Linux-centric systems.",
    outcome: "Explain the OS as abstraction layer, resource manager, and evolving systems interface.",
    linuxFocus: ["Unix lineage", "Linux kernel models", "resource management", "systems abstraction"],
    topics: [
      { id: "what-is-an-operating-system", name: "What Is an Operating System?", file: "01-what-is-an-operating-system.md" },
      { id: "why-operating-systems-exist", name: "Why Operating Systems Exist", file: "02-why-operating-systems-exist.md" },
      { id: "evolution-of-operating-systems", name: "Evolution of Operating Systems", file: "03-evolution-of-operating-systems.md" },
      { id: "types-of-operating-systems", name: "Types of Operating Systems", file: "04-types-of-operating-systems.md" },
      { id: "kernel-architecture-models", name: "Kernel Architecture Models", file: "05-kernel-architecture-models.md" }
    ]
  },
  {
    id: "module-2",
    code: "Module 2",
    title: "Kernel Boundary and System Calls",
    folder: "02-kernel-boundary-and-syscalls",
    purpose: "Understand how user programs cross into the kernel and how bootstrapping reaches a running OS.",
    outcome: "Trace user code through libc, syscall entry, kernel execution, and system boot flow.",
    linuxFocus: ["user space vs kernel space", "syscalls", "libc boundary", "systemd boot chain"],
    topics: [
      { id: "user-mode-vs-kernel-mode", name: "User Mode vs Kernel Mode", file: "01-user-mode-vs-kernel-mode.md" },
      { id: "kernel-space-vs-user-space", name: "Kernel Space vs User Space", file: "02-kernel-space-vs-user-space.md" },
      { id: "system-calls", name: "System Calls", file: "03-system-calls.md" },
      { id: "syscall-lifecycle", name: "Syscall Lifecycle", file: "04-syscall-lifecycle.md" },
      { id: "boot-process", name: "Boot Process", file: "05-boot-process.md" }
    ]
  },
  {
    id: "module-3",
    code: "Module 3",
    title: "Processes",
    folder: "03-processes",
    purpose: "Study execution as the operating system sees it: isolated processes with state, memory, and lifecycle.",
    outcome: "Explain how programs become processes, how process state changes, and how Linux manages them.",
    linuxFocus: ["fork", "exec", "wait", "/proc", "process state"],
    topics: [
      { id: "program-vs-process", name: "Program vs Process", file: "01-program-vs-process.md" },
      { id: "process-lifecycle", name: "Process Lifecycle", file: "02-process-lifecycle.md" },
      { id: "process-control-block", name: "Process Control Block", file: "03-process-control-block.md" },
      { id: "process-memory-layout", name: "Process Memory Layout", file: "04-process-memory-layout.md" },
      { id: "fork-exec-wait", name: "Fork, Exec, and Wait", file: "05-fork-exec-wait.md" },
      { id: "zombie-and-orphan-processes", name: "Zombie and Orphan Processes", file: "06-zombie-and-orphan-processes.md" }
    ]
  },
  {
    id: "module-4",
    code: "Module 4",
    title: "Threads and Multithreading",
    folder: "04-threads",
    purpose: "Move from process-level concurrency to thread-level execution and shared-state tradeoffs.",
    outcome: "Reason precisely about thread models, shared memory, and concurrency vs parallelism.",
    linuxFocus: ["kernel threads", "thread pools", "shared address space", "backend workers"],
    topics: [
      { id: "what-is-a-thread", name: "What Is a Thread?", file: "01-what-is-a-thread.md" },
      { id: "thread-vs-process", name: "Thread vs Process", file: "02-thread-vs-process.md" },
      { id: "multithreading-models", name: "Multithreading Models", file: "03-multithreading-models.md" },
      { id: "thread-lifecycle", name: "Thread Lifecycle", file: "04-thread-lifecycle.md" },
      { id: "thread-pools-and-backend-use", name: "Thread Pools and Backend Use", file: "05-thread-pools-and-backend-use.md" }
    ]
  },
  {
    id: "module-5",
    code: "Module 5",
    title: "CPU Scheduling",
    folder: "05-cpu-scheduling",
    purpose: "Understand how the OS shares CPU time across competing tasks while balancing fairness and responsiveness.",
    outcome: "Compare major scheduling policies and reason about why Linux schedules one task over another.",
    linuxFocus: ["CFS intuition", "nice values", "preemption", "multicore fairness"],
    topics: [
      { id: "why-scheduling-is-needed", name: "Why Scheduling Is Needed", file: "01-why-scheduling-is-needed.md" },
      { id: "scheduling-metrics", name: "Scheduling Metrics", file: "02-scheduling-metrics.md" },
      { id: "fcfs-sjf-srtf", name: "FCFS, SJF, and SRTF", file: "03-fcfs-sjf-srtf.md" },
      { id: "round-robin-and-priority", name: "Round Robin and Priority", file: "04-round-robin-and-priority.md" },
      { id: "multilevel-feedback-queue", name: "Multilevel Feedback Queue", file: "05-multilevel-feedback-queue.md" },
      { id: "linux-cfs-intuition", name: "Linux CFS Intuition", file: "06-linux-cfs-intuition.md" }
    ]
  },
  {
    id: "module-6",
    code: "Module 6",
    title: "Synchronization and Concurrency Control",
    folder: "06-synchronization",
    purpose: "Study correctness under concurrency and the mechanisms used to guard critical sections and shared state.",
    outcome: "Design and debug concurrent systems with sound synchronization reasoning.",
    linuxFocus: ["mutexes", "semaphores", "deadlocks", "shared-state debugging"],
    topics: [
      { id: "race-conditions", name: "Race Conditions", file: "01-race-conditions.md" },
      { id: "critical-section-problem", name: "Critical Section Problem", file: "02-critical-section-problem.md" },
      { id: "mutex", name: "Mutex", file: "03-mutex.md" },
      { id: "semaphore", name: "Semaphore", file: "04-semaphore.md" },
      { id: "condition-variable", name: "Condition Variable", file: "05-condition-variable.md" },
      { id: "deadlocks", name: "Deadlocks", file: "06-deadlocks.md" },
      { id: "classic-synchronization-problems", name: "Classic Synchronization Problems", file: "07-classic-synchronization-problems.md" }
    ]
  },
  {
    id: "module-7",
    code: "Module 7",
    title: "Inter-Process Communication",
    folder: "07-ipc",
    purpose: "Understand how isolated processes coordinate, exchange data, and trade performance for safety and flexibility.",
    outcome: "Choose the right IPC mechanism based on copying cost, synchronization, and system architecture needs.",
    linuxFocus: ["pipes", "shared memory", "signals", "Unix sockets", "file descriptors"],
    topics: [
      { id: "why-ipc-is-needed", name: "Why IPC Is Needed", file: "01-why-ipc-is-needed.md" },
      { id: "pipes-and-fifos", name: "Pipes and FIFOs", file: "02-pipes-and-fifos.md" },
      { id: "message-queues", name: "Message Queues", file: "03-message-queues.md" },
      { id: "shared-memory", name: "Shared Memory", file: "04-shared-memory.md" },
      { id: "signals", name: "Signals", file: "05-signals.md" },
      { id: "sockets", name: "Sockets", file: "06-sockets.md" },
      { id: "ipc-tradeoffs", name: "IPC Tradeoffs", file: "07-ipc-tradeoffs.md" }
    ]
  },
  {
    id: "module-8",
    code: "Module 8",
    title: "Memory Management",
    folder: "08-memory-management",
    purpose: "Study how the OS creates the illusion of large, safe, and efficient memory for every running process.",
    outcome: "Explain virtual memory, page faults, replacement policies, and Linux memory behavior with precision.",
    linuxFocus: ["paging", "mmap", "/proc/<pid>/maps", "RSS vs VSZ", "OOM behavior"],
    topics: [
      { id: "address-space-basics", name: "Address Space Basics", file: "01-address-space-basics.md" },
      { id: "fragmentation", name: "Fragmentation", file: "02-fragmentation.md" },
      { id: "paging", name: "Paging", file: "03-paging.md" },
      { id: "page-tables", name: "Page Tables", file: "04-page-tables.md" },
      { id: "segmentation", name: "Segmentation", file: "05-segmentation.md" },
      { id: "virtual-memory", name: "Virtual Memory", file: "06-virtual-memory.md" },
      { id: "page-faults", name: "Page Faults", file: "07-page-faults.md" },
      { id: "page-replacement", name: "Page Replacement", file: "08-page-replacement.md" },
      { id: "thrashing", name: "Thrashing", file: "09-thrashing.md" },
      { id: "mmap-and-linux-memory", name: "mmap and Linux Memory", file: "10-mmap-and-linux-memory.md" }
    ]
  },
  {
    id: "module-9",
    code: "Module 9",
    title: "File Systems and Storage Internals",
    folder: "09-file-systems",
    purpose: "Understand how the OS stores persistent data, resolves paths, preserves consistency, and exposes files as a stable abstraction.",
    outcome: "Explain inodes, path resolution, journaling, and the Linux filesystem hierarchy.",
    linuxFocus: ["ext4 intuition", "inodes", "VFS", "/proc", "/sys", "/dev"],
    topics: [
      { id: "file-system-basics", name: "File System Basics", file: "01-file-system-basics.md" },
      { id: "inodes", name: "Inodes", file: "02-inodes.md" },
      { id: "directories-and-path-resolution", name: "Directories and Path Resolution", file: "03-directories-and-path-resolution.md" },
      { id: "links", name: "Links", file: "04-links.md" },
      { id: "file-allocation", name: "File Allocation", file: "05-file-allocation.md" },
      { id: "journaling", name: "Journaling", file: "06-journaling.md" },
      { id: "vfs", name: "Virtual File System", file: "07-vfs.md" },
      { id: "linux-file-system-layout", name: "Linux File System Layout", file: "08-linux-file-system-layout.md" }
    ]
  },
  {
    id: "module-10",
    code: "Module 10",
    title: "I/O and Device Interaction",
    folder: "10-io-and-devices",
    purpose: "Study how the OS moves data between hardware and software while controlling latency, throughput, and concurrency.",
    outcome: "Reason about device interaction, blocking vs non-blocking I/O, and multiplexing primitives.",
    linuxFocus: ["device drivers", "DMA", "file descriptors", "select/poll/epoll"],
    topics: [
      { id: "device-interaction-basics", name: "Device Interaction Basics", file: "01-device-interaction-basics.md" },
      { id: "polling-vs-interrupts", name: "Polling vs Interrupts", file: "02-polling-vs-interrupts.md" },
      { id: "dma", name: "DMA", file: "03-dma.md" },
      { id: "buffering-and-caching", name: "Buffering and Caching", file: "04-buffering-and-caching.md" },
      { id: "blocking-vs-nonblocking-io", name: "Blocking vs Non-Blocking I/O", file: "05-blocking-vs-nonblocking-io.md" },
      { id: "sync-vs-async-io", name: "Sync vs Async I/O", file: "06-sync-vs-async-io.md" },
      { id: "select-poll-epoll", name: "select, poll, epoll", file: "07-select-poll-epoll.md" }
    ]
  },
  {
    id: "module-11",
    code: "Module 11",
    title: "Linux Internals",
    folder: "11-linux-internals",
    purpose: "Translate textbook OS theory into how Linux actually organizes tasks, memory, filesystems, and services.",
    outcome: "Diagnose Linux systems with subsystem-level thinking and practical observability tools.",
    linuxFocus: ["scheduler", "procfs", "sysfs", "systemd", "observability tooling"],
    topics: [
      { id: "linux-architecture-overview", name: "Linux Architecture Overview", file: "01-linux-architecture-overview.md" },
      { id: "linux-process-internals", name: "Linux Process Internals", file: "02-linux-process-internals.md" },
      { id: "linux-memory-internals", name: "Linux Memory Internals", file: "03-linux-memory-internals.md" },
      { id: "linux-scheduler", name: "Linux Scheduler", file: "04-linux-scheduler.md" },
      { id: "signals-and-file-descriptors", name: "Signals and File Descriptors", file: "05-signals-and-file-descriptors.md" },
      { id: "procfs-and-sysfs", name: "procfs and sysfs", file: "06-procfs-and-sysfs.md" },
      { id: "daemons-and-systemd", name: "Daemons and systemd", file: "07-daemons-and-systemd.md" },
      { id: "linux-observability-tools", name: "Linux Observability Tools", file: "08-linux-observability-tools.md" }
    ]
  },
  {
    id: "module-12",
    code: "Module 12",
    title: "System Programming",
    folder: "12-system-programming",
    purpose: "Use operating system primitives directly and connect APIs like fork, exec, pipes, threads, and sockets to runtime behavior.",
    outcome: "Write code that interacts with the OS deliberately rather than treating it as a black box.",
    linuxFocus: ["fork/exec/wait", "signals", "pthread primitives", "sockets", "resource leaks"],
    topics: [
      { id: "fork-exec-wait-sp", name: "fork, exec, wait", file: "01-fork-exec-wait.md" },
      { id: "pipes-and-redirection", name: "Pipes and Redirection", file: "02-pipes-and-redirection.md" },
      { id: "signal-handling", name: "Signal Handling", file: "03-signal-handling.md" },
      { id: "threads-in-c-cpp", name: "Threads in C/C++", file: "04-threads-in-c-cpp.md" },
      { id: "sockets-basics", name: "Sockets Basics", file: "05-sockets-basics.md" },
      { id: "mmap", name: "mmap", file: "06-mmap.md" },
      { id: "daemon-basics", name: "Daemon Basics", file: "07-daemon-basics.md" },
      { id: "common-system-bugs", name: "Common System Bugs", file: "08-common-system-bugs.md" }
    ]
  },
  {
    id: "module-13",
    code: "Module 13",
    title: "Containers, Isolation, and Virtualization",
    folder: "13-containers-and-virtualization",
    purpose: "Connect core OS isolation mechanisms to containers, VMs, and modern cloud deployment models.",
    outcome: "Explain namespaces, cgroups, container boundaries, and virtualization with practical clarity.",
    linuxFocus: ["namespaces", "cgroups", "Docker internals", "hypervisors"],
    topics: [
      { id: "process-isolation", name: "Process Isolation", file: "01-process-isolation.md" },
      { id: "namespaces", name: "Namespaces", file: "02-namespaces.md" },
      { id: "cgroups", name: "cgroups", file: "03-cgroups.md" },
      { id: "containers-vs-vms", name: "Containers vs VMs", file: "04-containers-vs-vms.md" },
      { id: "docker-internals", name: "Docker Internals", file: "05-docker-internals.md" },
      { id: "hypervisors", name: "Hypervisors", file: "06-hypervisors.md" }
    ]
  },
  {
    id: "module-14",
    code: "Module 14",
    title: "OS to Networking Bridge",
    folder: "14-os-to-networking-bridge",
    purpose: "Prepare for networking from the OS side by grounding sockets, kernel buffers, and multiplexing in earlier OS concepts.",
    outcome: "Enter networking with strong process, memory, syscall, and I/O context already in place.",
    linuxFocus: ["socket abstraction", "kernel buffers", "blocking behavior", "I/O multiplexing"],
    topics: [
      { id: "socket-as-os-abstraction", name: "Socket as OS Abstraction", file: "01-socket-as-os-abstraction.md" },
      { id: "kernel-buffers", name: "Kernel Buffers", file: "02-kernel-buffers.md" },
      { id: "blocking-vs-nonblocking-sockets", name: "Blocking vs Non-Blocking Sockets", file: "03-blocking-vs-nonblocking-sockets.md" },
      { id: "io-multiplexing", name: "I/O Multiplexing", file: "04-io-multiplexing.md" },
      { id: "why-networking-depends-on-os", name: "Why Networking Depends on OS", file: "05-why-networking-depends-on-os.md" }
    ]
  }
];

const STORAGE_KEYS = {
  completed: "os_completed_topics",
  theme: "os_theme",
  openModules: "os_open_modules",
  notes: "os_sticky_notes",
  moduleInfoOpen: "os_module_info_open"
};

const DEFAULT_OPEN_MODULES = ["module-0", "module-1", "module-2"];

const STANDARD_STUDY_FLOW = [
  "Problem before the concept existed",
  "Why simple approaches failed",
  "Core definition and abstraction",
  "Internal mechanism",
  "Linux connection",
  "Backend or systems relevance",
  "Performance implications",
  "Common bugs or misconceptions",
  "Interview framing",
  "Visualization and summary flow"
];

const ALL_TOPICS = OS_MODULES.flatMap((module) =>
  module.topics.map((topic, index) => ({
    ...topic,
    order: index + 1,
    moduleId: module.id,
    moduleCode: module.code,
    moduleTitle: module.title,
    moduleFolder: module.folder,
    modulePurpose: module.purpose,
    moduleOutcome: module.outcome,
    linuxFocus: module.linuxFocus
  }))
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

function init() {
  hydrateState();
  bindEvents();
  renderModules();
  renderNotes();
  updateStats();

  if (!state.activeTopicId && ALL_TOPICS.length > 0) {
    state.activeTopicId = ALL_TOPICS[0].id;
  }

  if (state.activeTopicId) {
    renderTopicDetail(state.activeTopicId);
  }
}

function hydrateState() {
  state.completedTopics = new Set(getJSON(STORAGE_KEYS.completed, []));
  state.openModules = new Set(getJSON(STORAGE_KEYS.openModules, DEFAULT_OPEN_MODULES));
  state.stickyNotes = getJSON(STORAGE_KEYS.notes, []);
  state.moduleInfoOpen = new Set(getJSON(STORAGE_KEYS.moduleInfoOpen, []));

  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || localStorage.getItem("ekb-root-theme") || "dark";
  applyTheme(savedTheme);
}

function bindEvents() {
  dom.topicSearch.addEventListener("input", (event) => {
    state.searchTerm = event.target.value.trim().toLowerCase();
    renderModules();
  });

  dom.modulesAccordion.addEventListener("click", (event) => {
    const checkbox = event.target.closest(".topic-check");
    const moduleButton = event.target.closest(".module-head");
    const topicButton = event.target.closest(".topic-btn");
    const moreButton = event.target.closest(".module-more-toggle");

    if (checkbox) {
      toggleCompleted(checkbox.dataset.topicId);
      return;
    }

    if (moduleButton) {
      toggleModule(moduleButton.dataset.moduleId);
      return;
    }

    if (topicButton) {
      state.activeTopicId = topicButton.dataset.topicId;
      state.detailTab = "core";
      renderModules();
      renderTopicDetail(state.activeTopicId);
      return;
    }

    if (moreButton) {
      toggleModuleInfo(moreButton.dataset.moduleId);
    }
  });

  dom.topicDetail.addEventListener("click", (event) => {
    const tabButton = event.target.closest("[data-detail-tab]");
    const completeButton = event.target.closest("[data-complete-topic]");

    if (tabButton) {
      state.detailTab = tabButton.dataset.detailTab;
      renderTopicDetail(state.activeTopicId);
      return;
    }

    if (completeButton) {
      toggleCompleted(completeButton.dataset.completeTopic);
    }
  });

  dom.noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = dom.noteInput.value.trim();
    if (!note) {
      return;
    }

    state.stickyNotes.unshift({
      id: `note-${Date.now()}`,
      text: note
    });
    setJSON(STORAGE_KEYS.notes, state.stickyNotes);
    dom.noteInput.value = "";
    renderNotes();
  });

  dom.notesList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-note]");
    if (!deleteButton) {
      return;
    }

    state.stickyNotes = state.stickyNotes.filter((note) => note.id !== deleteButton.dataset.deleteNote);
    setJSON(STORAGE_KEYS.notes, state.stickyNotes);
    renderNotes();
  });

  dom.themeToggle.addEventListener("click", () => {
    const nextTheme = dom.root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });

  dom.mobileNavToggle.addEventListener("click", () => {
    const isOpen = dom.sidebar.classList.toggle("open");
    dom.sidebarBackdrop.classList.toggle("open", isOpen);
    dom.mobileNavToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("body-no-scroll", isOpen);
  });

  dom.sidebarBackdrop.addEventListener("click", closeSidebar);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      closeSidebar();
    }
  });
}

function renderModules() {
  const visibleModules = OS_MODULES.map((module) => {
    const matchesModule = module.title.toLowerCase().includes(state.searchTerm) || module.code.toLowerCase().includes(state.searchTerm);
    const visibleTopics = module.topics.filter((topic) => topic.name.toLowerCase().includes(state.searchTerm) || matchesModule);
    return {
      ...module,
      visibleTopics,
      matchesModule,
      isVisible: matchesModule || visibleTopics.length > 0 || !state.searchTerm
    };
  }).filter((module) => module.isVisible);

  dom.searchMeta.textContent = state.searchTerm
    ? `Showing ${visibleModules.length} module(s) for "${state.searchTerm}"`
    : "Showing complete roadmap";

  dom.modulesAccordion.innerHTML = visibleModules
    .map((module) => {
      const isOpen = state.openModules.has(module.id);
      const infoOpen = state.moduleInfoOpen.has(module.id);
      const topicsMarkup = module.visibleTopics
        .map((topic) => {
          const enrichedTopic = ALL_TOPICS.find((item) => item.id === topic.id);
          const isActive = state.activeTopicId === topic.id;
          const isCompleted = state.completedTopics.has(topic.id);
          return `
            <li class="topic-row ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}">
              <input
                class="topic-check"
                type="checkbox"
                data-topic-id="${topic.id}"
                ${isCompleted ? "checked" : ""}
                aria-label="Mark ${topic.name} as completed"
              />
              <button class="topic-btn" type="button" data-topic-id="${topic.id}">
                ${topic.name}
                <small class="meta" style="display:block;margin-top:0.18rem;">${module.folder}/${enrichedTopic.file}</small>
              </button>
            </li>
          `;
        })
        .join("");

      return `
        <article class="module-item ${isOpen ? "open" : ""}">
          <button class="module-head" type="button" data-module-id="${module.id}">
            <div>
              <strong>${module.code} — ${module.title}</strong>
              <small>${module.topics.length} lessons · ${module.folder}</small>
            </div>
            <span class="module-arrow">›</span>
          </button>

          <div class="module-more-block">
            <button class="module-more-toggle" type="button" data-module-id="${module.id}">Module Intent</button>
            <div class="module-more-content ${infoOpen ? "open" : ""}">
              <div class="module-one-info">
                <h4>${module.title}</h4>
                <p>${module.purpose}</p>
                <h5>Primary Linux angle</h5>
                <ul>
                  ${module.linuxFocus.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <h5>Outcome</h5>
                <p>${module.outcome}</p>
              </div>
            </div>
          </div>

          ${isOpen ? `<ul class="topic-list">${topicsMarkup}</ul>` : ""}
        </article>
      `;
    })
    .join("");
}

function renderTopicDetail(topicId) {
  const topic = ALL_TOPICS.find((item) => item.id === topicId);
  if (!topic) {
    dom.topicDetail.innerHTML = `
      <div class="detail-empty">
        <h3>Topic not found</h3>
        <p>Select another topic from the roadmap.</p>
      </div>
    `;
    return;
  }

  const relatedTopics = ALL_TOPICS.filter((item) => item.moduleId === topic.moduleId && item.id !== topic.id).slice(0, 3);
  const isCompleted = state.completedTopics.has(topic.id);
  const filePath = `${topic.moduleFolder}/${topic.file}`;

  dom.topicDetail.innerHTML = `
    <article class="topic-card">
      <div class="topic-head">
        <div>
          <p class="kicker">${topic.moduleCode}</p>
          <h3>${topic.name}</h3>
        </div>
        <span class="badge">${topic.moduleTitle}</span>
      </div>

      <div class="detail-tabs">
        <button class="detail-tab ${state.detailTab === "core" ? "active" : ""}" type="button" data-detail-tab="core">Core</button>
        <button class="detail-tab ${state.detailTab === "linux" ? "active" : ""}" type="button" data-detail-tab="linux">Linux</button>
        <button class="detail-tab ${state.detailTab === "practice" ? "active" : ""}" type="button" data-detail-tab="practice">Practice</button>
      </div>

      ${renderDetailSection(state.detailTab, topic, relatedTopics, filePath, isCompleted)}
    </article>
  `;
}

function renderDetailSection(tab, topic, relatedTopics, filePath, isCompleted) {
  if (tab === "linux") {
    return `
      <section class="topic-section">
        <h4>Linux Connection</h4>
        <p>${topic.name} should be studied with actual Linux behavior in mind, not as isolated textbook theory.</p>
        <ul>
          ${topic.linuxFocus.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
      <section class="topic-section">
        <h4>Useful Path</h4>
        <p><code>${filePath}</code></p>
        <p>Use this file as the lesson note anchor when you start filling detailed explanations, diagrams, commands, and examples.</p>
      </section>
    `;
  }

  if (tab === "practice") {
    return `
      <section class="topic-section">
        <h4>Study Flow</h4>
        <ol>
          ${STANDARD_STUDY_FLOW.map((item) => `<li>${item}</li>`).join("")}
        </ol>
      </section>
      <section class="topic-section">
        <h4>Related Lessons</h4>
        <ul>
          ${relatedTopics.map((item) => `<li>${item.name}</li>`).join("")}
        </ul>
        <p>${topic.moduleOutcome}</p>
      </section>
    `;
  }

  return `
    <section class="topic-section">
      <h4>Module Purpose</h4>
      <p>${topic.modulePurpose}</p>
    </section>
    <section class="topic-section">
      <h4>Topic File</h4>
      <p><code>${filePath}</code></p>
      <p>This lesson lives inside <code>${topic.moduleFolder}</code> and follows the same note template as the rest of the OS roadmap.</p>
    </section>
    <section class="topic-section">
      <h4>Completion</h4>
      <p>${isCompleted ? "Marked complete in the OS dashboard." : "Not marked complete yet."}</p>
      <button class="detail-tab active" type="button" data-complete-topic="${topic.id}">
        ${isCompleted ? "Mark Incomplete" : "Mark Complete"}
      </button>
    </section>
  `;
}

function renderNotes() {
  if (!state.stickyNotes.length) {
    dom.notesList.innerHTML = `
      <div class="topic-section">
        <h4>No notes yet</h4>
        <p>Add quick memory cues, Linux commands, or revision reminders here.</p>
      </div>
    `;
    return;
  }

  dom.notesList.innerHTML = state.stickyNotes
    .map(
      (note) => `
        <article class="note-item">
          <p>${note.text}</p>
          <button class="icon-btn" type="button" data-delete-note="${note.id}">Delete</button>
        </article>
      `
    )
    .join("");
}

function updateStats() {
  const completed = state.completedTopics.size;
  const topics = ALL_TOPICS.length;
  const progress = topics ? Math.round((completed / topics) * 100) : 0;

  dom.statModules.textContent = String(OS_MODULES.length);
  dom.statTopics.textContent = String(topics);
  dom.statCompleted.textContent = String(completed);
  dom.statProgress.textContent = `${progress}%`;
}

function toggleCompleted(topicId) {
  if (state.completedTopics.has(topicId)) {
    state.completedTopics.delete(topicId);
  } else {
    state.completedTopics.add(topicId);
  }

  setJSON(STORAGE_KEYS.completed, Array.from(state.completedTopics));
  renderModules();
  if (state.activeTopicId) {
    renderTopicDetail(state.activeTopicId);
  }
  updateStats();
}

function toggleModule(moduleId) {
  if (state.openModules.has(moduleId)) {
    state.openModules.delete(moduleId);
  } else {
    state.openModules.add(moduleId);
  }

  setJSON(STORAGE_KEYS.openModules, Array.from(state.openModules));
  renderModules();
}

function toggleModuleInfo(moduleId) {
  if (state.moduleInfoOpen.has(moduleId)) {
    state.moduleInfoOpen.delete(moduleId);
  } else {
    state.moduleInfoOpen.add(moduleId);
  }

  setJSON(STORAGE_KEYS.moduleInfoOpen, Array.from(state.moduleInfoOpen));
  renderModules();
}

function applyTheme(theme) {
  dom.root.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEYS.theme, theme);
  localStorage.setItem("ekb-root-theme", theme);
}

function closeSidebar() {
  dom.sidebar.classList.remove("open");
  dom.sidebarBackdrop.classList.remove("open");
  dom.mobileNavToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("body-no-scroll");
}

function getJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function setJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

init();
