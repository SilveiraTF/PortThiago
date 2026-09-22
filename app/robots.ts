import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://thiagoforneli.com/sitemap.xml", // [EDITAR: domínio real]
  };
}
