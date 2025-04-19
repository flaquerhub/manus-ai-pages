
import React from 'react';
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ImportButton = ({ onImport }: { onImport: (content: string) => void }) => {
  const { toast } = useToast();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const content = await file.text();
      onImport(content);
      toast({
        title: "Importação bem sucedida",
        description: "Sua landing page foi importada com sucesso!"
      });
    } catch (error) {
      toast({
        title: "Erro na importação",
        description: "Não foi possível importar o arquivo. Certifique-se que é um arquivo válido.",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImport}
        accept=".json,.zip"
        className="hidden"
      />
      <Button
        variant="outline"
        size="sm"
        className="text-white hover:bg-primary-dark"
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="w-4 h-4 mr-2" />
        Importar
      </Button>
    </>
  );
};

export default ImportButton;
