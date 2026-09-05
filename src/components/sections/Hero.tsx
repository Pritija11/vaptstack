import Link from "next/link";
import { ArrowUpRight, Terminal, ShieldCheck, ScanSearch } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#080808] pt-[76px]">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Pink glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#FF2D8D]/10 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            <span className="h-px w-8 bg-[#FF2D8D]" />
            Cybersecurity Technology Startup
          </div>

          <h1 className="mt-7 max-w-4xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl xl:text-8xl">
            Find the weakness
            <span className="block text-[#FF2D8D]">
              before attackers do.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            VaptStack is an emerging cybersecurity technology startup focused
            on vulnerability assessment, penetration testing, application
            security, and security engineering for modern digital systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF6BB5] hover:shadow-[0_0_30px_rgba(255,45,141,0.2)]"
            >
              Explore solutions
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-[#F5F5F5] transition-colors hover:border-[#FF2D8D] hover:text-[#FF2D8D]"
            >
              Start a conversation
            </Link>
          </div>

          {/* Trust line */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[#555555]">
            <span>VAPT</span>
            <span>Application Security</span>
            <span>API Security</span>
            <span>Cloud Security</span>
          </div>
        </div>

        {/* Right technical visual */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="relative border border-white/10 bg-[#121212]">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <Terminal className="h-4 w-4 text-[#FF2D8D]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#929292]">
                  Security assessment
                </span>
              </div>

              <span className="font-mono text-[9px] text-[#555555]">
                VAPT / 001
              </span>
            </div>

            {/* Scan area */}
            <div className="relative p-6 lg:p-8">
              <div className="relative aspect-square border border-white/10">
                {/* Corner markers */}
                <span className="absolute left-0 top-0 h-4 w-px bg-[#FF2D8D]" />
                <span className="absolute left-0 top-0 h-px w-4 bg-[#FF2D8D]" />

                <span className="absolute right-0 top-0 h-4 w-px bg-[#FF2D8D]" />
                <span className="absolute right-0 top-0 h-px w-4 bg-[#FF2D8D]" />

                <span className="absolute bottom-0 left-0 h-4 w-px bg-[#FF2D8D]" />
                <span className="absolute bottom-0 left-0 h-px w-4 bg-[#FF2D8D]" />

                <span className="absolute bottom-0 right-0 h-4 w-px bg-[#FF2D8D]" />
                <span className="absolute bottom-0 right-0 h-px w-4 bg-[#FF2D8D]" />

                {/* Network lines */}
                <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 bg-white/10" />
                <div className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-y-1/2 bg-white/10" />

                <div className="absolute left-[22%] top-[28%] h-2 w-2 rounded-full bg-[#FF2D8D] shadow-[0_0_18px_rgba(255,45,141,0.8)]" />
                <div className="absolute right-[22%] top-[28%] h-2 w-2 rounded-full bg-white/40" />
                <div className="absolute left-[22%] bottom-[28%] h-2 w-2 rounded-full bg-white/40" />
                <div className="absolute right-[22%] bottom-[28%] h-2 w-2 rounded-full bg-[#FF2D8D] shadow-[0_0_18px_rgba(255,45,141,0.8)]" />

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#FF2D8D]/50 bg-[#080808] shadow-[0_0_50px_rgba(255,45,141,0.12)]">
                  <ScanSearch className="h-10 w-10 text-[#FF2D8D]" />
                </div>

                {/* Technical labels */}
                <span className="absolute left-4 top-4 font-mono text-[8px] uppercase tracking-[0.14em] text-[#555555]">
                  TARGET
                </span>

                <span className="absolute right-4 top-4 font-mono text-[8px] uppercase tracking-[0.14em] text-[#555555]">
                  SCAN
                </span>

                <span className="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-[0.14em] text-[#555555]">
                  SURFACE
                </span>

                <span className="absolute bottom-4 right-4 font-mono text-[8px] uppercase tracking-[0.14em] text-[#555555]">
                  ANALYZE
                </span>
              </div>

              {/* Status */}
              <div className="mt-5 grid grid-cols-3 border border-white/10">
                <div className="border-r border-white/10 p-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#555555]">
                    Surface
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#F5F5F5]">
                    Mapped
                  </p>
                </div>

                <div className="border-r border-white/10 p-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#555555]">
                    Weaknesses
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#F5F5F5]">
                    Identified
                  </p>
                </div>

                <div className="p-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#555555]">
                    Status
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#F5F5F5]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF2D8D]" />
                    Active
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-[#FF2D8D]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#555555]">
                  Security engineering
                </span>
              </div>

              <span className="font-mono text-[9px] text-[#555555]">
                READY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}