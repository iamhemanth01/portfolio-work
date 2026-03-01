/**
 * CONTENT GUIDE — Replace all placeholder data below with your own.
 *
 * 1. person     → Your name, headline, email, social links, availability
 * 2. highlights → 6 cards: outcome (metric), context (short), impactChip (e.g. "DX", "Scale")
 * 3. themes     → 4–5 pillars; icon must be one of: layers, zap, accessibility, code, users
 * 4. experience → Timeline items: company, role, period, summary, details[], current?
 * 5. skills     → core[], tools[], leadership[] arrays
 * 6. projects   → slug (URL-safe), title, oneLiner, year, role, tags[], featured?, impactMetric?, problem/approach/result, metrics[], screenshots[], learnings[], links[]
 * 7. notes      → slug, title, excerpt, date, readTime?
 * 8. testimonials → quote, author, role?, company?
 * 9. aboutContent → title, subtitle, sections[] with title + content
 * 10. resumeConfig → downloadUrl (e.g. "/resume.pdf"), label, lastUpdated
 */

export interface Person {
  name: string;
  headline: string;
  location?: string;
  email: string;
  socials: { label: string; url: string; icon?: string }[];
  availability?: string;
}

export interface Highlight {
  outcome: string;
  context: string;
  impactChip: string;
}

export interface Theme {
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  details: string[];
  current?: boolean;
  badge?: string;
  companyTenure?: string;
}

export interface SkillsGroup {
  label: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  year: string;
  role: string;
  tags: string[];
  featured: boolean;
  impactMetric?: string;
  problem?: string;
  approach?: string;
  result?: string;
  metrics?: string[];
  screenshots?: { url: string; alt: string }[];
  learnings?: string[];
  links?: { label: string; url: string }[];
}

export interface Note {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  date_display?: string;
  relationship?: string;
  source?: string;
}

export interface EducationItem {
  institution: string;
  degree?: string;
  field?: string;
  period: string;
  grade?: string;
  activities?: string;
  subjects?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  url: string;
  brief: string;
  tags?: string[];
  publishedAt?: string;
  featured?: boolean;
  type?: "Whitepaper" | "Blog";
}

export const person: Person = {
  name: "Hemanth Gowda A R",
  headline: "Solutions, Presales & Consulting | Digitizing Supply Chain & Logistics | Optimization | Industrial Engineer | 0 to 1",
  location: "Bengaluru, Karnataka, India",
  email: "iamhemanth01@gmail.com",
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com/in/hemanthgowda" },
    { label: "GitHub", url: "https://github.com/hemanthgowda" },
  ],
  availability: "Reach out at iamhemanth01@gmail.com",
};

export const contactConfig = {
  email: "iamhemanth01@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/iamhemanthgowda",
  phoneNumber: "+91 91480 20162",
  topmateUrl: "https://topmate.io/hemanth_gowda_a_r/",
  emailHelperText: "Best for detailed context and attachments.",
  openToChips: [
    "Presales & Solutioning",
    "Supply Chain Strategy",
    "Network / Last-mile Optimization",
    "Operating Model Design",
    "Simulation & Scenario Analysis",
    "Workshops / Advisory",
  ],
  responseTimeText: "Typical response time: 24–48 hours • Timezone: IST",
};

export const highlights: Highlight[] = [
  { outcome: "70% → 90% and 95% → 99% inventory accuracy", context: "FMCG and Staples at Jumbotail", impactChip: "Accuracy" },
  { outcome: "~43.75% reduction in planning time (4h → 2h 15m)", context: "Last-mile & line-haul at Jumbotail", impactChip: "Efficiency" },
  { outcome: "Payment issues 6% → 3%", context: "Bill-to-bill credit systems", impactChip: "Quality" },
  { outcome: "10 new fulfillment centers and hubs", context: "Launch and scale with repeatable processes", impactChip: "Scale" },
  { outcome: "30–59 min SLAs (Q-Commerce)", context: "On-demand delivery solutions across MEA", impactChip: "Speed" },
  { outcome: "Network models for US food enterprise", context: "Kraft Heinz network and last-mile strategy", impactChip: "Strategy" },
];

