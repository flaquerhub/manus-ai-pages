
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { StorySection } from "@/components/StorySection";
import { SolutionSection } from "@/components/SolutionSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { OfferSection } from "@/components/OfferSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FaqSection } from "@/components/FaqSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { Link } from "react-router-dom";
import { Edit2 } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-white font-sans relative">
      <Link 
        to="/editor" 
        className="fixed bottom-4 right-4 z-50 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-all"
        title="Editar esta página"
      >
        <Edit2 className="w-6 h-6" />
      </Link>
      
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
