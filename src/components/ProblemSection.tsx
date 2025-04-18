
import { AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-display text-center text-primary">
              A verdade que ninguém tem coragem de te contar:
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-lg">
                Em 2025, apenas os profissionais que dominarem o uso de agentes inteligentes autônomos sobreviverão no marketing digital.
              </p>
            </div>
            <div className="space-y-4 text-lg">
              <p>Enquanto você continua se arrastando com ferramentas obsoletas...</p>
              <p>Enquanto você segue catando milho tentando criar páginas de vendas preenchendo templates desajeitados...</p>
              <p>Enquanto você desperdiça horas preciosas vomitando textos genéricos em construtores de sites que não convertem no seu nicho...</p>
              <p>Seus concorrentes já estão revolucionando seus negócios com tecnologia de ponta que trabalha POR ELES.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
