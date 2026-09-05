import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Crosshair,
  Network,
  Search,
  Target,
} from "lucide-react";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Penetration Testing | VaptStack",
  description:
    "VaptStack performs penetration testing to identify exploitable weaknesses across web applications, APIs, mobile applications, infrastructure, and cloud environments.",
  path: "/solutions/penetration-testing",
});

const testingAreas = [
  {
    number: "01",
    title: "Web Applications",
    description:
      "Assess application functionality, authentication, authorization, business logic, and data handling for exploitable weaknesses.",
    icon: Search,
  },
  {
    number: "02",
    title: "APIs",
    description:
      "Test APIs for access-control issues, authentication weaknesses, insecure data exposure, and other security risks.",
    icon: Network,
  },
  {
    number: "03",
    title: "Infrastructure",
    description:
      "Evaluate exposed systems and services to understand how an attacker could move through the environment.",
    icon: Target,
  },
  {
    number: "04",
    title: "Mobile Applications",
    description:
      "Assess mobile applications and their supporting services for weaknesses that could affect users or backend systems.",
    icon: Crosshair,
  },
];

const process = [
  "Define scope and objectives",
  "Reconnaissance and attack-surface discovery",
  "Vulnerability identification",
  "Manual exploitation and validation",
  "Risk analysis and reporting",
  "Remediation guidance",
];

export default function PenetrationTestingPage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Solution / Penetration Testing
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Test your defenses like an attacker would.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            VaptStack performs controlled penetration testing to identify
            exploitable weaknesses and understand how vulnerabilities could be
            combined into realistic attack paths.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF6BB5] hover:shadow-[0_0_30px_rgba(255,45,141,0.18)]"
            >
              Request a penetration test
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/solutions/vulnerability-assessment"
              className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-[#F5F5F5] transition-colors hover:border-[#FF2D8D] hover:text-[#FF2D8D]"
            >
              Compare with vulnerability assessment
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
                Offensive security
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                Find what automated checks may miss.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#929292]">
              <p>
                Penetration testing goes beyond identifying potential
                vulnerabilities. It examines whether weaknesses can actually
                be used and what an attacker could achieve by exploiting them.
              </p>

              <p>
                Testing is performed within an agreed scope so that systems can
                be evaluated safely while producing findings that are relevant
                to the organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Areas */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Testing areas
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
              Where we test
            </h2>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {testingAreas.map((area) => {
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

      {/* Testing methodology */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                Methodology
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Controlled testing. Clear outcomes.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#929292]">
                Every engagement begins with agreed scope, objectives, and
                testing boundaries.
              </p>
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

                  <span className="text-sm text-[#F5F5F5]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we look for */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border border-white/10 bg-[#121212] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Exploitability
              </p>

              <p className="mt-5 text-sm leading-7 text-[#929292]">
                Can the identified weakness actually be exploited within the
                agreed testing scope?
              </p>
            </div>

            <div className="border border-white/10 bg-[#121212] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Impact
              </p>

              <p className="mt-5 text-sm leading-7 text-[#929292]">
                What could an attacker access, change, expose, or compromise?
              </p>
            </div>

            <div className="border border-white/10 bg-[#121212] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Attack path
              </p>

              <p className="mt-5 text-sm leading-7 text-[#929292]">
                Could multiple weaknesses be combined to create a more serious
                security outcome?
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
              Test before attackers do
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Put your defenses under controlled pressure.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#929292]">
              Tell us what you need tested and we can discuss an appropriate
              penetration testing scope.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5]"
            >
              Request a penetration test
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}