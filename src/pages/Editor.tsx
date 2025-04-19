
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Upload, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { GrapesJSEditor } from "@/components/editor/GrapesJSEditor";

const Editor = () => {
  const [isPreview, setIsPreview] = useState(false);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handlePublish = async () => {
    setIsLoading(true);
    toast({
      title: "Preparando arquivos para publicação",
      description: "Aguarde enquanto empacotamos sua página...",
    });

    // Simulando um processo de publicação
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Página publicada com sucesso!",
        description: "Acesse: https://sua-pagina.netlify.app",
        variant: "success",
      });
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-white p-3 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="hover:bg-primary-dark p-2 rounded-md">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg font-medium">Editor de Landing Page</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-white hover:bg-primary-dark"
            onClick={() => setIsPreview(!isPreview)}
          >
            <Eye className="w-4 h-4 mr-2" />
            {isPreview ? "Editar" : "Visualizar"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-white hover:bg-primary-dark"
            onClick={() => {
              toast({
                title: "Alterações salvas",
                description: "Seu projeto foi salvo com sucesso",
              });
            }}
          >
            <Save className="w-4 h-4 mr-2" />
            Salvar
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={handlePublish}
            disabled={isLoading}
          >
            <Upload className="w-4 h-4 mr-2" />
            Publicar
          </Button>
        </div>
      </header>

      <div className="flex-1 flex">
        <GrapesJSEditor isPreview={isPreview} />
      </div>
    </div>
  );
};

export default Editor;
