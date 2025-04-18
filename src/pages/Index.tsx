
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { StorySection } from "@/components/StorySection";
import { SolutionSection } from "@/components/SolutionSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { OfferSection } from "@/components/OfferSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FaqSection } from "@/components/FaqSection";
import { CallToActionSection } from "@/components/CallToActionSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeroSection />
      <ProblemSection />
      <StorySection />
      <SolutionSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FaqSection />
      <CallToActionSection />
    </main>
  );
};

export default Index;
