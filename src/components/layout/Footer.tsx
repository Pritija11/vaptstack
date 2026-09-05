import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { navigationLinks } from "@/data/navigation";

const solutionLinks = [
  {
    label: "Vulnerability Assessment",
    href: "/solutions/vulnerability-assessment",
  },
  {
    label: "Penetration Testing",
    href: "/solutions/penetration-testing",
  },
  {
    label: "Web Application Security",
    href: "/solutions/web-application-security",
  },
  {
    label: "API Security",
    href: "/solutions/api-security",
  },
  {
    label: "Cloud Security",
    href: "/solutions/cloud-security",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="VaptStack"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#929292]">
              An emerging cybersecurity technology startup helping businesses
              identify, understand, and reduce security risks across modern
              digital systems.
            </p>

            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[#555555]">
              Cybersecurity Technology
              <br />
              Kathmandu / Nepal
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#F5F5F5]">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#929292] transition-colors hover:text-[#F5F5F5]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-[#F5F5F5]">
              Solutions
            </h3>

            <ul className="mt-5 space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#929292] transition-colors hover:text-[#F5F5F5]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#F5F5F5]">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:contact@vaptstack.com"
                className="flex items-center gap-3 text-sm text-[#929292] transition-colors hover:text-[#F5F5F5]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#FF2D8D]" />
                <span>contact@vaptstack.com</span>
              </a>

              <a
                href="tel:+97714123456"
                className="flex items-center gap-3 text-sm text-[#929292] transition-colors hover:text-[#F5F5F5]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#FF2D8D]" />
                <span>+977 1 5123456</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-[#929292]">
                <MapPin className="h-4 w-4 shrink-0 text-[#FF2D8D]" />
                <span>New Baneshwor, Kathmandu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VaptStack on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#929292] transition-all hover:border-[#FF2D8D] hover:text-[#FF2D8D]"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VaptStack on X"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#929292] transition-all hover:border-[#FF2D8D] hover:text-[#FF2D8D]"
            >
              <FaXTwitter className="h-4 w-4" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VaptStack on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#929292] transition-all hover:border-[#FF2D8D] hover:text-[#FF2D8D]"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-[#929292]">
            <span>© 2026 VaptStack</span>

            <Link
              href="/privacy"
              className="transition-colors hover:text-[#F5F5F5]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#F5F5F5]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}