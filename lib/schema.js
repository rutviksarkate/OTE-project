import { company, offices } from "./site";

export function organizationSchema() {
  const hq = offices[0];
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    url: company.url,
    email: company.email,
    description: company.description,
    logo: `${company.url}/images/brand/ote-projects-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: hq.lines.join(", "),
      addressLocality: hq.city,
      addressCountry: "AE",
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href ? `${company.url}${item.href}` : undefined,
    })),
  };
}

export function serviceSchema({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${company.url}${path}`,
    areaServed: ["AE", "IN", "NG"],
    provider: { "@type": "Organization", name: company.legalName, url: company.url },
  };
}
