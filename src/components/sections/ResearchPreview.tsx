import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const researchItems = [
  {
    number: "01",
    category: "Offensive Security",
    title: "Understanding modern attack surfaces",
    description:
      "Exploring how applications, APIs, cloud environments, and connected services create new security considerations.",
    href: "/research/attack-surfaces",
  },
  {
    number: "02",
    category: "Application Security",
    title: "Security beyond automated scanning",
    description:
      "Investigating how manual testing, business logic analysis, and contextual understanding reveal deeper weaknesses.",
    href: "/research/application-security",
  },
  {
    number: "03",
    category: "Emerging Technology",
    title: "Security for what comes next",
    description:
      "Researching emerging technologies and how new architectures can change the cybersecurity landscape.",
    href: "/research/emerging-security",
  },
];

export default function ResearchPreview() {
  return (
    <section className="border-b border-white/10 bg-[#121212]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
              Research
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              We investigate how security is changing.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-8 text-[#929292]">
              VaptStack explores changing attack surfaces, application
              security, and emerging technologies to better understand the
              problems modern security teams face.
            </p>
          </div>
        </div>

        {/* Research Feed */}
        <div className="mt-16 border-t border-white/10">
          {researchItems.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group grid gap-6 border-b border-white/10 py-8 transition-colors hover:bg-[#080808] lg:grid-cols-[80px_180px_1fr_auto] lg:items-start lg:px-5"
            >
              {/* Number */}
              <span className="font-mono text-xs text-[#FF2D8D]">
                {item.number}
              </span>

              {/* Category */}
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#555555]">
                {item.category}
              </span>

              {/* Content */}
              <div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#929292]">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 pt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#555555] transition-colors group-hover:text-[#FF2D8D]">
                Read
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FF2D8D] transition-colors hover:text-[#FF6BB5]"
          >
            Explore all research
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}