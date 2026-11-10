import type { Metadata } from "next";
import { fraunces, karla } from "@/app/fonts";
import { doctors, fullAddress, site } from "@/lib/content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moderndentalminot.com"),
  title: {
    default: "Modern Dental | Dentist in Minot, North Dakota",
    template: "%s | Modern Dental — Minot, ND",
  },
  description:
    "Modern Dental is a dental practice in Minot, North Dakota. Meet Dr. Christian Meland, Dr. Amber Wentz, and Dr. Eric Meland, and get in touch with our team.",
  keywords: [
    "dentists in Minot",
    "Minot dentist",
    "Minot dental services",
    "dental crowns",
    "dentures in Minot",
    "dental implants",
    "Invisalign Minot",
    "root canal",
    "teeth whitening",
  ],
  openGraph: {
    type: "website",
    title: "Modern Dental | Dentist in Minot, North Dakota",
    description:
      "A hometown dental practice built on relationships, modern education, and care that treats you like family.",
    siteName: "Modern Dental",
    locale: "en_US",
    url: "/",
    images: [
      {
        url: "/og.jpg",
        width: 1500,
        height: 590,
        alt: "The Modern Dental team in Minot, North Dakota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Dental | Dentist in Minot, North Dakota",
    description:
      "A hometown dental practice built on relationships, modern education, and care that treats you like family.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  url: "https://www.moderndentalminot.com",
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street} ${site.address.suite}`,
    addressLocality: site.address.city,
    addressRegion: site.address.stateShort,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  sameAs: [site.facebook],
  employee: doctors.map((doctor) => ({
    "@type": "Person",
    name: doctor.name,
    jobTitle: doctor.credentials ? `Dentist, ${doctor.credentials}` : "Dentist",
    image: `https://www.moderndentalminot.com${doctor.image}`,
  })),
  areaServed: "Minot, North Dakota",
  description: `Modern Dental, ${fullAddress}.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${karla.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-pine px-5 py-3 text-sm font-semibold text-cream focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
