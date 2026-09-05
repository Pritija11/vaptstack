import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Crosshair,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About VaptStack | Cybersecurity Technology Startup",
  description:
    "Learn about VaptStack, an emerging cybersecurity technology startup focused on vulnerability assessment, penetration testing, application security, and security engineering.",
  path: "/about",
});

const focusAreas = [
  {
    number: "01",
    title: "Offensive Security",
    description:
      "Understand how real attack paths can emerge by testing systems from an adversarial perspective.",
    icon: Crosshair,
  },
  {
    number: "02",
    title: "Security Engineering",
    description:
      "Help strengthen applications, APIs, cloud environments, and infrastructure after weaknesses are identified.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Security Research",
    description:
      "Study changing attack surfaces, technologies, and security challenges affecting modern systems.",
    icon: Search,
  },
];

const principles = [
  {
    number: "01",
    title: "Understand first",
    description:
      "We start by understanding the technology, architecture, and context before drawing conclusions.",
  },
  {
    number: "02",
    title: "Test with purpose",
    description:
      "Security testing should answer meaningful questions about risk, exposure, and real-world impact.",
  },
  {
    number: "03",
    title: "Build stronger",
    description:
      "The outcome of security work should be a stronger system, not just a longer list of findings.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            About VaptStack
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Building a cybersecurity company around how systems actually fail.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            VaptStack is an emerging cybersecurity technology startup focused on
            understanding vulnerabilities, testing defenses, and helping
            organizations build stronger digital systems.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                01 / Who we are
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                Security should be understood, not assumed.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#929292]">
              <p>
                VaptStack is an emerging cybersecurity technology startup
                working across vulnerability assessment, penetration testing,
                application security, and security engineering.
              </p>

              <p>
                We focus on the practical question behind security testing: what
                could go wrong, how could it happen, and what can be done to
                make the system stronger?
              </p>

              <p>
                Our approach connects offensive security with engineering so
                that discovering a weakness becomes the beginning of improving
                the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              02 / Focus
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Where VaptStack works
            </h2>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-3">
            {focusAreas.map((area) => {
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

                  <p className="mt-4 text-sm leading-7 text-[#929292]">
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
                03 / Principles
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                How we approach security.
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

      {/* Security Philosophy */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                04 / Security philosophy
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
                Security is an engineering decision.
              </h2>
            </div>

            <div className="border-l border-t border-white/10">
              <div className="border-b border-r border-white/10 p-7 lg:p-8">
                <span className="font-mono text-xs text-[#FF2D8D]">01</span>

                <h3 className="mt-7 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                  Discover early
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#929292]">
                  Understand the attack surface before weaknesses become
                  incidents.
                </p>
              </div>

              <div className="border-b border-r border-white/10 p-7 lg:p-8">
                <span className="font-mono text-xs text-[#FF2D8D]">02</span>

                <h3 className="mt-7 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                  Test continuously
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#929292]">
                  Security needs to evolve as applications, infrastructure, and
                  threats change.
                </p>
              </div>

              <div className="border-b border-r border-white/10 p-7 lg:p-8">
                <span className="font-mono text-xs text-[#FF2D8D]">03</span>

                <h3 className="mt-7 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                  Build stronger
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#929292]">
                  Turn security findings into practical improvements that
                  strengthen the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="border border-[#FF2D8D]/20 bg-[#080808] p-8 lg:p-14">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Work with VaptStack
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Have a system worth testing?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#929292]">
              Talk to VaptStack about vulnerability assessment, penetration
              testing, application security, or another cybersecurity challenge.
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
