import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for a clean, modern tech look
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

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
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {/* We add a top padding here so content doesn't hide behind the fixed navbar */}
        <div className="pt-20"> 
          {children}
        </div>
      </body>
    </html>
  );
}