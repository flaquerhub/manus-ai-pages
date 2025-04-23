
import { useState } from 'react';
import type { Editor } from 'grapesjs';
import { useEditorInitializer } from './useEditorInitializer';
import { useEditorActions } from './useEditorActions';

interface UseEditorProps {
  containerRef: React.RefObject<HTMLDivElement>;
  isPreview?: boolean;
}

export const useEditor = ({ containerRef, isPreview = false }: UseEditorProps) => {
  const [editor, setEditor] = useState<Editor | null>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);

  useEditorInitializer({
    containerRef,
    isPreview,
    setEditor,
    setIsEditorReady,
    editor,
  });

  const { getHtml, saveProject, downloadProject, publishProject } = useEditorActions(editor);

  return {
    editor,
    isEditorReady,
    getHtml,
    saveProject,
    downloadProject,
    publishProject,
  };
};
