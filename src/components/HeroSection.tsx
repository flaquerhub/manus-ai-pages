
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-primary-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            CRIE PÁGINAS DE VENDAS PROFISSIONAIS QUE CONVERTEM DE VERDADE EM MINUTOS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Finalmente você tem acesso à mesma estrutura das 15 etapas que gerou BILHÕES de dólares nos EUA, Brasil e resto do mundo - agora automatizada por um agente de IA que faz TODO O TRABALHO PARA VOCÊ
          </p>
          <div className="bg-black/20 rounded-lg p-4 mb-8 aspect-video flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors">
            <Play className="w-16 h-16" />
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent-dark text-primary-dark text-lg py-6 px-8">
            👉 QUERO CRIAR PÁGINAS QUE CONVERTEM AGORA 👈
          </Button>
        </div>
      </div>
    </section>
  );
};
