import Link from "next/link";
import { ArrowUpRight, CircleCheck } from "lucide-react";

const statusItems = [
  {
    label: "Attack surface",
    status: "MAP",
  },
  {
    label: "Vulnerability",
    status: "FIND",
  },
  {
    label: "Security posture",
    status: "STRENGTHEN",
  },
];

export default function FinalCTA() {
  return (
    <section className="bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid overflow-hidden border border-white/10 bg-[#121212] lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div className="p-8 lg:p-14 xl:p-16">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
              Start a conversation
            </p>

            <h2 className="mt-6 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5] md:text-5xl lg:text-6xl">
              Know where your system is vulnerable.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#929292]">
              Whether you need vulnerability assessment, penetration testing,
              application security, or a broader security review, start with
              understanding the system.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF6BB5] hover:shadow-[0_0_30px_rgba(255,45,141,0.18)]"
              >
                Talk to VaptStack
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-[#F5F5F5] transition-colors hover:border-[#FF2D8D] hover:text-[#FF2D8D]"
              >
                Explore solutions
              </Link>
            </div>
          </div>

          {/* Right technical panel */}
          <div className="border-t border-white/10 bg-[#080808] lg:border-l lg:border-t-0">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#555555]">
                VaptStack / Security flow
              </span>

              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#FF2D8D]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF2D8D]" />
                Active
              </span>
            </div>

            <div className="p-6 lg:p-8">
              {/* Flow */}
              <div className="space-y-0">
                {statusItems.map((item, index) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between border border-white/10 bg-[#121212] p-5">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#555555]">
                          0{index + 1}
                        </p>

                        <p className="mt-2 text-sm font-medium text-[#F5F5F5]">
                          {item.label}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#FF2D8D]">
                        <CircleCheck className="h-3.5 w-3.5" />
                        {item.status}
                      </div>
                    </div>

                    {index < statusItems.length - 1 && (
                      <div className="ml-8 h-8 w-px bg-[#FF2D8D]/30" />
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom signal */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em]">
                  <span className="text-[#555555]">
                    Security state
                  </span>

                  <span className="text-[#F5F5F5]">
                    Ready for assessment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#555555]">
            Vulnerability · Testing · Security · Intelligence
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#555555]">
            VAPTSTACK / SECURE WHAT MATTERS
          </p>
        </div>
      </div>
    </section>
  );
}