import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  researchArticles,
  getResearchArticle,
} from "@/data/research";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return researchArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResearchArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | VaptStack`,
    description: article.excerpt,

    alternates: {
      canonical: `https://vaptstack.com/research/${article.slug}`,
    },

    openGraph: {
      title: `${article.title} | VaptStack`,
      description: article.excerpt,
      url: `https://vaptstack.com/research/${article.slug}`,
      siteName: "VaptStack",
      type: "article",
    },
  };
}

export default async function ResearchArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;
  const article = getResearchArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Header */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.18em]">
            <span className="text-[#FF2D8D]">
              Research / {article.category}
            </span>

            <span className="text-[#555555]">•</span>

            <span className="text-[#555555]">
              {article.number}
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            {article.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            {article.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#555555]">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="bg-[#121212]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
          {article.slug === "attack-surfaces" && (
            <div className="space-y-12">
              <ArticleSection
                number="01"
                title="Why attack surfaces matter"
              >
                <p>
                  Modern digital systems are made up of applications, APIs,
                  cloud services, identities, databases, and external
                  integrations. Each component can introduce a point of
                  exposure that needs to be understood.
                </p>

                <p>
                  An attack surface is therefore more than a list of public
                  endpoints. It represents the collection of technologies,
                  connections, and services that could potentially be targeted.
                </p>
              </ArticleSection>

              <ArticleSection
                number="02"
                title="Applications are increasingly connected"
              >
                <p>
                  Applications rarely operate independently. They communicate
                  with APIs, depend on third-party services, and interact with
                  infrastructure and identity systems.
                </p>

                <p>
                  A weakness in one component can sometimes create opportunities
                  to reach another, making it important to understand the
                  relationships between systems.
                </p>
              </ArticleSection>

              <ArticleSection
                number="03"
                title="Mapping before testing"
              >
                <p>
                  Effective security testing starts with understanding what
                  exists. Asset discovery and attack-surface mapping can help
                  establish what should be tested before deeper technical
                  assessment begins.
                </p>
              </ArticleSection>
            </div>
          )}

          {article.slug === "application-security" && (
            <div className="space-y-12">
              <ArticleSection
                number="01"
                title="Why automated scanning is not enough"
              >
                <p>
                  Automated scanners are useful for identifying many common
                  security weaknesses, but they cannot understand every
                  application's business rules, workflows, or context.
                </p>

                <p>
                  Some important vulnerabilities only become visible when the
                  application is examined from the perspective of how users and
                  business processes actually interact with it.
                </p>
              </ArticleSection>

              <ArticleSection
                number="02"
                title="Business logic matters"
              >
                <p>
                  Applications can behave securely at the technical level while
                  still containing flaws in business logic. Unexpected workflow
                  combinations, authorization assumptions, or state changes can
                  create security risks.
                </p>
              </ArticleSection>

              <ArticleSection
                number="03"
                title="Testing in context"
              >
                <p>
                  Strong application security combines automated tools with
                  manual analysis, contextual understanding, and structured
                  security testing.
                </p>

                <p>
                  The objective is not simply to produce a list of findings,
                  but to understand what those findings mean for the system.
                </p>
              </ArticleSection>
            </div>
          )}

          {article.slug === "emerging-security" && (
            <div className="space-y-12">
              <ArticleSection
                number="01"
                title="Security keeps changing"
              >
                <p>
                  New technologies introduce new capabilities as well as new
                  security questions. Cloud-native architectures, connected
                  services, automation, and emerging software patterns can
                  change how systems are attacked and defended.
                </p>
              </ArticleSection>

              <ArticleSection
                number="02"
                title="Research before adoption"
              >
                <p>
                  Emerging technologies should be evaluated carefully before
                  becoming part of critical systems. Understanding their
                  architecture, assumptions, and possible failure modes helps
                  security teams prepare for new risks.
                </p>
              </ArticleSection>

              <ArticleSection
                number="03"
                title="Building for what comes next"
              >
                <p>
                  Security engineering needs to evolve alongside technology.
                  Research can help identify new attack patterns, understand new
                  architectures, and develop better ways to test and protect
                  them.
                </p>
              </ArticleSection>
            </div>
          )}

          {/* CTA */}
          <div className="mt-20 border border-[#FF2D8D]/20 bg-[#080808] p-8 lg:p-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Continue the conversation
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
              Have a security problem worth exploring?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#929292]">
              Talk with VaptStack about security testing, application security,
              attack surfaces, or emerging cybersecurity challenges.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5]"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ArticleSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10 pt-10">
      <span className="font-mono text-xs text-[#FF2D8D]">
        {number}
      </span>

      <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
        {title}
      </h2>

      <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
        {children}
      </div>
    </section>
  );
}