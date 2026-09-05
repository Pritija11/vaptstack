import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Cloud,
  KeyRound,
  Server,
  Settings2,
} from "lucide-react";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Cloud Security | VaptStack",
  description:
    "VaptStack assesses cloud environments for security weaknesses across infrastructure, identities, configurations, services, and access controls.",
  path: "/solutions/cloud-security",
});

const assessmentAreas = [
  {
    number: "01",
    title: "Cloud Infrastructure",
    description:
      "Review cloud resources, exposed services, configurations, and architecture for security weaknesses.",
    icon: Cloud,
  },
  {
    number: "02",
    title: "Identity & Access",
    description:
      "Assess identities, permissions, roles, and access paths to identify excessive or unintended access.",
    icon: KeyRound,
  },
  {
    number: "03",
    title: "Configurations",
    description:
      "Review security-relevant configurations across cloud services and supporting infrastructure.",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Workloads & Services",
    description:
      "Examine applications, containers, virtual machines, and connected services running within the environment.",
    icon: Server,
  },
];

const process = [
  "Understand the cloud architecture and scope",
  "Inventory relevant resources and services",
  "Review identities and security configurations",
  "Assess exposed workloads and attack paths",
  "Validate significant findings",
  "Deliver prioritized remediation guidance",
];

export default function CloudSecurityPage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Solution / Cloud Security
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Secure the cloud infrastructure behind your systems.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            VaptStack assesses cloud environments, identities, configurations,
            services, and workloads to identify security gaps across the
            infrastructure layer.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5] hover:shadow-[0_0_30px_rgba(255,45,141,0.18)]"
            >
              Request a cloud assessment
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
                Cloud security
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                Cloud security is more than configuration checking.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#929292]">
              <p>
                Cloud environments connect identities, resources, services,
                applications, and data through constantly changing
                infrastructure.
              </p>

              <p>
                A strong assessment considers how those components interact,
                where access is granted, what is exposed, and how an attacker
                could move through the environment.
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
              What we assess
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

      {/* Security Focus */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Security focus
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
              Understand the relationships inside the cloud.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Identity
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                Who can access what?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Examine roles, permissions, credentials, and access paths that
                could create unnecessary exposure.
              </p>
            </div>

            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Exposure
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                What is reachable?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Identify exposed services, resources, and network paths that
                could increase the attack surface.
              </p>
            </div>

            <div className="border border-white/10 bg-[#080808] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                Configuration
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                What could be misconfigured?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#929292]">
                Review security-relevant cloud settings that could expose
                workloads, services, or data.
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
                Map the environment before testing it.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#929292]">
                Cloud security depends on understanding how identities,
                workloads, services, and network relationships fit together.
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
              Cloud security
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Understand the security of the infrastructure you depend on.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#929292]">
              Tell us about your cloud environment and we can discuss an
              appropriate security assessment.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5]"
            >
              Request a cloud assessment
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}