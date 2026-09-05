import Link from "next/link";
import {
  ArrowUpRight,
  Bug,
  Cloud,
  Code2,
  FileSearch,
  KeyRound,
  Radar,
  ScanSearch,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Vulnerability Assessment",
    description:
      "Identify vulnerabilities across applications, infrastructure, and digital assets before they become exploitable weaknesses.",
    href: "/solutions/vulnerability-assessment",
    icon: ScanSearch,
  },
  {
    number: "02",
    title: "Penetration Testing",
    description:
      "Simulate realistic attack paths to uncover weaknesses that automated scanning alone may miss.",
    href: "/solutions/penetration-testing",
    icon: Bug,
  },
  {
    number: "03",
    title: "Web Application Security",
    description:
      "Assess web applications for security weaknesses across authentication, authorization, business logic, and data handling.",
    href: "/solutions/web-application-security",
    icon: Code2,
  },
  {
    number: "04",
    title: "API Security",
    description:
      "Protect the interfaces connecting applications, services, identities, and sensitive data.",
    href: "/solutions/api-security",
    icon: KeyRound,
  },
  {
    number: "05",
    title: "Mobile Security",
    description:
      "Evaluate mobile applications and their supporting APIs for vulnerabilities across the application stack.",
    href: "/solutions/mobile-security",
    icon: Radar,
  },
  {
    number: "06",
    title: "Cloud Security",
    description:
      "Identify security gaps across cloud infrastructure, configurations, identities, and connected services.",
    href: "/solutions/cloud-security",
    icon: Cloud,
  },
  {
    number: "07",
    title: "Security Auditing",
    description:
      "Review security controls, configurations, and practices to understand the overall security posture.",
    href: "/solutions/security-auditing",
    icon: FileSearch,
  },
  {
    number: "08",
    title: "Security Intelligence",
    description:
      "Turn security signals and technical information into clearer insights about potential risks and threats.",
    href: "/solutions/security-intelligence",
    icon: Radar,
  },
];

export default function SolutionsOverview() {
  return (
    <section className="border-b border-white/10 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
              What we do
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Security built around the way systems actually work.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-8 text-[#929292]">
              VaptStack helps organizations discover weaknesses, test their
              defenses, and strengthen the security of modern applications,
              APIs, cloud environments, and digital infrastructure.
            </p>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="mt-16 grid border-l border-t border-white/10 md:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <Link
                key={solution.href}
                href={solution.href}
                className="group border-b border-r border-white/10 p-8 transition-colors duration-200 hover:bg-[#121212] lg:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-xs text-[#FF2D8D]">
                    {solution.number}
                  </span>

                  <Icon className="h-5 w-5 text-[#555555] transition-colors group-hover:text-[#FF2D8D]" />
                </div>

                <h3 className="mt-10 max-w-md font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                  {solution.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#929292]">
                  {solution.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#555555] transition-colors group-hover:text-[#FF2D8D]">
                  Explore solution
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}