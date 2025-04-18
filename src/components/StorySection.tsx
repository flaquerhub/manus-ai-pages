
import { User } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const StorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary rounded-full p-3">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display text-primary">Quem sou eu para falar sobre isso?</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Fabio Rocha"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg">Olá, meu nome é Fabio Rocha.</p>
                <p>Minha história não é convencional. Cursei direito, filosofia e teologia.</p>
                <p>Vivi quase uma década como voluntário dormindo nas ruas de São Paulo e favelas do Rio para resgatar pessoas carentes.</p>
                <p>Até me tornar dono de uma indústria gráfica milionária com 25 colaboradores.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
