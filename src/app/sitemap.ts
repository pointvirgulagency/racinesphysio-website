import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.racinesphysio.com";

  return [
    { url: baseUrl },
    { url: `${baseUrl}/blog` },
    { url: `${baseUrl}/blog/kinesitherapie-grossesse` },
    { url: `${baseUrl}/blog/reeducation-sportive` },
    { url: `${baseUrl}/blog/mal-de-dos-kinesitherapie` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/le-cabinet` },
    { url: `${baseUrl}/nos-traitements` },
    { url: `${baseUrl}/parcours-patients` },
  ];
}
