import type { Expert } from "./types";

/** Curated gallery order — flat, no Core/Practice sectioning. */
export const experts: Expert[] = [
  {
    slug: "edward-tufte",
    name: "Edward Tufte",
    tier: "Core",
    whyInKit: "Data-ink ratio, chartjunk, and graphical integrity for kit specs",
    bio: [
      "Edward Tufte is a statistician and pioneer of data visualization whose books set the vocabulary for clarity and integrity in quantitative graphics.",
      "His ideas—data-ink, chartjunk, and the lie factor—are foundational checks in Dataviz Kit rigor skills and global standards.",
      "Use his principle checklist when cleaning specs; this profile is for context and further reading, not a substitute for the rules.",
    ],
    works: [
      { title: "The Visual Display of Quantitative Information", year: "1983", type: "Book", coverId: 725045 },
      { title: "Envisioning Information", year: "1990", type: "Book", coverId: 7026308 },
      { title: "Visual Explanations", year: "1997", type: "Book", coverId: 725043 },
      { title: "Beautiful Evidence", year: "2006", type: "Book", coverId: 4814439 },
    ],
    furtherReading: [
      { label: "edwardtufte.com", href: "https://www.edwardtufte.com/" },
      { label: "Graphics Press", href: "https://www.edwardtufte.com/tufte/" },
    ],
    principlesPath: "reference/principles-tufte.md",
    principlesSlug: "tufte",
    relatedSkillSlugs: ["tufte-cleanup", "global-standards", "encoding-accuracy", "dataviz-crit"],
    demo: {
      slug: "edward-tufte",
      principleLabel: "Data-ink vs chartjunk",
      caption: "Same quarterly numbers, stripped of gradients, gridlines, and a box so every drop of ink carries data.",
    },
  },
  {
    slug: "ben-shneiderman",
    name: "Ben Shneiderman",
    tier: "Core",
    whyInKit: "Overview first, zoom and filter, then details on demand",
    bio: [
      "Ben Shneiderman coined the information-seeking mantra that structures many exec-dashboard skills in this kit.",
      "His work on interactive visualization and direct manipulation informs how Spec Skills describe drilldown and progressive disclosure.",
    ],
    works: [
      { title: "The Eyes Have It (mantra paper)", year: "1996", type: "Paper" },
      { title: "Designing the User Interface", year: "2016", type: "Book", coverId: 6805696 },
    ],
    furtherReading: [
      { label: "University of Maryland HCIL", href: "https://hcil.umd.edu/" },
    ],
    principlesPath: "reference/principles-shneiderman.md",
    principlesSlug: "shneiderman",
    relatedSkillSlugs: ["daily-exec-pulse", "entity-drilldown", "global-standards"],
    demo: {
      slug: "ben-shneiderman",
      principleLabel: "Overview, zoom & filter, details on demand",
      caption: "Three steps that start wide, narrow to a quarter, and reveal the full record only when asked.",
    },
  },
  {
    slug: "ben-fry",
    name: "Ben Fry",
    tier: "Core",
    whyInKit: "Acquire → filter → mine → represent → refine → interact pipeline",
    bio: [
      "Ben Fry co-created Processing and articulated a seven-stage computational design process for turning data into interactive form.",
      "The Ben Fry pipeline skill maps that process onto dashboard and viz specs so teams do not skip acquire, filter, or trust steps.",
    ],
    works: [
      { title: "Visualizing Data", year: "2008", type: "Book", coverId: 2536409 },
      { title: "Processing (with Casey Reas)", year: "2007", type: "Software / Book", coverId: 1154178 },
    ],
    furtherReading: [
      { label: "benfry.com", href: "https://benfry.com/" },
      { label: "Processing", href: "https://processing.org/" },
    ],
    principlesPath: "reference/principles-ben-fry.md",
    principlesSlug: "ben-fry",
    relatedSkillSlugs: ["ben-fry-pipeline", "global-standards", "metric-provenance"],
    demo: {
      slug: "ben-fry",
      principleLabel: "The seven-stage pipeline",
      caption: "Skipping acquire, parse, and filter builds a slick chart on unvetted rows; the complete path earns its trust.",
    },
  },
  {
    slug: "stephen-few",
    name: "Stephen Few",
    tier: "Practice",
    whyInKit: "Practical dashboard design for business analytics",
    bio: [
      "Stephen Few writes for practitioners building dashboards that support monitoring and analysis without clutter.",
      "His guidance pairs well with executive cadence skills and cognitive-load checks in critique.",
    ],
    works: [
      { title: "Information Dashboard Design", year: "2013", type: "Book", coverId: 389150 },
      { title: "Now You See It", year: "2009", type: "Book", coverId: 8093862 },
      { title: "Show Me the Numbers", year: "2012", type: "Book", coverId: 14573131 },
    ],
    furtherReading: [
      { label: "Perceptual Edge", href: "https://www.perceptualedge.com/" },
    ],
    principlesPath: "reference/principles-stephen-few.md",
    principlesSlug: "stephen-few",
    relatedSkillSlugs: ["weekly-performance-review", "daily-exec-pulse", "dataviz-crit"],
    demo: {
      slug: "stephen-few",
      principleLabel: "Uncluttered KPI tiles",
      caption: "A glossy gauge with traffic lights vs a plain tile with the number, one comparison, and a sparkline.",
    },
  },
  {
    slug: "tamara-munzner",
    name: "Tamara Munzner",
    tier: "Practice",
    whyInKit: "Why–what–how: task, data, and encoding alignment",
    bio: [
      "Tamara Munzner’s nested model separates what you are trying to do (why), what data you have (what), and how you encode it (how).",
      "The Munzner skill in this kit forces that alignment before locking chart types.",
    ],
    works: [
      { title: "Visualization Analysis and Design", year: "2014", type: "Book", coverId: 10495741 },
      { title: "A Nested Model for Visualization Design", year: "2009", type: "Paper" },
    ],
    furtherReading: [
      { label: "cs.ubc.ca/~tmm", href: "https://www.cs.ubc.ca/~tmm/" },
    ],
    principlesPath: "reference/principles-munzner.md",
    principlesSlug: "munzner",
    relatedSkillSlugs: ["munzner-why-what-how", "encoding-accuracy", "dataviz-crit"],
    demo: {
      slug: "tamara-munzner",
      principleLabel: "Match the encoding to the task",
      caption: "For a ranking task, a pie's near-equal slices are guesswork; sorted bars on a shared baseline read instantly.",
    },
  },
  {
    slug: "barbara-minto",
    name: "Barbara Minto",
    tier: "Practice",
    whyInKit: "Pyramid principle for executive narrative and slide structure",
    bio: [
      "Barbara Minto developed the pyramid principle used widely in consulting storytelling: lead with the answer, group supporting arguments, and order logic clearly.",
      "Consulting skills in the kit borrow that structure for decks and one-pagers.",
    ],
    works: [
      { title: "The Pyramid Principle", year: "2009", type: "Book", coverId: 2346771 },
    ],
    furtherReading: [
      { label: "Minto Pyramid overview (Wikipedia)", href: "https://en.wikipedia.org/wiki/Minto_Pyramid_Principle" },
    ],
    principlesPath: "reference/principles-minto.md",
    principlesSlug: "minto",
    relatedSkillSlugs: ["executive-slide-outline", "dashboard-onepager"],
    demo: {
      slug: "barbara-minto",
      principleLabel: "Answer first, then support",
      caption: "Evidence-first buries the recommendation; the pyramid leads with the claim and hangs grouped support beneath it.",
    },
  },
  {
    slug: "cole-nussbaumer-knaflic",
    name: "Cole Nussbaumer Knaflic",
    tier: "Practice",
    whyInKit: "Practical storytelling for business charts and executive slides",
    bio: [
      "Cole Nussbaumer Knaflic’s Storytelling with Data focuses on actionable choices for titles, annotations, and decluttering in business contexts.",
      "Annotation and consulting skills cite her practice-oriented approach alongside rigor checklists.",
    ],
    works: [
      { title: "Storytelling with Data", year: "2015", type: "Book", coverId: 7932707 },
      { title: "Storytelling with Data: Let’s Practice!", year: "2019", type: "Book", coverId: 10327617 },
    ],
    furtherReading: [
      { label: "storytellingwithdata.com", href: "https://www.storytellingwithdata.com/" },
    ],
    principlesPath: "reference/principles-storytelling-with-data.md",
    principlesSlug: "storytelling-with-data",
    relatedSkillSlugs: ["chart-annotation-plan", "executive-slide-outline", "dataviz-crit"],
    demo: {
      slug: "cole-nussbaumer-knaflic",
      principleLabel: "Action title and focus",
      caption: "A neutral title with every bar competing vs an action title, gray context, and one accented bar with an annotation.",
    },
  },
  {
    slug: "nicholas-felton",
    name: "Nicholas Felton",
    tier: "Practice",
    whyInKit: "Editorial density and small multiples as narrative",
    bio: [
      "Nicholas Felton is an information designer known for the Feltron Annual Reports, personal yearbooks that turned a year of mundane data into carefully edited, magazine-quality reports.",
      "He co-created Daytum and later worked on Facebook’s Timeline, carrying editorial data design into mainstream products. His reports hold enormous density without noise through strict grids, a disciplined type scale, and small multiples.",
      "In this kit Felton stands for the craft of the reference or annual artifact—condensing many facts into one coherent, browsable page rather than a live monitoring surface.",
    ],
    works: [
      { title: "Feltron Annual Reports", year: "2005–2014", type: "Reports" },
      { title: "Daytum", year: "2008", type: "Software" },
      { title: "Facebook Timeline", year: "2011", type: "Product" },
    ],
    furtherReading: [
      { label: "feltron.com", href: "http://feltron.com/" },
      { label: "Feltron Annual Reports", href: "http://feltron.com/far14.html" },
    ],
    principlesPath: "reference/principles-nicholas-felton.md",
    principlesSlug: "nicholas-felton",
    relatedSkillSlugs: ["dashboard-onepager", "chart-annotation-plan"],
    demo: {
      slug: "nicholas-felton",
      principleLabel: "Small multiples as narrative",
      caption: "One crowded combined chart vs a tidy strip of consistently-scaled small multiples that lets the year read at a glance.",
    },
  },
  {
    slug: "alberto-cairo",
    name: "Alberto Cairo",
    tier: "Practice",
    whyInKit: "Truthfulness paired with visual form",
    bio: [
      "Alberto Cairo is a journalist and educator who holds the Knight Chair in Visual Journalism at the University of Miami. His books connect the ethics of honest charts with the craft of making them.",
      "The Truthful Art frames five qualities of a good visualization—truthful, functional, beautiful, insightful, enlightening—while How Charts Lie catalogs the everyday ways charts mislead, from truncated axes to missing base rates.",
      "In this kit Cairo is the truthfulness lens: does the visual form let the chart claim only what the data honestly supports?",
    ],
    works: [
      { title: "The Truthful Art", year: "2016", type: "Book", coverId: 8267657 },
      { title: "How Charts Lie", year: "2019", type: "Book", coverId: 9260456 },
      { title: "The Functional Art", year: "2012", type: "Book", coverId: 7269006 },
    ],
    furtherReading: [
      { label: "thefunctionalart.com", href: "http://www.thefunctionalart.com/" },
      { label: "Alberto Cairo (University of Miami)", href: "https://com.miami.edu/profile/alberto-cairo/" },
    ],
    principlesPath: "reference/principles-alberto-cairo.md",
    principlesSlug: "alberto-cairo",
    relatedSkillSlugs: ["dataviz-crit", "encoding-accuracy", "global-standards"],
    demo: {
      slug: "alberto-cairo",
      principleLabel: "Same data, honest form",
      caption: "A truncated axis that inflates a small change vs a zero-baseline chart that shows the real, modest difference.",
    },
  },
  {
    slug: "nancy-duarte",
    name: "Nancy Duarte",
    tier: "Practice",
    whyInKit: "Executive narrative and what-is / what-could-be contrast",
    bio: [
      "Nancy Duarte is a communication expert whose firm has designed presentations for many of the world’s best-known talks and launches, turning presentation craft into a repeatable method.",
      "Resonate describes persuasive talks as a structured movement between “what is” and “what could be,” building tension that resolves in a call to action; slide:ology covers the visual craft of one idea per slide and action titles.",
      "In this kit Duarte governs the emotional and contrast arc of executive storytelling—complementing Minto’s answer-first logic with a narrative that moves an audience to act.",
    ],
    works: [
      { title: "Resonate", year: "2010", type: "Book", coverId: 6667510 },
      { title: "slide:ology", year: "2008", type: "Book", coverId: 2724145 },
      { title: "DataStory", year: "2019", type: "Book", coverId: 9313186 },
    ],
    furtherReading: [
      { label: "duarte.com", href: "https://www.duarte.com/" },
      { label: "Resonate (free online edition)", href: "https://www.duarte.com/resonate/" },
    ],
    principlesPath: "reference/principles-nancy-duarte.md",
    principlesSlug: "nancy-duarte",
    relatedSkillSlugs: ["executive-slide-outline", "dashboard-onepager"],
    demo: {
      slug: "nancy-duarte",
      principleLabel: "What is vs what could be",
      caption: "A flat status dump vs a contrast narrative that pins the current reality against a better future and lands on one ask.",
    },
  },
  {
    slug: "andy-kirk",
    name: "Andy Kirk",
    tier: "Practice",
    whyInKit: "Chart selection derived from the data relationship",
    bio: [
      "Andy Kirk is a data-visualization designer, author, and educator, and the founder of the long-running visualisingdata.com, known for turning chart choice into a disciplined process.",
      "His handbook lays out a four-stage workflow—brief, working with data, editorial thinking, design solution—and separates design into five layers: representation, interactivity, annotation, color, and composition.",
      "In this kit Kirk supplies the “how do I pick the right chart” workflow that sits just upstream of encoding-accuracy checks.",
    ],
    works: [
      { title: "Data Visualisation: A Handbook for Data Driven Design (2nd ed.)", year: "2019", type: "Book", coverId: 8949591 },
      { title: "Data Visualisation: A Handbook for Data Driven Design (1st ed.)", year: "2016", type: "Book", coverId: 8264093 },
    ],
    furtherReading: [
      { label: "visualisingdata.com", href: "https://www.visualisingdata.com/" },
      { label: "Book resources", href: "https://book.visualisingdata.com/" },
    ],
    principlesPath: "reference/principles-andy-kirk.md",
    principlesSlug: "andy-kirk",
    relatedSkillSlugs: ["encoding-accuracy", "munzner-why-what-how", "dataviz-crit"],
    demo: {
      slug: "andy-kirk",
      principleLabel: "Match the chart to the relationship",
      caption: "A pie forced onto time-series data vs a line chart chosen from the relationship being shown—change over time.",
    },
  },
];

export function getExpert(slug: string): Expert | undefined {
  return experts.find((e) => e.slug === slug);
}

export function expertHasDemo(expert: Expert): boolean {
  return Boolean(expert.demo);
}
