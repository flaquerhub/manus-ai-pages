
import React, { useRef } from "react";
import "grapesjs/dist/css/grapes.min.css";
import "./editor.css";
import { useEditor } from "./hooks/useEditor";

interface GrapesJSEditorProps {
  isPreview?: boolean;
}

export const GrapesJSEditor: React.FC<GrapesJSEditorProps> = ({ isPreview = false }) => {
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const { isEditorReady } = useEditor({ 
    containerRef: editorContainerRef,
    isPreview
  });

  return (
    <div className="flex h-full w-full">
      <div className="gjs-editor-cont flex-1" ref={editorContainerRef}>
        <div className="panel__devices"></div>
        <div className="panel__basic-actions"></div>
        <div className="blocks-container"></div>
        <div className="panel__right"></div>
      </div>
    </div>
  );
};
