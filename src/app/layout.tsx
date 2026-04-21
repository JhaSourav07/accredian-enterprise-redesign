import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer"; // Import the footer
import { LiveBackground } from "@/components/ui/LiveBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce",
  description: "Empower your team with industry-leading programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We use flex and min-h-screen on the body to push the footer to the bottom */}
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <LiveBackground />
        <div className="pt-20 flex-grow"> 
          {children}
        </div>
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}