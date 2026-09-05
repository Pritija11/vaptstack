import type { Metadata } from "next";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | VaptStack",
  description:
    "Read the VaptStack privacy policy and learn how information submitted through the website may be handled.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Header */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Legal
          </p>

          <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Privacy Policy
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#929292]">
            This privacy policy explains how VaptStack may collect and use
            information when you interact with our website.
          </p>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#555555]">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Policy */}
      <section className="bg-[#121212]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="space-y-16">
            <section>
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                01
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Information we may collect
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  When you use the VaptStack website, you may voluntarily
                  provide information such as your name, email address, company
                  name, and the contents of a message submitted through our
                  contact form.
                </p>

                <p>
                  We may also receive basic technical information associated
                  with website usage, such as browser type, device information,
                  pages visited, and other information normally made available
                  through web requests or hosting infrastructure.
                </p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                02
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                How information may be used
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  Information you provide may be used to respond to enquiries,
                  communicate with you about your request, understand how we
                  can support your needs, and improve our website and services.
                </p>

                <p>
                  We do not intend to use information submitted through the
                  website for purposes unrelated to the reason it was provided,
                  except where required by law or necessary to protect our
                  systems and users.
                </p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                03
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Contact information
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  If you contact VaptStack through the website, we may retain
                  the information necessary to understand and respond to your
                  enquiry.
                </p>

                <p>
                  Please avoid submitting passwords, private keys, financial
                  credentials, or other highly sensitive information through a
                  general contact form.
                </p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                04
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Cookies and analytics
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  The website may use cookies or similar technologies where
                  necessary for functionality, security, analytics, or other
                  website operations.
                </p>

                <p>
                  Any third-party analytics or related services used by the
                  website may have their own privacy practices and policies.
                </p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                05
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Data security
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  VaptStack takes reasonable steps to protect information
                  handled through its website and systems from unauthorized
                  access, misuse, loss, or alteration.
                </p>

                <p>
                  However, no internet transmission or storage system can be
                  guaranteed to be completely secure.
                </p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                06
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Third-party services
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  The website may link to or rely on services operated by third
                  parties. Those services are governed by their own terms and
                  privacy policies.
                </p>

                <p>
                  VaptStack does not control those external services and is not
                  responsible for their privacy practices or content.
                </p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                07
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Your rights and choices
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  Depending on your location and applicable law, you may have
                  rights relating to personal information, including rights to
                  request access, correction, deletion, or other forms of
                  control over your information.
                </p>

                <p>
                  For privacy-related enquiries, contact us at{" "}
                  <a
                    href="mailto:contact@vaptstack.com"
                    className="text-[#FF2D8D] hover:text-[#FF6BB5]"
                  >
                    contact@vaptstack.com
                  </a>
                  .
                </p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#FF2D8D]">
                08
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                Changes to this policy
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#929292]">
                <p>
                  We may update this privacy policy as the website, our
                  practices, or applicable requirements change.
                </p>

                <p>
                  Any updated version will be published on this page with a
                  revised update date.
                </p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-16">
              <div className="border border-[#FF2D8D]/20 bg-[#080808] p-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
                  Privacy contact
                </p>

                <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[#F5F5F5]">
                  Questions about your information?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#929292]">
                  Contact VaptStack if you have questions about this policy or
                  how information submitted through the website is handled.
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