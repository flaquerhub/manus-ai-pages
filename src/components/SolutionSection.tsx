
import { Lightbulb, CheckCircle } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-dark to-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Lightbulb className="w-12 h-12 mx-auto mb-6 text-accent animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-display mb-8">A virada de jogo que ninguém viu chegando</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                alt="Tecnologia AI avançada"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-left space-y-4">
              <p className="text-lg">Descobri o poder dos agentes inteligentes verdadeiramente autônomos.</p>
              <p>Especificamente, o Manus.ai - a maior revolução no campo de IA desde a chegada do ChatGPT.</p>
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Fluxos para tradução de livros com qualidade SUPERIOR</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Geração de audiobooks profissionais</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Diagramação automática</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
