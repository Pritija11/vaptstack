export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "VaptStack",
    url: "https://vaptstack.com",

    description:
      "VaptStack is an emerging cybersecurity technology startup helping businesses identify, understand, and reduce security risks across modern digital systems.",

    email: "contact@vaptstack.com",

    telephone: "+977 1 5123456",

    address: {
      "@type": "PostalAddress",
      addressLocality: "New Baneshwor",
      addressRegion: "Kathmandu",
      addressCountry: "NP",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}