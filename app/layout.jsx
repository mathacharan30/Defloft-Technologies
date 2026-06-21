import "./globals.css";
import dynamic from "next/dynamic";

// Firebase Auth uses browser-only APIs — never run on the server.
const Providers = dynamic(() => import("./providers"), { ssr: false });

export const metadata = {
  metadataBase: new URL("https://devlofttech.com"),
  title: {
    default: "Devloft Technologies — Web & ERP Solutions",
    template: "%s | Devloft Technologies",
  },
  description:
    "Devloft Technologies builds scalable websites and ERP software for modern businesses in Bangalore. From concept to deployment.",
  openGraph: {
    type: "website",
    siteName: "Devloft Technologies",
    title: "Devloft Technologies — Web & ERP Solutions",
    description:
      "Scalable websites and ERP software for modern businesses in Bangalore.",
    url: "https://devlofttech.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devloft Technologies",
    description: "Web & ERP solutions for modern businesses.",
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/logo.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-950">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
