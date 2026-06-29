export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/submissions", "/login"],
      },
    ],
    sitemap: [
      "https://devlofttech.com/sitemap.xml",
      "https://gym.devlofttech.com/sitemap.xml",
    ],
  };
}
