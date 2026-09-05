import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Search,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Careers | VaptStack",
  description:
    "Join VaptStack, an emerging cybersecurity technology startup building practical security solutions across offensive security, application security, and security engineering.",
  path: "/careers",
});

const careerAreas = [
  {
    number: "01",
    title: "Offensive Security",
    description:
      "Explore attack surfaces, identify vulnerabilities, and think through realistic attack paths.",
    icon: Terminal,
  },
  {
    number: "02",
    title: "Security Engineering",
    description:
      "Build tools, systems, and workflows that make modern digital environments more secure.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Application Security",
    description:
      "Study how applications, APIs, and business logic behave under unexpected conditions.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Security Research",
    description:
      "Investigate emerging technologies, attack techniques, and changing security challenges.",
    icon: Search,
  },
];

const principles = [
  {
    number: "01",
    title: "Keep learning",
    description:
      "Cybersecurity changes constantly. We value curiosity, experimentation, and continuous learning.",
  },
  {
    number: "02",
    title: "Think deeply",
    description:
      "Good security work requires understanding systems, not just running tools.",
  },
  {
    number: "03",
    title: "Build responsibly",
    description:
      "Security research and testing should be performed with clear scope, discipline, and responsibility.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Careers
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Help build stronger digital systems.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            VaptStack is an emerging cybersecurity technology startup bringing
            together security research, offensive testing, and engineering.
            We are interested in people who enjoy understanding how technology
            works and how it can fail.
          </p>
        </div>
      </section>

      {/* Why join */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                Why VaptStack
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                Learn by solving real security problems.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#929292]">
              <p>
                Security is a field where there is always something new to
                understand. New architectures, applications, cloud systems,
                and technologies continuously change the way systems can be
                attacked and defended.
              </p>

              <p>
                At VaptStack, we want to build a culture where people can
                investigate problems deeply, develop practical skills, and
                contribute to technology that improves security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Areas */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Career areas
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Where you could contribute
            </h2>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {careerAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.number}
                  className="border-b border-r border-white/10 p-8 lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-[#FF2D8D]">
                      {area.number}
                    </span>

                    <Icon className="h-5 w-5 text-[#555555]" />
                  </div>

                  <h3 className="mt-10 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                    {area.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#929292]">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                How we work
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                Curiosity with discipline.
              </h2>
            </div>

            <div className="border-l border-t border-white/10">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="border-b border-r border-white/10 p-7 lg:p-8"
                >
                  <span className="font-mono text-xs text-[#FF2D8D]">
                    {principle.number}
                  </span>

                  <h3 className="mt-7 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                    {principle.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#929292]">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="border border-white/10 bg-[#121212] p-8 lg:p-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Current opportunities
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-4xl">
              Future opportunities
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#929292]">
              We are building the team gradually. As VaptStack grows, this
              page will be updated with available roles across security
              engineering, offensive security, research, and software
              development.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 border border-[#FF2D8D]/20 px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-[#FF2D8D]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#929292]">
                No public openings at the moment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="border border-[#FF2D8D]/20 bg-[#080808] p-8 lg:p-14">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Join VaptStack
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Think deeply about security? Let's talk.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#929292]">
              Even when there is no listed role, you can reach out and tell us
              what you build, research, or want to learn.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5]"
            >
              Contact VaptStack
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}