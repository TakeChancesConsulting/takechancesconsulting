import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://takechancesconsulting.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d9488",
};

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "Take Chances Consulting | Rethink HR & People Strategies",
    template: "%s | Take Chances Consulting",
  },
  description:
    "Expert HR and people strategy consulting with 25+ years of experience. Specialising in HR transformation, leadership development, organisational culture change, and talent management. Based in the UK, working globally.",
  keywords: [
    "HR consulting",
    "people strategy",
    "HR transformation",
    "leadership development",
    "organisational development",
    "talent management",
    "culture change",
    "HR business partner",
    "people and organisation development",
    "executive coaching",
    "UK HR consultant",
    "independent HR consultant",
  ],
  authors: [{ name: "Take Chances Consulting" }],
  creator: "Take Chances Consulting",
  publisher: "Take Chances Consulting",

  // Favicon and icons
  icons: {
    icon: [
      { url: "/favicon.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/favicon.jpg", type: "image/jpeg" },
    ],
  },

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Take Chances Consulting",
    title: "Take Chances Consulting | Rethink HR & People Strategies",
    description:
      "Rethink HR & People Strategies. Take Chances. Expert consulting with 25+ years of experience in HR transformation, leadership development, and organisational change.",
    images: [
      {
        url: `${siteUrl}/hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Take Chances Consulting - HR & People Strategy",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Take Chances Consulting | Rethink HR & People Strategies",
    description:
      "Rethink HR & People Strategies. Take Chances. Expert consulting with 25+ years of experience in HR transformation, leadership development, and organisational change.",
    images: [`${siteUrl}/hero.jpg`],
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Additional metadata
  category: "Business Consulting",
  classification: "HR Consulting Services",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Take Chances Consulting",
  description:
    "Expert HR and people strategy consulting with 25+ years of experience in HR transformation, leadership development, organisational culture change, and talent management.",
  url: siteUrl,
  logo: `${siteUrl}/favicon.jpg`,
  image: `${siteUrl}/hero.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    geoRadius: "5000",
  },
  serviceType: [
    "HR Consulting",
    "Leadership Development",
    "Organisational Development",
    "Talent Management",
    "Culture Change Consulting",
    "HR Transformation",
  ],
  knowsAbout: [
    "Human Resources",
    "People Strategy",
    "Leadership Development",
    "Organisational Culture",
    "Talent Management",
    "HR Transformation",
    "Change Management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="teal">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
