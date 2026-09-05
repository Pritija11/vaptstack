import Hero from "@/components/sections/Hero";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
import WhyVaptStack from "@/components/sections/WhyVaptStack";
import Technology from "@/components/sections/Technology";
import ResearchPreview from "@/components/sections/ResearchPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <SolutionsOverview />
      <WhyVaptStack />
      <Technology />
      <ResearchPreview />
      <FinalCTA />
    </main>
  );
}