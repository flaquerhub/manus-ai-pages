
import { Package, Gift, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const OfferSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Package className="w-12 h-12 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-display mb-6">O que você vai receber hoje:</h2>
          </div>
          
          <div className="grid gap-8">
            <Card className="bg-white/10 backdrop-blur">
              <CardHeader>
                <h3 className="text-2xl font-display">Pacote Principal</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Acesso à plataforma "copy paste"</h4>
                      <p className="text-gray-300">Valor Real: R$ 297,00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Gerador de Prompt auto explicativo</h4>
                      <p className="text-gray-300">Valor Real: R$ 247,00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-xl"></div>
              <Card className="bg-white/10 backdrop-blur relative">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Gift className="w-6 h-6 text-accent" />
                    <h3 className="text-2xl font-display">Bônus Exclusivos</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">10 exemplos de páginas de alto desempenho</h4>
                        <p className="text-gray-300">Valor Real: R$ 497,00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Técnicas avançadas de copywriting</h4>
                        <p className="text-gray-300">Valor Real: R$ 347,00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center bg-black/30 p-8 rounded-lg">
              <div className="mb-4">
                <p className="text-lg">VALOR TOTAL: <span className="line-through">R$ 1.388,00</span></p>
                <p className="text-3xl font-bold text-accent">Hoje apenas: R$ 37,00</p>
                <p className="text-sm text-gray-300">Uma redução de 97%!</p>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent-dark text-primary-dark text-lg py-6 px-8">
                👉 QUERO APROVEITAR ESTA OFERTA 👈
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
