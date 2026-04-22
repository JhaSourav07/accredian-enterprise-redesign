import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LiveBackground } from "@/components/ui/LiveBackground";
import { LeadModalProvider } from "@/context/LeadModalContext";
import { LeadCaptureModal } from "@/components/ui/LeadCaptureModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce",
  description: "Empower your enterprise team with industry-leading programs in AI, Data Science, and Leadership. Customized learning paths to drive real business impact.",
  keywords: ["Enterprise training", "Data Science corporate training", "AI upskilling", "Product Management certification", "corporate learning programs", "Accredian Enterprise"],
  authors: [{ name: "Accredian" }],
  creator: "Accredian",
  publisher: "Accredian",
  metadataBase: new URL("https://enterprise.accredian.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Accredian Enterprise | Next-Gen Expertise For Your Enterprise",
    description: "Empower your team with future-ready skills, measurable outcomes, and a learning partner trusted by industry leaders.",
    url: "https://enterprise.accredian.com",
    siteName: "Accredian Enterprise",
    images: [
      {
        url: "/og-image.jpg", // Assumes you add an og-image.jpg to public/
        width: 1200,
        height: 630,
        alt: "Accredian Enterprise - Upskill Your Workforce",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise | Upskill Your Workforce",
    description: "Empower your enterprise team with industry-leading programs in AI, Data Science, and Leadership.",
    creator: "@accredian",
    images: ["/og-image.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <LeadModalProvider>
          <Navbar />
          <LiveBackground />
          <div className="pt-16 md:pt-20 flex-grow">
            {children}
          </div>
          <Footer />
          {/* Global lead capture modal — triggered from any "Enquire Now" button */}
          <LeadCaptureModal />
        </LeadModalProvider>
      </body>
    </html>
  );
}