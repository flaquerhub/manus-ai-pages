
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = () => {
  const faqs = [
    {
      question: "Preciso ter conhecimentos técnicos para usar o Manus.ai?",
      answer: "Absolutamente NÃO. O Manus.ai foi desenvolvido para ser utilizado por QUALQUER pessoa, independentemente de conhecimentos técnicos. Eu mesmo criei sistemas complexos sem nunca ter estudado programação. Você apenas precisa saber o que deseja criar e o Manus.ai fará todo o trabalho técnico."
    },
    {
      question: "O que diferencia o Manus.ai de outras ferramentas de IA como o ChatGPT?",
      answer: "Enquanto ferramentas como ChatGPT apenas respondem perguntas e dão sugestões, o Manus.ai é um agente AUTÔNOMO que planeja e executa tarefas completas. Não estamos falando de uma IA que te ajuda, mas de uma IA que FAZ O TRABALHO POR VOCÊ - como ter um funcionário altamente qualificado trabalhando 24/7."
    },
    {
      question: "As páginas criadas pelo Manus.ai realmente convertem?",
      answer: "SIM. O sistema é baseado na estrutura de 15 blocos sequenciais que gerou BILHÕES em vendas ao redor do mundo. Esta arquitetura persuasiva foi extraída das páginas mais bem-sucedidas da história do marketing digital e adaptada para funcionar em qualquer nicho ou mercado."
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center text-primary mb-12">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
