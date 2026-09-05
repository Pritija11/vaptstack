import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardCheck,
  FileSearch,
  Settings2,
  ShieldCheck,
} from "lucide-react";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Security Auditing | VaptStack",
  description:
    "VaptStack performs security audits to review controls, configurations, security practices, and technical environments for gaps and weaknesses.",
  path: "/solutions/security-auditing",
});

const auditAreas = [
  {
    number: "01",
    title: "Security Controls",
    description:
      "Review existing security controls and determine whether they align with the organization's technical environment and requirements.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Configuration Review",
    description:
      "Assess security-relevant configurations across applications, infrastructure, cloud services, and supporting systems.",
    icon: Settings2,
  },
  {
    number: "03",
    title: "Security Practices",
    description:
      "Examine how security is approached across development, deployment, access management, and operational processes.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Technical Review",
    description:
      "Analyze the broader environment to identify technical gaps that may increase security risk.",
    icon: FileSearch,
  },
];

const process = [
  "Understand the environment and audit objectives",
  "Review relevant controls and technical configurations",
  "Identify gaps and security weaknesses",
  "Validate important observations",
  "Prioritize findings by relevance and risk",
  "Deliver recommendations for improvement",
];

export default function SecurityAuditingPage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Solution / Security Auditing
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Understand how strong your security really is.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            VaptStack reviews security controls, configurations, technical
            environments, and security practices to identify gaps and areas
            for improvement.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5] hover:shadow-[0_0_30px_rgba(255,45,141,0.18)]"
            >
              Request a security audit
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/solutions/vulnerability-assessment"
              className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-[#F5F5F5] transition-colors hover:border-[#FF2D8D] hover:text-[#FF2D8D]"
            >
              Explore vulnerability assessment
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
                Security audit
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                Security needs to be examined as a system.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#929292]">
              <p>
                Security audits help organizations understand whether their
                existing controls, configurations, and practices provide the
                protection they expect.
              </p>

              <p>
                VaptStack takes a technical view of the environment, connecting
                security controls with the systems and workflows they are
                intended to protect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Areas */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Audit areas
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
              What we review
            </h2>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {auditAreas.map((area) => {
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

      {/* Questions */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Audit questions
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
              The goal is clearer security understanding.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Controls
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                Are the right controls in place?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Review whether important security controls exist and are
                appropriate for the environment.
              </p>
            </div>

            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Configuration
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                Are systems configured securely?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Examine technical settings and configurations that can affect
                the security posture of the environment.
              </p>
            </div>

            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Improvement
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                Where can security become stronger?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Prioritize practical improvements based on the findings and
                context of the environment.
              </p>
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
                Audit process
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Review. Validate. Improve.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#929292]">
                A useful security audit should help teams understand what is
                working, what is not, and what deserves attention next.
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

      {/* CTA */}
      <section className="bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="border border-[#FF2D8D]/20 bg-[#080808] p-8 lg:p-14">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Security auditing
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Get a clearer view of your security posture.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#929292]">
              Tell us about your environment and the security questions you
              need answered.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5]"
            >
              Request a security audit
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}