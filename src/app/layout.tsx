import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import AnimationProvider from "@/components/animations/AnimationProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deep Red Designer | Luxury Fashion",
  description: "Crafting timeless elegance and uncompromising luxury. Discover our exquisite bridal couture and bespoke fashion at Phase 4 Bahria Town, Rawalpindi.",
  keywords: ["luxury boutique", "stitching studio", "bridal couture", "bespoke fashion", "Rawalpindi boutique", "Bahria Town boutique", "Pakistani fashion"],
  authors: [{ name: "Deep Red Designer" }],
  openGraph: {
    title: "Deep Red Designer | Luxury Fashion",
    description: "Begin your luxury journey. Dream bridal couture and bespoke masterpieces in Rawalpindi, Pakistan.",
    url: "https://pbcollection.com",
    siteName: "Deep Red Designer",
    images: [
      {
        url: "/og-image.jpg", // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: "PB Collection's Boutique",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PB Collection | Luxury Fashion",
    description: "Begin your luxury journey. Dream bridal couture and bespoke masterpieces in Rawalpindi, Pakistan.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://pbcollection.com"), // Example domain
};

// JSON-LD Schema for LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Deep Red Designer",
  "image": "https://pbcollection.com/og-image.jpg",
  "url": "https://pbcollection.com",
  "telephone": "+923319233258",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Corniche Road, beside anaajpur",
    "addressLocality": "Rawalpindi",
    "addressRegion": "Punjab",
    "postalCode": "46000",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.5467282,
    "longitude": 73.1213359
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "23:00"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-[var(--color-bg-dark)] text-white overflow-x-hidden antialiased selection:bg-[#D4AF37] selection:text-black`}
      >
        <AnimationProvider>
          <Navbar />
          <main className="relative">{children}</main>
        </AnimationProvider>
      </body>
    </html>
  );
}
