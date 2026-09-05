import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Database,
  KeyRound,
  Smartphone,
} from "lucide-react";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Mobile Application Security | VaptStack",
  description:
    "VaptStack assesses mobile applications and their supporting APIs for security weaknesses across authentication, data storage, communication, and application logic.",
  path: "/solutions/mobile-security",
});

const assessmentAreas = [
  {
    number: "01",
    title: "Application Security",
    description:
      "Examine mobile application behavior, configuration, storage, and application logic for security weaknesses.",
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Authentication & Sessions",
    description:
      "Assess login flows, session handling, tokens, and identity-related controls within the mobile application.",
    icon: KeyRound,
  },
  {
    number: "03",
    title: "Data Storage",
    description:
      "Review how sensitive information is stored locally and handled across the application lifecycle.",
    icon: Database,
  },
];

const process = [
  "Understand the application and scope",
  "Analyze application architecture and behavior",
  "Assess local storage and communication",
  "Test authentication and supporting APIs",
  "Validate findings and assess impact",
  "Deliver findings and remediation guidance",
];

export default function MobileSecurityPage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Solution / Mobile Security
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Secure the applications people carry with them.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            VaptStack assesses mobile applications and their supporting
            services to identify weaknesses that could affect users, data, or
            backend systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5] hover:shadow-[0_0_30px_rgba(255,45,141,0.18)]"
            >
              Request a mobile assessment
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/solutions/api-security"
              className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-[#F5F5F5] transition-colors hover:border-[#FF2D8D] hover:text-[#FF2D8D]"
            >
              Explore API security
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
                Mobile application security
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                The application is only one part of the system.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#929292]">
              <p>
                Mobile applications depend on local storage, operating-system
                capabilities, authentication, APIs, backend services, and
                network communication.
              </p>

              <p>
                A meaningful mobile security assessment considers these
                relationships so weaknesses can be understood in the context
                of the complete application ecosystem.
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

          <div className="grid border-l border-t border-white/10 md:grid-cols-3">
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

      {/* Focus areas */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Security focus
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
              Security across the mobile ecosystem.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Device
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                What remains on the device?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Review local storage, configuration, secrets, and application
                data for unnecessary exposure.
              </p>
            </div>

            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Communication
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                How does the app communicate?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Examine communication between the mobile application, APIs,
                services, and supporting infrastructure.
              </p>
            </div>

            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Backend
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                What happens beyond the app?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Review supporting APIs and backend behavior because mobile
                application security depends on more than the client alone.
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
                Assessment process
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Assess the application and the system around it.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#929292]">
                Context helps uncover security issues that may only appear
                across the mobile application and its supporting services.
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
              Mobile security
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Test the application and the ecosystem behind it.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#929292]">
              Tell us about your mobile application and supporting APIs to
              discuss an appropriate security assessment.
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