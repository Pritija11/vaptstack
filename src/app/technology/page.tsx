import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Cloud,
  Code2,
  Eye,
  Network,
  ShieldCheck,
} from "lucide-react";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Technology | VaptStack",
  description:
    "Explore the technology and security engineering approach behind VaptStack's cybersecurity assessments and security solutions.",
  path: "/technology",
});

const technologyAreas = [
  {
    number: "01",
    title: "Attack Surface Discovery",
    description:
      "Understand exposed applications, APIs, services, infrastructure, and other assets before deeper security testing begins.",
    icon: Network,
    tags: ["Discovery", "Enumeration", "Exposure"],
  },
  {
    number: "02",
    title: "Application Security",
    description:
      "Analyze application behavior, authentication, authorization, business logic, and data flows for meaningful weaknesses.",
    icon: Code2,
    tags: ["Web", "API", "Logic"],
  },
  {
    number: "03",
    title: "Cloud & Infrastructure",
    description:
      "Assess cloud resources, identities, configurations, services, and infrastructure relationships that can affect security.",
    icon: Cloud,
    tags: ["Cloud", "Identity", "Infrastructure"],
  },
  {
    number: "04",
    title: "Security Intelligence",
    description:
      "Connect technical findings and security signals to develop a clearer understanding of risk and exposure.",
    icon: Eye,
    tags: ["Signals", "Analysis", "Risk"],
  },
];

const principles = [
  {
    number: "01",
    title: "Context over noise",
    description:
      "Security findings become more useful when they are understood in the context of the system and its purpose.",
  },
  {
    number: "02",
    title: "Automation with validation",
    description:
      "Automated tools can improve coverage, while manual analysis helps validate what actually matters.",
  },
  {
    number: "03",
    title: "Security through engineering",
    description:
      "The strongest security outcomes connect testing with practical improvements to architecture and implementation.",
  },
];

export default function TechnologyPage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Technology
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Security engineering built around modern digital systems.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            VaptStack combines security testing, technical analysis,
            automation, and engineering to understand how digital systems
            behave and where they can be strengthened.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                Our approach
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                Tools matter. Understanding matters more.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#929292]">
              <p>
                Modern security work involves scanners, testing frameworks,
                cloud tooling, application analysis, and large amounts of
                technical information.
              </p>

              <p>
                Technology becomes more valuable when it is combined with
                context. Our approach focuses on understanding the system,
                validating important findings, and connecting technical
                observations to meaningful security outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Areas */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Technology areas
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Where technology meets security.
            </h2>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {technologyAreas.map((area) => {
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

                  <div className="mt-7 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#555555]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                System view
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                Understand the system before isolating the weakness.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#929292]">
                Applications, APIs, cloud infrastructure, identities, and
                services form connected systems. Security analysis becomes
                stronger when those relationships are visible.
              </p>
            </div>

            <div className="relative border border-white/10 bg-[#080808] p-8 lg:p-10">
              <div className="absolute left-1/2 top-8 h-[calc(100%-64px)] w-px -translate-x-1/2 bg-white/10" />

              <div className="relative space-y-6">
                <div className="mx-auto max-w-sm border border-white/10 bg-[#121212] p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#FF2D8D]">
                    Surface
                  </p>

                  <p className="mt-2 text-sm text-[#F5F5F5]">
                    Applications / APIs / Services
                  </p>
                </div>

                <div className="mx-auto h-8 w-px bg-[#FF2D8D]/40" />

                <div className="mx-auto max-w-sm border border-[#FF2D8D]/40 bg-[#121212] p-5 shadow-[0_0_35px_rgba(255,45,141,0.08)]">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#FF2D8D]">
                    Security analysis
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#F5F5F5]">
                    Discover / Test / Validate
                  </p>
                </div>

                <div className="mx-auto h-8 w-px bg-[#FF2D8D]/40" />

                <div className="mx-auto max-w-sm border border-white/10 bg-[#121212] p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#FF2D8D]">
                    Outcome
                  </p>

                  <p className="mt-2 text-sm text-[#F5F5F5]">
                    Findings / Context / Remediation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                Engineering principles
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                How we use technology.
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

      {/* CTA */}
      <section className="bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="border border-[#FF2D8D]/20 bg-[#080808] p-8 lg:p-14">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Security engineering
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Technology should help you understand risk, not hide it.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#929292]">
              Explore how VaptStack can assess the applications,
              infrastructure, and connected systems your organization depends
              on.
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