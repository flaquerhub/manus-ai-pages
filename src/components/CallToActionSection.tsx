
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/20 rounded-lg p-8 mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <AlertTriangle className="w-6 h-6 text-accent animate-pulse" />
              <h2 className="text-2xl font-display">
                ATENÇÃO: Esta oferta é extremamente limitada!
              </h2>
            </div>
            <p className="text-lg mb-4">
              Oferta válida somente até 21/05/2025.
            </p>
            <p className="text-lg mb-4">
              Disponibilizamos apenas 100 vagas para esta primeira turma de acesso ao Manus.ai com este preço especial de lançamento.
            </p>
            <p className="text-lg">
              Mais de 70% das vagas já foram preenchidas. Não arrisque ficar de fora!
            </p>
          </div>
          
          <Button size="lg" className="bg-accent hover:bg-accent-dark text-primary-dark text-lg py-6 px-8 mb-12">
            👉 QUERO CRIAR PÁGINAS QUE CONVERTEM AGORA 👈
          </Button>
          
          <div className="space-y-6 text-gray-200">
            <p className="text-lg">
              P.S.: Lembre-se que em 2025, apenas quem dominar o uso de agentes inteligentes autônomos se destacará no marketing digital. Não fique para trás enquanto seus concorrentes aproveitam esta revolução tecnológica.
            </p>
            <p className="text-lg">
              P.P.S.: Esta oferta com todos os bônus e preço especial de lançamento estará disponível apenas pelos próximos 7 dias ou até esgotarem as 100 vagas iniciais. Além disso, você tem nossa garantia incondicional de 7 dias, então não há absolutamente nenhum risco em experimentar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
