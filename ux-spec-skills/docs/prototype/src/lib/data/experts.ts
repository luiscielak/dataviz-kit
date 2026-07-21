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
      { title: "The Visual Display of Quantitative Information", year: "1983", type: "Book" },
      { title: "Envisioning Information", year: "1990", type: "Book" },
      { title: "Visual Explanations", year: "1997", type: "Book" },
      { title: "Beautiful Evidence", year: "2006", type: "Book" },
    ],
    furtherReading: [
      { label: "edwardtufte.com", href: "https://www.edwardtufte.com/" },
      { label: "Graphics Press", href: "https://www.edwardtufte.com/tufte/" },
    ],
    principlesPath: "reference/principles-tufte.md",
    principlesSlug: "tufte",
    relatedSkillSlugs: ["tufte-cleanup", "global-standards", "encoding-accuracy", "dataviz-critique"],
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
      { title: "Designing the User Interface", year: "2016", type: "Book" },
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
      { title: "Visualizing Data", year: "2008", type: "Book" },
      { title: "Processing (with Casey Reas)", year: "2007", type: "Software / Book" },
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
      { title: "Information Dashboard Design", year: "2013", type: "Book" },
      { title: "Now You See It", year: "2009", type: "Book" },
      { title: "Show Me the Numbers", year: "2012", type: "Book" },
    ],
    furtherReading: [
      { label: "Perceptual Edge", href: "https://www.perceptualedge.com/" },
    ],
    principlesPath: "reference/principles-stephen-few.md",
    principlesSlug: "stephen-few",
    relatedSkillSlugs: ["weekly-performance-review", "daily-exec-pulse", "dataviz-critique"],
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
      { title: "Visualization Analysis and Design", year: "2014", type: "Book" },
      { title: "A Nested Model for Visualization Design", year: "2009", type: "Paper" },
    ],
    furtherReading: [
      { label: "cs.ubc.ca/~tmm", href: "https://www.cs.ubc.ca/~tmm/" },
    ],
    principlesPath: "reference/principles-munzner.md",
    principlesSlug: "munzner",
    relatedSkillSlugs: ["munzner-why-what-how", "encoding-accuracy", "dataviz-critique"],
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
      { title: "The Pyramid Principle", year: "2009", type: "Book" },
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
      { title: "Storytelling with Data", year: "2015", type: "Book" },
      { title: "Storytelling with Data: Let’s Practice!", year: "2019", type: "Book" },
    ],
    furtherReading: [
      { label: "storytellingwithdata.com", href: "https://www.storytellingwithdata.com/" },
    ],
    principlesPath: "reference/principles-storytelling-with-data.md",
    principlesSlug: "storytelling-with-data",
    relatedSkillSlugs: ["chart-annotation-plan", "executive-slide-outline", "dataviz-critique"],
    demo: {
      slug: "cole-nussbaumer-knaflic",
      principleLabel: "Action title and focus",
      caption: "A neutral title with every bar competing vs an action title, gray context, and one accented bar with an annotation.",
    },
  },
];

export function getExpert(slug: string): Expert | undefined {
  return experts.find((e) => e.slug === slug);
}

export function expertHasDemo(expert: Expert): boolean {
  return Boolean(expert.demo);
}