export const themes: Theme[] = [
  { title: "Solution Consulting & Pre-Sales", description: "Enterprise transformation roadmaps, ROI cases, and stakeholder alignment.", icon: "layers" },
  { title: "Simulation, Modelling & Scenario Stress-Testing", description: "As-Is vs To-Be analysis to evaluate trade-offs and support decisions.", icon: "zap" },
  { title: "Network Strategy, Inventory & Fulfillment", description: "Optimization-led design for cost, service, and growth.", icon: "code" },
  { title: "Transportation Economics", description: "Same-day, next-day, and on-demand delivery design and economics.", icon: "accessibility" },
  { title: "Capacity Planning & Operating Model Design", description: "Scalable operating frameworks aligned to business objectives.", icon: "users" },
];

export const experience: ExperienceItem[] = [
  {
    id: "1",
    company: "Locus",
    role: "Lead – Solution Consulting",
    period: "Jan 2026 – Present",
    location: "Bengaluru — On-site",
    companyTenure: "2 yrs 8 mos",
    badge: "Fast track promoted",
    summary: "Lead enterprise solution consulting and pre-sales engagements focused on operational diagnostics, optimization roadmaps, and measurable ROI.",
    details: [
      "Partner with senior stakeholders to align cost, service, and growth objectives into scalable operating models.",
    ],
    current: true,
  },
  {
    id: "2",
    company: "Locus",
    role: "Manager – Solution Consulting",
    period: "Aug 2023 – Dec 2025",
    location: "Bengaluru, Karnataka, India — Hybrid",
    summary: "Led solution design and implementation across last-mile, Q-Commerce, and sales-beat optimization for enterprise clients in MEA and beyond.",
    details: [
      "Used simulation to analyze As-Is vs To-Be workflows, identifying bottlenecks and improving efficiency across tiers.",
      "Designed and implemented last-mile solutions for enterprise clients across Retail, FMCG, 3PL, and CEP (e.g., Careem, GAC, Pan Homes, Al Ain Farms, Hattan Group).",
      "Designed Q-Commerce on-demand delivery solutions across MEA with 30–59 minute SLA targets.",
      "Led sales-beat optimization strategies across MEA, improving route efficiency and field productivity.",
      "Led cross-functional teams (engineering, product, technical managers) to deploy Dynamic and Territory Optimization solutions.",
      "Managed end-to-end customer success from RFI/RFP/RFQ through solution design and implementation.",
    ],
  },
  {
    id: "3",
    company: "Genpact",
    role: "Supply Chain Network Design & Optimization",
    period: "Mar 2023 – Jul 2023",
    location: "Remote — Bengaluru",
    companyTenure: "1 yr 7 mos",
    summary: "Built comprehensive supply chain models for Kraft Heinz (US), optimizing network efficiency and last-mile strategy.",
    details: [
      "Applied analytics and strategic planning to deliver cost savings and stronger service outcomes.",
    ],
  },
  {
    id: "4",
    company: "Genpact",
    role: "Business Analyst – SC Planning",
    period: "Jan 2022 – Feb 2023",
    location: "Remote — Bengaluru",
    summary: "Managed inventory performance, automated reporting, and coordination across repack, logistics, and suppliers.",
    details: [
      "Managed 100+ SKUs across 11 suppliers, improving inventory performance and supplier reliability.",
      "Automated CFR and RDD reporting to improve visibility and decision-making.",
      "Improved coordination between repack, logistics, and suppliers to strengthen on-time delivery.",
    ],
  },
  {
    id: "5",
    company: "Jumbotail",
    role: "Supply Chain Associate – Planning & Design",
    period: "Feb 2021 – Dec 2021",
    location: "Hybrid — Bengaluru",
    companyTenure: "1 yr 10 mos",
    summary: "Improved FC operations, inventory accuracy, payment processes, and scaled 10 new fulfillment centers and hubs.",
    details: [
      "Improved fulfillment center operations and last-mile logistics through process and planning optimization.",
      "Increased inventory accuracy from 70%→90% (FMCG) and 95%→99% (Staples).",
      "Reduced payment issues from 6%→3% via bill-to-bill credit systems.",
      "Built processes to launch and scale 10 new fulfillment centers and hubs.",
      "Improved customer delivery experience by resolving recurring fulfillment issues.",
    ],
  },
  {
    id: "6",
    company: "Jumbotail",
    role: "Supply Chain Executive",
    period: "Sep 2020 – Jan 2021",
    location: "Hybrid — Bengaluru",
    summary: "Reduced planning time by ~43.75%, improved CX and resource planning, and eliminated field executive complaints.",
    details: [
      "Reduced last-mile and line-haul planning time by ~43.75% (4h→2h15m), extending order cut-off windows.",
      "Analyzed customer feedback to identify systemic issues and drive continuous CX improvement.",
      "Used predictive analytics for resource planning and allocation to improve productivity and cost efficiency.",
      "Eliminated field executive complaints (100% reduction) by optimizing route planning.",
    ],
  },
  {
    id: "7",
    company: "Jumbotail",
    role: "Supply Chain Executive (Internship)",
    period: "Mar 2020 – Aug 2020",
    location: "Bengaluru",
    summary: "Built data-driven last-mile plans, dispatch frameworks, and streamlined inbound operations.",
    details: [
      "Built data-driven last-mile plans for urban centers to improve cost and efficiency.",
      "Designed dispatch planning frameworks to improve fulfillment center throughput.",
      "Streamlined inbound operations using standardization and automation.",
    ],
  },
  {
    id: "8",
    company: "Doodhwala",
    role: "Supply Chain Intern",
    period: "Jun 2019",
    location: "Bengaluru",
    companyTenure: "1 mo",
    summary: "Analyzed customer segments and the competitive landscape to inform market positioning and differentiation.",
    details: [],
  },
];

