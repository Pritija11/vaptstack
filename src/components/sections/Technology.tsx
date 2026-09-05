import {
  CloudCog,
  Code2,
  Network,
  Radar,
} from "lucide-react";

const technologyAreas = [
  {
    number: "01",
    title: "Attack Surface",
    description:
      "Map applications, APIs, infrastructure, and exposed services to understand what needs to be protected.",
    icon: Radar,
    tags: ["Discovery", "Assets", "Exposure"],
  },
  {
    number: "02",
    title: "Application Security",
    description:
      "Examine how software handles authentication, authorization, data, business logic, and user interactions.",
    icon: Code2,
    tags: ["Web", "API", "Mobile"],
  },
  {
    number: "03",
    title: "Cloud Infrastructure",
    description:
      "Assess cloud environments, configurations, identities, and services that support modern applications.",
    icon: CloudCog,
    tags: ["Cloud", "Identity", "Infrastructure"],
  },
  {
    number: "04",
    title: "Security Intelligence",
    description:
      "Connect technical findings and security signals to develop a clearer understanding of risk.",
    icon: Network,
    tags: ["Analysis", "Signals", "Risk"],
  },
];

export default function Technology() {
  return (
    <section className="border-b border-white/10 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
              Technology
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">
              Security engineering for modern systems.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-8 text-[#929292]">
              VaptStack combines security testing, technical analysis, and
              engineering to understand how digital systems behave under
              pressure and where they can be strengthened.
            </p>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Visual */}
          <div className="relative min-h-[500px] overflow-hidden border border-white/10 bg-[#121212]">
            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
            </div>

            <div className="absolute left-6 top-6 font-mono text-[9px] uppercase tracking-[0.16em] text-[#555555]">
              Security architecture
            </div>

            {/* Connecting lines */}
            <div className="absolute left-1/2 top-[18%] h-[18%] w-px -translate-x-1/2 bg-white/10" />
            <div className="absolute left-1/2 top-[57%] h-[18%] w-px -translate-x-1/2 bg-white/10" />
            <div className="absolute left-[25%] top-1/2 h-px w-[50%] -translate-y-1/2 bg-white/10" />

            {/* Top */}
            <div className="absolute left-1/2 top-[10%] flex h-20 w-44 -translate-x-1/2 items-center justify-center border border-[#FF2D8D]/40 bg-[#080808]">
              <div className="text-center">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                  Observe
                </p>
                <p className="mt-2 text-sm font-medium text-[#F5F5F5]">
                  Attack Surface
                </p>
              </div>
            </div>

            {/* Left */}
            <div className="absolute left-[8%] top-1/2 flex h-20 w-36 -translate-y-1/2 items-center justify-center border border-white/10 bg-[#080808]">
              <div className="text-center">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#555555]">
                  Test
                </p>
                <p className="mt-2 text-sm font-medium text-[#F5F5F5]">
                  Applications
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="absolute right-[8%] top-1/2 flex h-20 w-36 -translate-y-1/2 items-center justify-center border border-white/10 bg-[#080808]">
              <div className="text-center">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#555555]">
                  Assess
                </p>
                <p className="mt-2 text-sm font-medium text-[#F5F5F5]">
                  Infrastructure
                </p>
              </div>
            </div>

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#FF2D8D] bg-[#080808] shadow-[0_0_50px_rgba(255,45,141,0.12)]">
              <div className="text-center">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF2D8D]">
                  Analyze
                </p>

                <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[#F5F5F5]">
                  VaptStack
                </p>

                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-[#555555]">
                  Security Core
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="absolute left-1/2 bottom-[10%] flex h-20 w-44 -translate-x-1/2 items-center justify-center border border-white/10 bg-[#080808]">
              <div className="text-center">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#555555]">
                  Improve
                </p>
                <p className="mt-2 text-sm font-medium text-[#F5F5F5]">
                  Security Posture
                </p>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.14em] text-[#555555]">
              <span>DISCOVER</span>
              <span>TEST</span>
              <span>ANALYZE</span>
              <span>STRENGTHEN</span>
            </div>
          </div>

          {/* Areas */}
          <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
            {technologyAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.number}
                  className="border-b border-r border-white/10 p-7 lg:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#FF2D8D]">
                      {area.number}
                    </span>

                    <Icon className="h-5 w-5 text-[#555555]" />
                  </div>

                  <h3 className="mt-9 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#929292]">
                    {area.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#555555]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}