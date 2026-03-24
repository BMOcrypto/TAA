import type { MetadataRoute } from "next/server"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://scaled.vercel.app"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/", "/private/", "/*.json$", "/search?*", "/thank-you"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/", "/private/", "/*.json$"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/", "/private/", "/*.json$"],
      },
      // Block malicious bots
      {
        userAgent: ["SemrushBot", "AhrefsBot", "MJ12bot", "DotBot", "BlexBot", "BLEXBot"],
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
