
import { MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display text-center text-primary mb-12">
          O que outras pessoas estão dizendo:
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <MessageSquare className="w-8 h-8 text-accent" />
                <div>
                  <h3 className="font-semibold">Ronald Crawford</h3>
                </div>
              </div>
              <p className="text-gray-700">
                "Acabei de ter minha primeira experiência com a Manus para web design e estou realmente impressionado! O agente criou uma landing page HTML/CSS completa com um logotipo personalizado que realmente parecia profissional."
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <MessageSquare className="w-8 h-8 text-accent" />
                <div>
                  <h3 className="font-semibold">Julian Goldie</h3>
                </div>
              </div>
              <p className="text-gray-700">
                "A diferença é gritante: Humanos precisam de instruções detalhadas, fazem perguntas esclarecedoras, ficam presos em questões técnicas. Manus descobre o que fazer a partir de instruções vagas, resolve seus próprios problemas."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
