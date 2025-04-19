
import { useState, useRef, useEffect } from 'react';
import grapesjs from 'grapesjs';
import type { Editor } from 'grapesjs';
import { useToast } from "@/hooks/use-toast";
import { createEditorConfig } from '../config/editorConfig';
import { registerComponents, setupEditorCommands, setupInitialContent } from '../utils/componentUtils';
import { exportToHtml, exportToZip, publishToNetlify, type PublishOptions } from '../utils/exportUtils';

interface UseEditorProps {
  containerRef: React.RefObject<HTMLDivElement>;
  isPreview?: boolean;
}

export const useEditor = ({ containerRef, isPreview = false }: UseEditorProps) => {
  const [editor, setEditor] = useState<Editor | null>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const { toast } = useToast();
  const lastPreviewState = useRef(isPreview);

  // Initialize the editor
  useEffect(() => {
    if (!containerRef.current || editor) return;

    const initEditor = () => {
      try {
        // Create the editor instance with the proper configuration
        const editorInstance = grapesjs.init(createEditorConfig(containerRef.current!));
        
        // Register custom components
        registerComponents(editorInstance);
        
        // Set up commands (undo/redo, device switching)
        setupEditorCommands(editorInstance);
        
        // Initialize with template content
        setupInitialContent(editorInstance);
        
        // Store editor reference
        setEditor(editorInstance);
        setIsEditorReady(true);
        
      } catch (error) {
        console.error('Error initializing GrapesJS editor:', error);
        toast({
          title: "Error",
          description: "Failed to initialize the editor. Please try refreshing the page.",
          variant: "destructive"
        });
      }
    };

    // Small delay to ensure container is mounted
    setTimeout(initEditor, 100);

    // Cleanup function
    return () => {
      if (editor) {
        editor.destroy();
        setEditor(null);
        setIsEditorReady(false);
      }
    };
  }, [containerRef, toast]);

  // Handle preview mode changes
  useEffect(() => {
    if (!editor || lastPreviewState.current === isPreview) return;
    
    try {
      if (isPreview) {
        // Hide editor panels
        document.querySelectorAll(".gjs-pn").forEach((panel) => {
          if (panel instanceof HTMLElement) {
            panel.style.display = "none";
          }
        });
        
        // Adjust canvas to full width/height
        const canvasElement = document.querySelector(".gjs-cv-canvas");
        if (canvasElement instanceof HTMLElement) {
          canvasElement.style.width = "100%";
          canvasElement.style.height = "100%";
        }
        
        // Run preview command
        editor.runCommand("core:preview");
      } else {
        // Show editor panels
        document.querySelectorAll(".gjs-pn").forEach((panel) => {
          if (panel instanceof HTMLElement) {
            panel.style.display = "block";
          }
        });
        
        // Restore canvas size
        const canvasElement = document.querySelector(".gjs-cv-canvas");
        if (canvasElement instanceof HTMLElement) {
          canvasElement.style.width = "calc(100% - 300px)";
          canvasElement.style.height = "100%";
        }
        
        // Stop preview command
        editor.stopCommand("core:preview");
      }
      
      lastPreviewState.current = isPreview;
    } catch (error) {
      console.error('Error toggling preview mode:', error);
    }
  }, [editor, isPreview]);

  // Editor actions
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
        description: "Your project has been saved to local storage."
      });
      return true;
    } catch (error) {
      console.error('Error saving project:', error);
      toast({
        title: "Save Failed",
        description: "Failed to save project. Please try again.",
        variant: "destructive"
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
        description: "Your project has been exported as a ZIP file."
      });
      return true;
    } catch (error) {
      console.error('Error exporting project:', error);
      toast({
        title: "Export Failed",
        description: "Failed to export project. Please try again.",
        variant: "destructive"
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
    editor,
    isEditorReady,
    getHtml,
    saveProject,
    downloadProject,
    publishProject
  };
};
