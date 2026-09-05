import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Cybersecurity Solutions | VaptStack",
  description:
    "Explore VaptStack cybersecurity solutions across vulnerability assessment, penetration testing, application security, API security, cloud security, and security intelligence.",
  path: "/solutions",
});

const solutions = [
  {
    number: "01",
    title: "Vulnerability Assessment",
    description:
      "Discover vulnerabilities across applications, infrastructure, and exposed digital assets.",
    href: "/solutions/vulnerability-assessment",
  },
  {
    number: "02",
    title: "Penetration Testing",
    description:
      "Simulate realistic attacks to identify weaknesses that automated tools may not reveal.",
    href: "/solutions/penetration-testing",
  },
  {
    number: "03",
    title: "Web Application Security",
    description:
      "Assess web applications across authentication, authorization, business logic, and data handling.",
    href: "/solutions/web-application-security",
  },
  {
    number: "04",
    title: "API Security",
    description:
      "Identify risks across APIs, authentication, authorization, integrations, and sensitive data flows.",
    href: "/solutions/api-security",
  },
  {
    number: "05",
    title: "Mobile Security",
    description:
      "Evaluate mobile applications and their supporting services for security weaknesses.",
    href: "/solutions/mobile-security",
  },
  {
    number: "06",
    title: "Cloud Security",
    description:
      "Assess cloud environments, configurations, identities, and infrastructure for security gaps.",
    href: "/solutions/cloud-security",
  },
  {
    number: "07",
    title: "Security Auditing",
    description:
      "Review security controls, configurations, and practices to understand overall security posture.",
    href: "/solutions/security-auditing",
  },
  {
    number: "08",
    title: "Security Intelligence",
    description:
      "Turn technical signals and security findings into clearer insights about risk and exposure.",
    href: "/solutions/security-intelligence",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Solutions / Cybersecurity
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Find weaknesses. Understand risk. Strengthen security.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            VaptStack provides cybersecurity assessment and security
            engineering solutions designed around modern applications, APIs,
            cloud environments, and digital infrastructure.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                Our approach
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5]">
                Security testing built around the system.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#929292]">
              <p>
                Modern businesses depend on connected applications, APIs, cloud
                services, identities, and infrastructure. Security assessment
                needs to understand how those components work together.
              </p>

              <p>
                VaptStack combines automated discovery, technical assessment,
                manual testing, and security analysis to identify meaningful
                weaknesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Capabilities
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
              Security services
            </h2>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {solutions.map((solution) => (
              <Link
                key={solution.href}
                href={solution.href}
                className="group border-b border-r border-white/10 p-8 transition-colors hover:bg-[#121212] lg:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-xs text-[#FF2D8D]">
                    {solution.number}
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-[#555555] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF2D8D]" />
                </div>

                <h3 className="mt-10 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                  {solution.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#929292]">
                  {solution.description}
                </p>

                <span className="mt-8 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#555555] transition-colors group-hover:text-[#FF2D8D]">
                  Explore solution
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-white/10 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                How we work
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Discover. Test. Analyze. Strengthen.
              </h2>
            </div>

            <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
              {[
                ["01", "Discover"],
                ["02", "Test"],
                ["03", "Analyze"],
                ["04", "Strengthen"],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="border-b border-r border-white/10 p-6"
                >
                  <span className="font-mono text-[10px] text-[#FF2D8D]">
                    {number}
                  </span>

                  <p className="mt-8 text-sm font-medium text-[#F5F5F5]">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="border border-[#FF2D8D]/20 bg-[#121212] p-8 lg:p-14">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Start with your attack surface
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Understand where your security starts to break.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#929292]">
              Tell us what you're building, deploying, or protecting and we can
              start with the systems that matter most.
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