import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Partnerships } from "@/components/sections/Partnerships";
import { Timeline } from "@/components/sections/Timeline";
import { DomainExpertise } from "@/components/sections/DomainExpertise";
import { CourseSegmentation } from "@/components/sections/CourseSegmentation";
import { SkillEnhancement } from "@/components/sections/SkillEnhancement";
import { OATFramework } from "@/components/sections/CATFramework";
import { Results } from "@/components/sections/Results";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Stats />
      <Partnerships />
      <Timeline />
      <DomainExpertise />
      <CourseSegmentation />
      <SkillEnhancement />
      <OATFramework />
      <Results />
      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  );
}