export const skills: { core: string[]; tools: string[]; leadership: string[] } = {
  core: ["Supply Chain Strategy", "Network Design", "Optimization", "Simulation", "Modelling", "Capacity Planning", "Operating Model Design", "Process Improvement", "Stakeholder Management", "Operations Research", "Last-Mile", "Fulfillment", "Inventory", "Transportation Economics", "Q-Commerce", "CEP", "Retail / FMCG / 3PL"],
  tools: ["Microsoft Excel", "JDA", "BI/Dashboards", "AI Prototyping (Lovable, Cursor)", "Figma", "API (Application Programme Interface)", "TMS (Transportation Management System)", "WMS (Warehouse Management System)", "Hubspot"],
  leadership: ["Pre-sales & solution consulting", "Cross-functional alignment", "Stakeholder management", "End-to-end customer success"],
};

export const projects: Project[] = [
  {
    slug: "locus-solution-consulting",
    title: "Enterprise Solution Consulting & Pre-Sales",
    oneLiner: "Lead solution consulting and pre-sales at Locus; operational diagnostics, optimization roadmaps, and measurable ROI for enterprises.",
    year: "2023 – Present",
    role: "Lead / Manager – Solution Consulting",
    tags: ["Pre-sales", "Solution Consulting", "Last-mile", "Q-Commerce", "Optimization"],
    featured: true,
    impactMetric: "Fast-track promoted",
    problem: "Enterprises needed structured analyses and optimization-led transformation to align cost, service, and growth.",
    approach: "You lead diagnostics, As-Is vs To-Be simulation, last-mile and Q-Commerce solution design, and cross-functional deployment with engineering and product.",
    result: "Scalable operating models and measurable ROI for Retail, FMCG, 3PL, CEP across MEA (Careem, GAC, Pan Homes, Al Ain Farms, Hattan Group).",
    metrics: ["30–59 min SLA Q-Commerce solutions", "Sales-beat optimization across MEA", "RFI/RFP/RFQ to implementation"],
    learnings: ["Stakeholder alignment and repeatable solution design accelerate adoption.", "Simulation and scenario stress-testing build confidence in recommendations."],
    links: [{ label: "Locus", url: "https://locus.sh" }],
  },
  {
    slug: "kraft-heinz-network-design",
    title: "Supply Chain Network Design – Kraft Heinz (US)",
    oneLiner: "Built comprehensive supply chain models for a large US food enterprise to optimize network efficiency and last-mile strategy.",
    year: "2023",
    role: "Supply Chain Network Design & Optimization",
    tags: ["Network Design", "Optimization", "Last-mile", "Analytics"],
    featured: true,
    impactMetric: "Enterprise scale",
    problem: "Network efficiency and last-mile strategy needed data-driven modelling and strategic planning.",
    approach: "You built comprehensive supply chain models and applied analytics to evaluate trade-offs and stress-test scenarios.",
    result: "Cost savings and stronger service outcomes through optimization-led recommendations.",
    metrics: ["Network efficiency", "Last-mile strategy", "Cost and service outcomes"],
    learnings: ["Rigorous modelling and clear business cases enable executive decision-making."],
    links: [],
  },
  {
    slug: "jumbotail-fc-planning",
    title: "Fulfillment Center Operations & Planning",
    oneLiner: "Improved FC operations, inventory accuracy (70%→90%, 95%→99%), payment issues (6%→3%), and scaled 10 new fulfillment centers and hubs.",
    year: "2020 – 2021",
    role: "Supply Chain Associate / Executive",
    tags: ["Fulfillment", "Inventory", "Planning", "Process Improvement"],
    featured: true,
    impactMetric: "10 new FCs",
    problem: "Fulfillment and last-mile needed better accuracy, planning speed, and repeatable scale.",
    approach: "You improved FC and last-mile operations, implemented bill-to-bill credit systems, and built processes to launch and scale new hubs.",
    result: "Higher inventory accuracy, fewer payment issues, ~43.75% planning time reduction, and improved customer delivery experience.",
    metrics: ["70%→90% and 95%→99% inventory accuracy", "6%→3% payment issues", "4h→2h15m planning time", "10 new FCs/hubs"],
    learnings: ["Process standardization and automation enable repeatable scale.", "Data-driven planning and CX feedback close the loop on improvements."],
    links: [],
  },
  {
    slug: "genpact-sc-planning",
    title: "SC Planning & Supplier Performance",
    oneLiner: "Managed 100+ SKUs across 11 suppliers; automated CFR and RDD reporting; improved coordination for on-time delivery.",
    year: "2022 – 2023",
    role: "Business Analyst – SC Planning",
    tags: ["Planning", "Inventory", "Reporting", "Supplier Management"],
    featured: false,
    impactMetric: "100+ SKUs",
    problem: "Inventory performance, visibility, and coordination across repack, logistics, and suppliers needed improvement.",
    approach: "You automated reporting and improved coordination between repack, logistics, and suppliers.",
    result: "Stronger inventory performance, supplier reliability, and on-time delivery.",
    metrics: ["100+ SKUs, 11 suppliers", "Automated CFR/RDD reporting", "On-time delivery improvement"],
    learnings: ["Visibility and cross-functional coordination are foundational to planning effectiveness."],
    links: [],
  },
  {
    slug: "jumbotail-dispatch-planning",
    title: "Dispatch & Last-Mile Planning",
    oneLiner: "Data-driven last-mile plans, dispatch frameworks, and inbound standardization; 100% reduction in field executive complaints.",
    year: "2020",
    role: "Supply Chain Executive (Internship)",
    tags: ["Last-mile", "Dispatch", "Planning", "Resource Allocation"],
    featured: false,
    impactMetric: "100% complaint reduction",
    problem: "Last-mile and dispatch planning needed better cost, throughput, and field productivity.",
    approach: "You built data-driven last-mile plans, designed dispatch frameworks, and streamlined inbound operations with standardization and automation.",
    result: "Improved FC throughput, extended cut-off windows, and eliminated field executive complaints.",
    metrics: ["Urban last-mile plans", "Dispatch frameworks", "100% field complaint reduction"],
    learnings: ["Predictive analytics and route optimization directly improve productivity and CX."],
    links: [],
  },
];

