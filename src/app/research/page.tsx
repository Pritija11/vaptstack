import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { createMetadata } from "@/lib/seo";
import { researchArticles } from "@/data/research";

export const metadata: Metadata = createMetadata({
  title: "Cybersecurity Research | VaptStack",
  description:
    "Explore VaptStack research into attack surfaces, application security, offensive security, and emerging cybersecurity technologies.",
  path: "/research",
});

const researchApproach = [
  {
    number: "01",
    title: "Observe",
    description:
      "Understand how systems, applications, and technologies are changing.",
  },
  {
    number: "02",
    title: "Investigate",
    description:
      "Study vulnerabilities, attack patterns, and emerging security challenges.",
  },
  {
    number: "03",
    title: "Validate",
    description:
      "Test assumptions through technical analysis and practical security research.",
  },
  {
    number: "04",
    title: "Apply",
    description:
      "Turn useful findings into stronger security practices and engineering decisions.",
  },
];

export default function ResearchPage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Research
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Investigating the security problems of what comes next.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            VaptStack researches attack surfaces, application security,
            offensive security, and emerging technologies to better understand
            how modern digital systems can fail and how they can be made
            stronger.
          </p>
        </div>
      </section>

      {/* Research Articles */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Research topics
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Questions worth investigating.
            </h2>
          </div>

          <div className="border-l border-t border-white/10">
            {researchArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/research/${article.slug}`}
                className="group block border-b border-r border-white/10 p-8 transition-colors hover:bg-[#080808] lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[80px_180px_1fr_auto] lg:items-start">
                  {/* Number */}
                  <span className="font-mono text-xs text-[#FF2D8D]">
                    {article.number}
                  </span>

                  {/* Category */}
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#555555]">
                    {article.category}
                  </span>

                  {/* Content */}
                  <div>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5] md:text-3xl">
                      {article.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#929292]">
                      {article.excerpt}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[#555555]">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight className="h-5 w-5 text-[#555555] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF2D8D]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Research Approach */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                Research approach
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                Security research with an engineering mindset.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#929292]">
                Research should help answer practical questions and create
                better understanding of real security problems.
              </p>
            </div>

            <div className="border-l border-t border-white/10 sm:grid sm:grid-cols-2">
              {researchApproach.map((step) => (
                <div
                  key={step.number}
                  className="border-b border-r border-white/10 p-7 lg:p-8"
                >
                  <span className="font-mono text-xs text-[#FF2D8D]">
                    {step.number}
                  </span>

                  <h3 className="mt-7 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#929292]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border border-white/10 bg-[#080808] p-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Offensive security
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                How do attackers find paths through modern systems?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Studying attack surfaces, exploitation paths, and changing
                offensive techniques.
              </p>
            </div>

            <div className="border border-white/10 bg-[#080808] p-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Application security
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                Where do applications break beyond the obvious?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Investigating authentication, authorization, business logic,
                APIs, and application behavior.
              </p>
            </div>

            <div className="border border-white/10 bg-[#080808] p-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Emerging technology
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                How does new technology change security?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Exploring how new architectures and technologies can create new
                security opportunities and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="border border-[#FF2D8D]/20 bg-[#080808] p-8 lg:p-14">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Research & collaboration
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Have a security question worth exploring?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#929292]">
              Connect with VaptStack to discuss cybersecurity research,
              emerging attack surfaces, or a security problem you are trying
              to understand.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5]"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}