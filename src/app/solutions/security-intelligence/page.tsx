import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  Eye,
  Radar,
} from "lucide-react";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Security Intelligence | VaptStack",
  description:
    "VaptStack uses security intelligence to help organizations understand threats, security signals, attack activity, and changing digital risk.",
  path: "/solutions/security-intelligence",
});

const intelligenceAreas = [
  {
    number: "01",
    title: "Threat Intelligence",
    description:
      "Collect and analyze relevant threat information to better understand emerging risks and attacker activity.",
    icon: Radar,
  },
  {
    number: "02",
    title: "Security Monitoring",
    description:
      "Improve visibility into important security events, changes, and signals across digital environments.",
    icon: Eye,
  },
  {
    number: "03",
    title: "Risk Analysis",
    description:
      "Connect technical findings and security information to identify risks that deserve closer attention.",
    icon: AlertTriangle,
  },
];

const process = [
  "Collect relevant security signals",
  "Organize and contextualize information",
  "Identify important patterns and relationships",
  "Assess potential security impact",
  "Prioritize areas that need attention",
];

export default function SecurityIntelligencePage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Solution / Security Intelligence
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Turn security signals into useful intelligence.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            VaptStack helps organizations make sense of security information,
            threat signals, and technical findings so important risks are
            easier to understand and act on.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5] hover:shadow-[0_0_30px_rgba(255,45,141,0.18)]"
            >
              Discuss security intelligence
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/research"
              className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-[#F5F5F5] transition-colors hover:border-[#FF2D8D] hover:text-[#FF2D8D]"
            >
              Explore research
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                Security intelligence
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                More security data does not automatically mean more clarity.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#929292]">
              <p>
                Modern environments can produce large amounts of security
                information from applications, infrastructure, identity
                systems, endpoints, and external sources.
              </p>

              <p>
                Security intelligence focuses on turning those signals into
                useful context so teams can better understand what is happening
                and where attention is needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Areas */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Intelligence areas
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
              What we focus on
            </h2>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-3">
            {intelligenceAreas.map((area) => {
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

      {/* Signal Flow */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                Intelligence flow
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                From signal to understanding.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#929292]">
                Security intelligence is most useful when technical
                information is connected to context, relationships, and
                potential impact.
              </p>
            </div>

            <div className="grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-5">
              {[
                "Signals",
                "Context",
                "Analysis",
                "Risk",
                "Action",
              ].map((step, index) => (
                <div
                  key={step}
                  className="border-b border-r border-white/10 p-5"
                >
                  <span className="font-mono text-[9px] text-[#FF2D8D]">
                    0{index + 1}
                  </span>

                  <p className="mt-8 text-sm font-medium text-[#F5F5F5]">
                    {step}
                  </p>

                  {index < 4 && (
                    <span className="mt-4 block text-[#555555]">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                Approach
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Focus on what matters.
              </h2>
            </div>

            <div className="border-l border-t border-white/10">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-6 border-b border-r border-white/10 p-6 lg:p-7"
                >
                  <span className="font-mono text-xs text-[#FF2D8D]">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-[#F5F5F5]">
                    {step}
                  </span>
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
              Security intelligence
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Make complex security information easier to understand.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#929292]">
              Tell us about your environment, security signals, or visibility
              challenges and we can discuss where intelligence can help.
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