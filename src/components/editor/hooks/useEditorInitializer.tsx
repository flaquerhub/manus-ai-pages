
import { useEffect, useRef } from 'react';
import grapesjs, { Editor } from 'grapesjs';
import { useToast } from '@/hooks/use-toast';
import { createEditorConfig } from '../config/editorConfig';
import { registerComponents, setupEditorCommands, setupInitialContent } from '../utils/componentUtils';

interface UseEditorInitializerProps {
  containerRef: React.RefObject<HTMLDivElement>;
  isPreview: boolean;
  setEditor: React.Dispatch<React.SetStateAction<Editor | null>>;
  setIsEditorReady: React.Dispatch<React.SetStateAction<boolean>>;
  editor: Editor | null;
}

export const useEditorInitializer = ({
  containerRef,
  isPreview,
  setEditor,
  setIsEditorReady,
  editor,
}: UseEditorInitializerProps) => {
  const { toast } = useToast();
  const lastPreviewState = useRef(isPreview);

  // Inicialização do editor
  useEffect(() => {
    if (!containerRef.current || editor) return;

    const initEditor = () => {
      try {
        const editorInstance = grapesjs(createEditorConfig(containerRef.current!));
        registerComponents(editorInstance);
        setupEditorCommands(editorInstance);
        setupInitialContent(editorInstance);
        setEditor(editorInstance);
        setIsEditorReady(true);
      } catch (error) {
        console.error('Error initializing GrapesJS editor:', error);
        toast({
          title: "Error",
          description: "Failed to initialize the editor. Please try refreshing the page.",
          variant: "destructive",
        });
      }
    };

    setTimeout(initEditor, 100);

    return () => {
      if (editor) {
        editor.destroy();
        setEditor(null);
        setIsEditorReady(false);
      }
    };
  }, [containerRef, toast]);

  // Preview mode
  useEffect(() => {
    if (!editor || lastPreviewState.current === isPreview) return;
    try {
      if (isPreview) {
        document.querySelectorAll(".gjs-pn").forEach((panel) => {
          if (panel instanceof HTMLElement) panel.style.display = "none";
        });
        const canvasElement = document.querySelector(".gjs-cv-canvas");
        if (canvasElement instanceof HTMLElement) {
          canvasElement.style.width = "100%";
          canvasElement.style.height = "100%";
        }
        editor.runCommand("core:preview");
      } else {
        document.querySelectorAll(".gjs-pn").forEach((panel) => {
          if (panel instanceof HTMLElement) panel.style.display = "block";
        });
        const canvasElement = document.querySelector(".gjs-cv-canvas");
        if (canvasElement instanceof HTMLElement) {
          canvasElement.style.width = "calc(100% - 300px)";
          canvasElement.style.height = "100%";
        }
        editor.stopCommand("core:preview");
      }
      lastPreviewState.current = isPreview;
    } catch (error) {
      console.error('Error toggling preview mode:', error);
    }
  }, [editor, isPreview]);
};

