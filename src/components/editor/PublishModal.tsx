
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

interface PublishModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPublish: (options: { customDomain?: string }) => Promise<any>;
}

export const PublishModal: React.FC<PublishModalProps> = ({
  isOpen,
  onClose,
  onPublish,
}) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [customDomain, setCustomDomain] = useState(false);
  const [domain, setDomain] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const handleProgressUpdate = (progressValue: number, log: string) => {
    setProgress(progressValue);
    setLogs((prev) => [...prev, log]);
  };

  const handlePublish = async () => {
    setStatus("uploading");
    setProgress(0);
    setLogs([]);
    
    try {
      const options = customDomain ? { customDomain: domain } : {};
      const result = await onPublish(options, handleProgressUpdate);
      
      if (result.success) {
        setStatus("success");
        setSiteUrl(result.url || "");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      setLogs(prev => [...prev, `Error: ${error instanceof Error ? error.message : 'Unknown error'}`]);
    }
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
          <DialogTitle>Publish Landing Page</DialogTitle>
          <DialogDescription>
            Publish your landing page directly to Netlify to share with the world.
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
                <Label htmlFor="custom-domain">Use custom domain</Label>
              </div>

              {customDomain && (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="domain" className="text-right">
                    Domain
                  </Label>
                  <Input
                    id="domain"
                    placeholder="example.com"
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
                {progress < 100 ? "Publishing..." : "Published successfully!"}
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
                <span className="text-lg font-medium">Publication completed successfully!</span>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-md">
                <p className="font-medium">Site URL:</p>
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
                    <p className="font-medium text-blue-800">Custom domain configuration</p>
                    <p className="text-sm text-blue-700 mt-1">
                      To finalize the configuration of domain {domain}, you need to update your DNS records. Follow the instructions in the logs above.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {status === "error" && (
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border border-red-100 rounded-md">
                <p className="font-medium text-red-800">Publication failed</p>
                <p className="text-sm text-red-700 mt-1">
                  There was an error publishing your landing page. Check the logs for details.
                </p>
              </div>
              
              <div className="max-h-40 overflow-y-auto border rounded-md p-2 text-sm font-mono bg-gray-50">
                {logs.map((log, index) => (
                  <div key={index} className="py-1">
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          {status === "idle" && (
            <Button type="submit" onClick={handlePublish}>
              Publish Now
            </Button>
          )}
          
          {status === "uploading" && (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Publishing...
            </Button>
          )}
          
          {(status === "success" || status === "error") && (
            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button variant="outline" onClick={resetState}>
                New Publication
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