export const notes: Note[] = [
  {
    slug: "supply-chain-optimization-basics",
    title: "Supply chain optimization basics",
    excerpt: "How you translate ambiguous business problems into structured analyses and optimization-led transformation roadmaps.",
    date: "2024-06-15",
    readTime: "5 min",
  },
  {
    slug: "as-is-to-be-simulation",
    title: "As-Is vs To-Be simulation in operations",
    excerpt: "Using modelling and scenario stress-testing to evaluate trade-offs and support executive decision-making.",
    date: "2023-11-02",
    readTime: "8 min",
  },
];

export const blogsAuthored: BlogPost[] = [
  {
    id: "data-sanity-handbook",
    title: "Data Sanity Handbook",
    url: "https://locus.sh/whitepaper/data-sanity-handbook/",
    brief:
      "Modern logistics demands more than smarter routes: it demands clean, consistent data that reflects what happens on the street. This handbook explains how \"data sanity\" grounds planning and execution in reality so ETAs hold up, billing reconciles cleanly, and costs trend down.",
    tags: ["Data", "Logistics", "Execution"],
    featured: true,
    type: "Whitepaper",
  },
  {
    id: "sensitivity-analysis-future-proof",
    title: "Sensitivity Analysis in Supply Chains: Future-Proofing Logistics Networks Against Disruption",
    url: "https://locus.sh/whitepaper/sensitivity-analysis-future-proof-logistics-networks/",
    brief:
      "This whitepaper explains how simulation-led sensitivity analysis helps logistics teams stress-test plans before peak events, expansion, or disruption, without implementing every change on the ground.",
    tags: ["Supply Chain", "Network Design", "Risk"],
    type: "Whitepaper",
  },
  {
    id: "static-zone-based-dynamic-routing",
    title: "Is Static Routing Still Enough in 2026? Static vs Zone-Based vs Dynamic Routing for Modern Logistics",
    url: "https://blog.locus.sh/static-zone-based-dynamic-routing/",
    brief:
      "Is it time to move from static routing to zone-based or dynamic optimization? And which approach truly suits your business?",
    tags: ["Dynamic Routing", "Static Routing", "Zone-based Routing"],
    type: "Blog",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "anmol-bhat",
    author: "Anmol Bhat",
    role: "Product at Amazon | eComm Tech",
    date_display: "February 17, 2026",
    relationship: "Anmol worked with Hemanth on the same team",
    source: "LinkedIn",
    quote:
      "Hemanth brings strong product depth, takes ownership end-to-end, and consistently strengthens client confidence through disciplined delivery.\n\nHe operates with a clear customer-first mindset, starting from business outcomes and working backward into structured, executable PRDs.",
  },
  {
    id: "arshaad-mohamed",
    author: "Arshaad Mohamed",
    role:
      "Solutioning For Last Mile Optimization | Locus.sh | Bridging World Of Information Technology With The Complexities Of Human Cognition",
    date_display: "February 5, 2026",
    relationship: "Arshaad managed Hemanth directly",
    source: "LinkedIn",
    quote:
      "I highly recommend Hemanth, who has been an exceptional part of our MEA presales team. In a fast-paced environment, he has proven to be a dependable resource, consistently supporting our region and the organization as a whole. Hemanth takes immense pride in his work, evolving from a hardworking resource to a smart working professional who excels in both internal and external conversations. He is a go-to person for support and has greatly contributed to our team's success.",
  },
  {
    id: "jc-gowda",
    author: "Jayachandre (JC) Gowda",
    role: "JC, not yet a VC",
    date_display: "April 15, 2023",
    relationship: "Jayachandre (JC) managed Hemanth directly",
    source: "LinkedIn",
    quote:
      "I highly recommend Hemant based on his outstanding performance in NCC. He represented our directorate in Thal Sainik Camp. He demonstrated exceptional skills in sports and leadership, by becoming Senior Under Officer. Hemant's strong planning and execution abilities, along with his positive attitude and work ethic, make him a valuable asset to any organization. He has proven himself as a reliable and capable professional, and I am confident he will continue to excel in his future endeavors.",
  },
  {
    id: "sudhanshu-pandey",
    author: "Sudhanshu Pandey",
    role:
      "Manager at Genpact ll Six Sigma Green Belt ll MBA Operations ll Rashtrapati Awardee",
    date_display: "February 13, 2023",
    relationship: "Sudhanshu worked with Hemanth on the same team",
    source: "LinkedIn",
    quote:
      "Hemanth is a great professional to work with. He is very creative and organised. Always open to discuss ideas and suggestions. He is always committed and focused on delivering on time.",
  },
  {
    id: "sudhanva-naik",
    author: "Sudhanva Naik",
    role: "Technical Writer at Blue Yonder",
    date_display: "January 16, 2023",
    relationship: "Sudhanva reported to Hemanth directly",
    source: "LinkedIn",
    quote:
      "Hemanth has been an excellent leader and guide for me during my NCC days. As the Senior Under Officer of our battalion, he has carried out all his duties with utmost dedication and sincerity. He is a hard working, disciplined, and resolute individual with a positive mindset. His planning and man-management skills are exemplary.\nWorking with him as his junior has always been fun and insightful. Outside of NCC, he has been a great friend for over five years now.",
  },
  {
    id: "samyak-darshan-jain",
    author: "Samyak Darshan Jain",
    role: "R&D Software Engineering Specialist 🧿",
    date_display: "December 23, 2022",
    relationship: "Samyak Darshan worked with Hemanth on the same team",
    source: "LinkedIn",
    quote:
      "I know Hemanth from NCC days, during my time at BMSCE. He was part of the Thal Sainik Camp winning group from Karnataka and Goa directorate, which is one of the most competitive camps in NCC. \n\nHe is one of the hardworking individuals I have seen during my UG days. He is amazing at whatever he does and is very patient and solution oriented. \n\nHe also has very good leadership qualities and he make sures that every person involved in certain task are in the same page and are focused towards the goal. It was a pleasure to work with him.",
  },
  {
    id: "rohith-raj-b",
    author: "Rohith Raj B",
    role:
      "Senior Data Analyst @ Deloitte India | Uber (Ext) | Python | Data Analytics and Business Intelligence |",
    date_display: "December 4, 2022",
    relationship: "Rohith worked with Hemanth on the same team",
    source: "LinkedIn",
    quote:
      "I know Hemanth for more than 5 years. As being his NCC Junior, Engineering batch mate and Room mate, I would like to comment on his some of his qualities :-\n1. He is very dedicated, hard working in the tasks he was assigned to during NCC days. And his way of training & guiding the juniors is really appreciable.\n2. During engineering times he used to manage his Studies, NCC senior works, NSS & Sports is a really commendable way, So I really appreciate his time & work management skill.\n3. As his roommate during the pandemic & WFH times I got to know more about him. His learning mindset, finishing tasks on time, knowledge sharing skill to the juniors/co-workers in a patient way is really appreciable.\n4. Apart from all these I really love his kind and helping nature to others in real life during the difficult times.",
  },
  {
    id: "tejaswin-shashikanth",
    author: "Tejaswin Shashikanth",
    role:
      "Data Analyst | Supply Chain Specialist | Business Analyst | Actively Seeking Opportunities in Data Analytics, Supply Chain, Fintech",
    date_display: "December 2, 2022",
    relationship: "Tejaswin worked with Hemanth but on different teams",
    source: "LinkedIn",
    quote:
      "Hemanth is an excellent leader and I have witnessed his leadership abilities during our undergrad days. His NCC days were inspiring. During few courses where Hemanth was team leader, his communication skills were outstanding which made him a very efficient leader. He listens to all the team members and takes their opinions into consideration.",
  },
];

