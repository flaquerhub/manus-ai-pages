
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Loader2, CheckCircle, Info } from "lucide-react";

interface NetlifyPublishModalProps {
  isOpen: boolean;
  onClose: () => void;
  html: string;
}

export const NetlifyPublishModal: React.FC<NetlifyPublishModalProps> = ({
  isOpen,
  onClose,
  html,
}) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [customDomain, setCustomDomain] = useState(false);
  const [domain, setDomain] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, message]);
  };

  const handlePublish = async () => {
    // Simulação do processo de publicação
    setStatus("uploading");
    setProgress(0);
    addLog("Preparando arquivos para publicação...");

    // Criar um arquivo zip (simulado)
    setTimeout(() => {
      setProgress(20);
      addLog("Arquivos compactados com sucesso.");
      
      setTimeout(() => {
        setProgress(40);
        addLog("Enviando para o Netlify...");
        
        setTimeout(() => {
          setProgress(70);
          addLog("Processando deploy...");
          
          setTimeout(() => {
            setProgress(100);
            setStatus("success");
            const randomString = Math.random().toString(36).substring(2, 8);
            const netlifyUrl = `https://${randomString}.netlify.app`;
            setSiteUrl(netlifyUrl);
            addLog(`Deploy concluído com sucesso! Site disponível em: ${netlifyUrl}`);
            
            if (customDomain) {
              addLog(`Configurando domínio personalizado: ${domain}`);
              addLog("Para finalizar a configuração, adicione os seguintes registros DNS:");
              addLog("- Registro CNAME para www: aponte para apex-domain.netlify.app");
              addLog("- Registro A para @: aponte para 104.198.14.52");
            }
          }, 1500);
        }, 1500);
      }, 1500);
    }, 1500);
  };

  const resetState = () => {
    setProgress(0);
    setStatus("idle");
    setLogs([]);
    setSiteUrl("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Publicar Landing Page</DialogTitle>
          <DialogDescription>
            Publique sua landing page diretamente no Netlify para compartilhar com o mundo.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {status === "idle" && (
            <>
              <div className="flex items-center space-x-2">
                <Switch
                  id="custom-domain"
                  checked={customDomain}
                  onCheckedChange={setCustomDomain}
                />
                <Label htmlFor="custom-domain">Usar domínio personalizado</Label>
              </div>

              {customDomain && (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="domain" className="text-right">
                    Domínio
                  </Label>
                  <Input
                    id="domain"
                    placeholder="exemplo.com.br"
                    className="col-span-3"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  />
                </div>
              )}
            </>
          )}

          {status === "uploading" && (
            <div className="space-y-4">
              <Progress value={progress} />
              <div className="text-sm text-muted-foreground">
                {progress < 100 ? "Publicando..." : "Publicado com sucesso!"}
              </div>
              <div className="max-h-40 overflow-y-auto border rounded-md p-2 text-sm font-mono">
                {logs.map((log, index) => (
                  <div key={index} className="py-1">
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}

          {status === "success" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-6 w-6" />
                <span className="text-lg font-medium">Publicação concluída com sucesso!</span>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-md">
                <p className="font-medium">URL do site:</p>
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {siteUrl}
                </a>
              </div>

              {customDomain && (
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-md flex items-start gap-2">
                  <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-800">Configuração de domínio personalizado</p>
                    <p className="text-sm text-blue-700 mt-1">
                      Para finalizar a configuração do domínio {domain}, você precisa atualizar seus registros DNS. Siga as instruções nos logs acima.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <DialogFooter>
          {status === "idle" && (
            <Button type="submit" onClick={handlePublish}>
              Publicar agora
            </Button>
          )}
          
          {status === "uploading" && (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Publicando...
            </Button>
          )}
          
          {status === "success" && (
            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose}>
                Fechar
              </Button>
              <Button variant="outline" onClick={resetState}>
                Nova publicação
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
