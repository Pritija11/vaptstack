import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/SEO/OrganizationSchema";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaptstack.com"),

  title: {
    default: "VaptStack | Cybersecurity Technology Startup",
    template: "%s | VaptStack",
  },

  description:
    "VaptStack is an emerging cybersecurity technology startup helping businesses identify, understand, and reduce security risks across modern digital systems.",
    
  alternates: {
  canonical: "/",
},
  keywords: [
    "VaptStack",
    "VaptStack startup",
    "VaptStack cybersecurity",
    "cybersecurity startup",
    "cybersecurity technology startup",
    "vulnerability assessment",
    "penetration testing",
    "VAPT",
    "web application security",
    "API security",
    "mobile security",
    "cloud security",
    "security auditing",
    "security intelligence",
  ],

  openGraph: {
    title: "VaptStack | Cybersecurity Technology Startup",
    description:
      "VaptStack is an emerging cybersecurity technology startup focused on vulnerability assessment, penetration testing, application security, and security engineering.",
    url: "https://vaptstack.com",
    siteName: "VaptStack",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <OrganizationSchema />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}