/** Executive summary block for the home page (above Highlights). */
export const heroAboutSummary = {
  heading: "About",
  paragraphs: [
    "Industrial Engineering & Management graduate from B.M.S. College of Engineering with 6+ years of experience solving complex supply chain and operating model challenges through analytics-driven strategy.",
    "I currently lead Pre-Sales at Locus, where I work with enterprises to diagnose operational inefficiencies, design optimization-led transformation roadmaps, and quantify business impact. My work focuses on translating ambiguous business problems into structured analyses, using modelling and simulation to evaluate trade-offs, stress-test scenarios, and support executive decision-making.",
    "I've led solution design across network strategy, inventory and fulfillment models, transportation economics (same-day / next-day / on-demand), and capacity planning. I regularly partner with senior stakeholders to build data-backed business cases and scalable operating frameworks that align cost, service, and growth objectives.",
    "I leverage advanced analytics tools and AI-assisted prototyping using Lovable & Cursor to accelerate insight generation and solution validation, enabling faster experimentation and sharper strategic recommendations.",
    "I'm particularly interested in strategy that sit at the intersection of operations, analytics, and transformation where rigorous problem solving drives measurable business outcomes.",
  ],
  email: "iamhemanth01@gmail.com",
  emailLinePrefix: "Reach out at ",
};

