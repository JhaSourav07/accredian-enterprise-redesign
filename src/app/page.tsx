import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { Partnerships } from "@/components/sections/Partnerships";
import { Timeline } from "@/components/sections/Timeline"; // Import Timeline
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <Stats />
      <Partnerships />
      <Timeline /> {/* Add Timeline here */}
      <Testimonials />
      <CTA />
    </main>
  );
}