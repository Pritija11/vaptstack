import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Bug,
  Code2,
  LockKeyhole,
  Workflow,
} from "lucide-react";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Web Application Security | VaptStack",
  description:
    "VaptStack assesses web applications for vulnerabilities across authentication, authorization, business logic, APIs, and data handling.",
  path: "/solutions/web-application-security",
});

const assessmentAreas = [
  {
    number: "01",
    title: "Authentication",
    description:
      "Assess login flows, session handling, password recovery, multi-factor authentication, and related access mechanisms.",
    icon: LockKeyhole,
  },
  {
    number: "02",
    title: "Authorization",
    description:
      "Test whether users and roles can access only the resources and actions they are intended to reach.",
    icon: Bug,
  },
  {
    number: "03",
    title: "Business Logic",
    description:
      "Examine application workflows for logic flaws, unexpected states, and abuse scenarios that automated scanners may miss.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Application Code & Data",
    description:
      "Assess how applications process input, handle sensitive information, and interact with supporting services.",
    icon: Code2,
  },
];

const testingProcess = [
  "Understand the application and scope",
  "Map application functionality and attack surface",
  "Identify and validate security weaknesses",
  "Assess exploitability and business impact",
  "Document findings and remediation guidance",
];

export default function WebApplicationSecurityPage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Solution / Web Application Security
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Secure the applications your business depends on.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            VaptStack assesses web applications for security weaknesses across
            authentication, authorization, business logic, application
            behavior, and data handling.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5] hover:shadow-[0_0_30px_rgba(255,45,141,0.18)]"
            >
              Request an assessment
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/solutions/penetration-testing"
              className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-[#F5F5F5] transition-colors hover:border-[#FF2D8D] hover:text-[#FF2D8D]"
            >
              Explore penetration testing
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
                Application security
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                Look beyond the surface.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#929292]">
              <p>
                A secure web application needs more than protection against
                common technical vulnerabilities. Its authentication,
                authorization, workflows, data handling, and business logic all
                influence its security.
              </p>

              <p>
                VaptStack combines automated checks with manual analysis to
                identify weaknesses in the way the application actually
                behaves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Areas */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Assessment areas
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
              What we examine
            </h2>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {assessmentAreas.map((area) => {
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

      {/* Common Focus Areas */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Access control
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                Who can do what?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Review whether users and roles can access resources and actions
                beyond their intended permissions.
              </p>
            </div>

            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Input & output
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                How does data move?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Examine how applications accept, process, transform, and return
                data across different workflows and services.
              </p>
            </div>

            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Business logic
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                What can be abused?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Look for unexpected workflows, state changes, and application
                behaviors that could create security risk.
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
                Testing process
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Understand the application before testing it.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#929292]">
                Context helps distinguish meaningful security findings from
                purely theoretical issues.
              </p>
            </div>

            <div className="border-l border-t border-white/10">
              {testingProcess.map((step, index) => (
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
              Application security
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Test the application the way it will actually be used.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#929292]">
              Tell us about your application, platform, or product and we can
              discuss an appropriate security testing approach.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5]"
            >
              Request an assessment
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}