
import { useToast } from "@/hooks/use-toast";
import { exportToHtml, exportToZip, publishToNetlify, type PublishOptions } from "../utils/exportUtils";
import type { Editor } from "grapesjs";

export const useEditorActions = (editor: Editor | null) => {
  const { toast } = useToast();

  const getHtml = () => {
    if (!editor) return '';
    return exportToHtml(editor);
  };

  const saveProject = () => {
    if (!editor) return false;
    try {
      editor.store();
      toast({
        title: "Project Saved",
        description: "Your project has been saved to local storage.",
      });
      return true;
    } catch (error) {
      console.error('Error saving project:', error);
      toast({
        title: "Save Failed",
        description: "Failed to save project. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const downloadProject = async () => {
    if (!editor) return false;
    try {
      await exportToZip(editor);
      toast({
        title: "Export Successful",
        description: "Your project has been exported as a ZIP file.",
      });
      return true;
    } catch (error) {
      console.error('Error exporting project:', error);
      toast({
        title: "Export Failed",
        description: "Failed to export project. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const publishProject = async (options?: PublishOptions, onProgress?: (progress: number, log: string) => void) => {
    if (!editor) return { success: false, logs: ['Editor not initialized'] };

    try {
      const result = await publishToNetlify(editor, options, onProgress);

      if (result.success) {
        toast({
          title: "Publication Successful",
          description: `Your landing page is live at ${result.url}`
        });
      } else {
        toast({
          title: "Publication Failed",
          description: result.error || "Failed to publish. Please try again.",
          variant: "destructive"
        });
      }
      return result;
    } catch (error) {
      console.error('Error publishing project:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

      toast({
        title: "Publication Failed",
        description: `Error: ${errorMessage}`,
        variant: "destructive"
      });

      return {
        success: false,
        logs: [`Error: ${errorMessage}`],
        error: errorMessage
      };
    }
  };

  return {
    getHtml,
    saveProject,
    downloadProject,
    publishProject,
  };
};
