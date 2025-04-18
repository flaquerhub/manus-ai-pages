
import { ShieldCheck } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">
            Garantia inquestionável de 7 dias
          </h2>
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
              alt="Garantia de satisfação"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-lg mb-4">
            Quero que você tenha ZERO risco ao testar o Manus.ai.
          </p>
          <p className="text-lg mb-4">
            Por isso, estou oferecendo uma garantia completa de satisfação por 7 dias.
          </p>
          <p className="text-lg font-semibold text-primary">
            O risco é TODO meu.
          </p>
        </div>
      </div>
    </section>
  );
};
