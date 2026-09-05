"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const topics = [
  "Vulnerability Assessment",
  "Penetration Testing",
  "Web Application Security",
  "API Security",
  "Mobile Security",
  "Cloud Security",
  "Security Auditing",
  "Security Intelligence",
  "Research or Collaboration",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    event.currentTarget.reset();
  }

  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [submitted]);

  return (
    <main className="bg-[#080808] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2D8D]">
            Contact VaptStack
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
            Start with the security problem.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#929292]">
            Tell us about the application, infrastructure, API, cloud
            environment, or security challenge you want to understand.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#121212]">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Contact Info */}
          <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-10">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2D8D]">
              Get in touch
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
              Talk to the VaptStack team.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#929292]">
              We're interested in security testing, application security,
              infrastructure, and the problems that emerge as digital systems
              become more connected.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="mailto:contact@vaptstack.com"
                className="group flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-[#080808]">
                  <Mail className="h-4 w-4 text-[#FF2D8D]" />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#555555]">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-[#F5F5F5] transition-colors group-hover:text-[#FF2D8D]">
                    contact@vaptstack.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+97714123456"
                className="group flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-[#080808]">
                  <Phone className="h-4 w-4 text-[#FF2D8D]" />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#555555]">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-[#F5F5F5] transition-colors group-hover:text-[#FF2D8D]">
                    +977 1 5123456
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-[#080808]">
                  <MapPin className="h-4 w-4 text-[#FF2D8D]" />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#555555]">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-[#F5F5F5]">
                    New Baneshwor, Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#555555]">
                Security startup
              </p>

              <p className="mt-3 max-w-sm text-sm leading-7 text-[#929292]">
                VaptStack is an emerging cybersecurity technology startup
                focused on helping organizations understand and reduce digital
                security risk.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 lg:p-10">
            <div className="border border-white/10 bg-[#080808] p-6 lg:p-10">
              <div className="mb-8">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#555555]">
                  Project enquiry
                </p>

                <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">
                  Tell us what you're working on.
                </h2>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 border border-[#FF2D8D]/30 bg-[#FF2D8D]/5 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF2D8D] text-xs font-bold text-white">
                      ✓
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#F5F5F5]">
                        Message sent successfully.
                      </p>

                      <p className="mt-1 text-xs text-[#929292]">
                        Thanks for reaching out to VaptStack.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[9px] uppercase tracking-[0.15em] text-[#555555]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full border border-white/10 bg-[#121212] px-4 py-3.5 text-sm text-[#F5F5F5] outline-none transition-colors placeholder:text-[#555555] focus:border-[#FF2D8D]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[9px] uppercase tracking-[0.15em] text-[#555555]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full border border-white/10 bg-[#121212] px-4 py-3.5 text-sm text-[#F5F5F5] outline-none transition-colors placeholder:text-[#555555] focus:border-[#FF2D8D]"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block font-mono text-[9px] uppercase tracking-[0.15em] text-[#555555]"
                  >
                    Company <span className="normal-case text-[#666666]">(Optional)</span>
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="w-full border border-white/10 bg-[#121212] px-4 py-3.5 text-sm text-[#F5F5F5] outline-none transition-colors placeholder:text-[#555555] focus:border-[#FF2D8D]"
                  />
                </div>

                {/* Topic */}
                <div>
                  <label
                    htmlFor="topic"
                    className="mb-2 block font-mono text-[9px] uppercase tracking-[0.15em] text-[#555555]"
                  >
                    What can we help with?
                  </label>

                  <select
                    id="topic"
                    name="topic"
                    required
                    defaultValue=""
                    className="w-full border border-white/10 bg-[#121212] px-4 py-3.5 text-sm text-[#F5F5F5] outline-none transition-colors focus:border-[#FF2D8D]"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-[#121212]"
                    >
                      Select a topic
                    </option>

                    {topics.map((topic) => (
                      <option
                        key={topic}
                        value={topic}
                        className="bg-[#121212]"
                      >
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[9px] uppercase tracking-[0.15em] text-[#555555]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your security challenge..."
                    className="w-full resize-none border border-white/10 bg-[#121212] px-4 py-3.5 text-sm leading-7 text-[#F5F5F5] outline-none transition-colors placeholder:text-[#555555] focus:border-[#FF2D8D]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF2D8D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF6BB5] hover:shadow-[0_0_30px_rgba(255,45,141,0.18)]"
                >
                  Send message
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <p className="font-mono text-[8px] leading-5 tracking-[0.08em] text-[#555555]">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}