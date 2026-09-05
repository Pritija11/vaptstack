import {
  Crosshair,
  SearchCheck,
  ShieldAlert,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Think like an attacker",
    description:
      "We look beyond surface-level weaknesses and examine how vulnerabilities can combine into realistic attack paths.",
    icon: Crosshair,
  },
  {
    number: "02",
    title: "Test what matters",
    description:
      "Security testing should focus on the systems, assets, and attack surfaces that matter most to the business.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Strengthen the system",
    description:
      "Finding a vulnerability is only the beginning. The goal is to help build systems that are harder to compromise.",
    icon: ShieldAlert,
  },
];

export default function WhyVaptStack() {
  return (
    <section className="border-b border-white/10 bg-[#121212]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
              Why VaptStack
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Security starts with understanding how systems can fail.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-8 text-[#929292]">
              VaptStack approaches cybersecurity through practical security
              testing, technical analysis, and continuous improvement. We focus
              on understanding the system before deciding how to protect it.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-16 grid border-l border-t border-white/10 md:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.number}
                className="group border-b border-r border-white/10 p-8 lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-[#FF2D8D]">
                    {principle.number}
                  </span>

                  <Icon className="h-5 w-5 text-[#555555] transition-colors group-hover:text-[#FF2D8D]" />
                </div>

                <h3 className="mt-10 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#929292]">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statement */}
        <div className="mt-16 border-l-2 border-[#FF2D8D] pl-6 lg:pl-8">
          <p className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-2xl font-medium leading-relaxed tracking-[-0.02em] text-[#F5F5F5] md:text-3xl">
            Discover the weakness. Understand the risk. Strengthen the system.
          </p>
        </div>
      </div>
    </section>
  );
}