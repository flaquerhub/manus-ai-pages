import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Upload, Eye, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { GrapesJSEditor } from "@/components/editor/GrapesJSEditor";
import { PublishModal } from "@/components/editor/PublishModal";
import { useEditor } from "@/components/editor/hooks/useEditor";
import ImportButton from "@/components/editor/components/ImportButton";

const Editor: React.FC = () => {
  const [isPreview, setIsPreview] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { saveProject, downloadProject, publishProject } = useEditor({ 
    containerRef: editorContainerRef 
  });

  const handleSave = () => {
    if (saveProject()) {
      toast({
        title: "Changes saved",
        description: "Your project has been saved successfully",
      });
    }
  };

  const handleDownload = async () => {
    await downloadProject();
  };

  const handlePublish = async (options: { customDomain?: string }, onProgress?: (progress: number, log: string) => void) => {
    return await publishProject(options, onProgress);
  };

  const handleImport = (content: string) => {
    console.log('Importing content:', content);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-white p-3 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="hover:bg-primary-dark p-2 rounded-md">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg font-medium">Landing Page Editor</h1>
        </div>
        <div className="flex items-center gap-2">
          <ImportButton onImport={handleImport} />
          <Button
            variant="outline"
            size="sm"
            className="text-white hover:bg-primary-dark"
            onClick={() => setIsPreview(!isPreview)}
          >
            <Eye className="w-4 h-4 mr-2" />
            {isPreview ? "Edit" : "Preview"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-white hover:bg-primary-dark"
            onClick={handleSave}
          >
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-white hover:bg-primary-dark"
            onClick={handleDownload}
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsPublishModalOpen(true)}
          >
            <Upload className="w-4 h-4 mr-2" />
            Publish
          </Button>
        </div>
      </header>

      <div className="flex-1" ref={editorContainerRef}>
        <GrapesJSEditor isPreview={isPreview} />
      </div>

      <PublishModal 
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
        onPublish={handlePublish}
      />
    </div>
  );
};

export default Editor;
