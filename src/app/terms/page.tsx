import type { Metadata } from "next";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms of Use | VaptStack",
  description:
    "Review the terms governing use of the VaptStack website, content, and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Header */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Legal
          </p>

          <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Terms of Use
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#929292]">
            These terms describe the general conditions for using the VaptStack
            website and accessing its content.
          </p>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#555555]">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Terms */}
      <section className="bg-[#121212]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="space-y-16">
            {/* 01 */}
            <section>
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                01
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Acceptance of terms
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  By accessing or using the VaptStack website, you agree to use
                  the website in accordance with these Terms of Use and
                  applicable laws and regulations.
                </p>

                <p>
                  If you do not agree with these terms, please do not use the
                  website.
                </p>
              </div>
            </section>

            {/* 02 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                02
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Website content
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  Content published on the VaptStack website is provided for
                  general informational purposes about our company,
                  cybersecurity focus, research interests, and services.
                </p>

                <p>
                  We make reasonable efforts to keep information accurate and
                  current, but we do not guarantee that all content will always
                  be complete, accurate, or up to date.
                </p>
              </div>
            </section>

            {/* 03 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                03
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Intellectual property
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  Unless otherwise stated, website content, branding, visual
                  elements, text, graphics, and related materials belong to
                  VaptStack or are used with appropriate permission.
                </p>

                <p>
                  You may access the website for personal or legitimate
                  business purposes. You may not reproduce, distribute, modify,
                  publish, or commercially exploit website content without
                  appropriate authorization.
                </p>
              </div>
            </section>

            {/* 04 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                04
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Acceptable use
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  You agree not to use the website in a way that could damage,
                  disable, overburden, or interfere with its operation,
                  availability, or security.
                </p>

                <p>
                  You must not attempt to gain unauthorized access to the
                  website, systems, infrastructure, accounts, or data, or use
                  the website for unlawful activity.
                </p>
              </div>
            </section>

            {/* 05 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                05
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Security testing boundaries
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  Any penetration testing, vulnerability assessment, or other
                  security testing performed by VaptStack should be conducted
                  only with appropriate authorization and an agreed scope.
                </p>

                <p>
                  Website content describing security testing is informational
                  and does not authorize testing of any system, application,
                  infrastructure, or service.
                </p>
              </div>
            </section>

            {/* 06 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                06
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                External links
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  The website may contain links to third-party websites or
                  services for convenience or reference.
                </p>

                <p>
                  VaptStack does not control those services and is not
                  responsible for their content, availability, security, or
                  privacy practices.
                </p>
              </div>
            </section>

            {/* 07 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                07
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                No professional advice
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  Information published on the VaptStack website is provided
                  for general informational purposes and is not intended to
                  replace professional legal, financial, cybersecurity,
                  technical, or other specialist advice.
                </p>

                <p>
                  Decisions based on website content should be evaluated
                  according to your own circumstances and, where appropriate,
                  with qualified professional advice.
                </p>
              </div>
            </section>

            {/* 08 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                08
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Availability
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  We may change, suspend, update, or discontinue parts of the
                  website at any time without prior notice.
                </p>

                <p>
                  We do not guarantee that the website will always be
                  available, uninterrupted, or free from errors.
                </p>
              </div>
            </section>

            {/* 09 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                09
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Limitation of liability
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  To the extent permitted by applicable law, VaptStack will not
                  be responsible for losses, damages, interruptions, or other
                  consequences arising from the use of, or inability to use,
                  the website or its content.
                </p>

                <p>
                  Nothing in these terms is intended to exclude or limit
                  liability where such exclusion or limitation is not permitted
                  by law.
                </p>
              </div>
            </section>

            {/* 10 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                10
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Changes to these terms
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  VaptStack may update these Terms of Use from time to time to
                  reflect changes to the website, our practices, or applicable
                  requirements.
                </p>

                <p>
                  Updated terms will be published on this page together with a
                  revised update date.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="border-t border-white/10 pt-16">
              <div className="border border-[#FF2D8D]/20 bg-[#080808] p-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                  Legal contact
                </p>

                <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[#F5F5F5]">
                  Questions about these terms?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#929292]">
                  Contact VaptStack if you have questions about these Terms of
                  Use or the website.
                </p>

                <a
                  href="mailto:contact@vaptstack.com"
                  className="mt-6 inline-block font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#FF2D8D] hover:text-[#FF6BB5]"
                >
                  contact@vaptstack.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}