export const aboutContent = {
  title: "About",
  subtitle: "You are an Industrial Engineering & Management graduate with 6+ years of experience solving complex supply chain and operating model challenges using analytics-driven strategy. You lead pre-sales and solution consulting for enterprises, translating ambiguous problems into structured analyses and optimization-led transformation roadmaps.",
  sections: [
    {
      title: "Background",
      content: "You are an Industrial Engineering & Management graduate from B.M.S. College of Engineering with 6+ years of experience solving complex supply chain and operating model challenges through analytics-driven strategy.",
    },
    {
      title: "Current focus",
      content: "You currently lead Pre-Sales at Locus, where you diagnose operational inefficiencies, design optimization-led transformation roadmaps, and quantify business impact. You translate ambiguous business problems into structured analyses, using modelling and simulation to evaluate trade-offs, stress-test scenarios, and support executive decision-making.",
    },
    {
      title: "Expertise & interests",
      content: "You have led solution design across network strategy, inventory and fulfillment models, transportation economics (same-day / next-day / on-demand), and capacity planning. You partner with senior stakeholders to build data-backed business cases and scalable operating frameworks that align cost, service, and growth objectives. You leverage advanced analytics tools and AI-assisted prototyping (Lovable & Cursor) to accelerate insight generation and solution validation. You are especially interested in strategy at the intersection of operations, analytics, and transformation—where rigorous problem solving drives measurable business outcomes.",
    },
  ],
};

export const education: EducationItem[] = [
  {
    institution: "B.M.S. College of Engineering",
    degree: "B.E.",
    field: "Industrial Engineering and Management (Supply Chain Management)",
    period: "2016 – 2020",
    grade: "First Class with Distinction",
    activities: "NCC, Sports, NSS, Kannada Sangha (Chirantana)",
    subjects: "Operations Research, Supply Chain & Logistics Management, Statistics, DBMS",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya (JNV)",
    degree: "12th – Science & Mathematics",
    period: "Jun 2015 – Apr 2016",
    grade: "First class with distinction",
    activities: "School Captain, Organized Silver Jubilee. Subjects: PCMB.",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya (JNV)",
    degree: "6th – 10th",
    period: "Apr 2009 – Apr 2014",
    grade: "9.4 CGPA",
    activities: "Mathematics quiz, Mathematics Olympiad, Scouts & Guides, Sports meets",
  },
];

export const resumeConfig = {
  downloadUrl: "/resume.pdf",
  label: "Download PDF",
  lastUpdated: "March 2025",
};
