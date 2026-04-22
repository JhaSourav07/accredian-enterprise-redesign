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
  description: "Empower your team with industry-leading programs in AI, Data Science, and Leadership.",
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