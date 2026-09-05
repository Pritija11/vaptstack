export type ResearchArticle = {
  slug: string;
  category: string;
  number: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export const researchArticles: ResearchArticle[] = [
  {
    slug: "attack-surfaces",
    category: "Offensive Security",
    number: "01",
    title: "Understanding Modern Attack Surfaces",
    excerpt:
      "Exploring how applications, APIs, cloud environments, and connected services create new security considerations.",
    date: "September 2026",
    readTime: "6 min read",
  },
  {
    slug: "application-security",
    category: "Application Security",
    number: "02",
    title: "Security Beyond Automated Scanning",
    excerpt:
      "Investigating how manual testing, business logic analysis, and contextual understanding reveal deeper weaknesses.",
    date: "September 2026",
    readTime: "7 min read",
  },
  {
    slug: "emerging-security",
    category: "Emerging Technology",
    number: "03",
    title: "Security for What Comes Next",
    excerpt:
      "Researching emerging technologies and how new architectures can change the cybersecurity landscape.",
    date: "September 2026",
    readTime: "5 min read",
  },
];

export function getResearchArticle(slug: string) {
  return researchArticles.find((article) => article.slug === slug);
}