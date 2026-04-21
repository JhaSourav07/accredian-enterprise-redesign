import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      {/* We will add Stats and Testimonials here next! */}
    </main>
  );
}