import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Database,
  KeyRound,
  Lock,
  Network,
} from "lucide-react";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "API Security | VaptStack",
  description:
    "VaptStack assesses APIs for authentication, authorization, data exposure, business logic, and other security weaknesses.",
  path: "/solutions/api-security",
});

const assessmentAreas = [
  {
    number: "01",
    title: "Authentication",
    description:
      "Assess how APIs identify clients and users, including tokens, sessions, credentials, and authentication flows.",
    icon: KeyRound,
  },
  {
    number: "02",
    title: "Authorization",
    description:
      "Test whether API users can access resources or perform actions outside their intended permissions.",
    icon: Lock,
  },
  {
    number: "03",
    title: "Data Exposure",
    description:
      "Examine API responses and request handling for unnecessary, sensitive, or improperly protected data.",
    icon: Database,
  },
  {
    number: "04",
    title: "API Logic & Integration",
    description:
      "Analyze workflows, endpoint relationships, and integrations for weaknesses that can create exploitable attack paths.",
    icon: Network,
  },
];

const process = [
  "Map endpoints and API architecture",
  "Review authentication and authorization",
  "Test parameters and data flows",
  "Analyze business logic and integrations",
  "Validate and prioritize findings",
];

export default function ApiSecurityPage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Solution / API Security
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Secure the interfaces connecting your digital systems.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            VaptStack assesses APIs for weaknesses across authentication,
            authorization, data exposure, business logic, and system
            integrations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5] hover:shadow-[0_0_30px_rgba(255,45,141,0.18)]"
            >
              Request an API assessment
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/solutions/web-application-security"
              className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-[#F5F5F5] transition-colors hover:border-[#FF2D8D] hover:text-[#FF2D8D]"
            >
              Web application security
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
                API security
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                Every API is part of the attack surface.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#929292]">
              <p>
                APIs connect applications, users, services, and data. A
                weakness in authentication, authorization, input handling, or
                business logic can expose systems beyond the API itself.
              </p>

              <p>
                VaptStack examines APIs in context, considering how endpoints
                behave individually and how they interact as part of a larger
                application architecture.
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

      {/* Common API Risks */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              What we look for
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
              Security across the API lifecycle.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Access
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                Can users reach what they should not?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Examine object access, role boundaries, and authorization logic
                across API resources.
              </p>
            </div>

            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Data
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                Is the API exposing too much?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Review request and response behavior to identify unnecessary or
                sensitive data exposure.
              </p>
            </div>

            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Logic
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                Can workflows be abused?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Test how endpoint combinations and application workflows can
                behave under unexpected conditions.
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
                Map first. Test deeply.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#929292]">
                Understanding the API architecture provides context for finding
                meaningful weaknesses.
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
              API security
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Test the interfaces your systems depend on.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#929292]">
              Tell us about your APIs, integrations, and application
              architecture to discuss an appropriate security assessment.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5]"
            >
              Request an API assessment
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}