
// Type definitions for GrapesJS
declare module 'grapesjs' {
  export interface EditorConfig {
    container: HTMLElement | string;
    height?: string;
    width?: string;
    storageManager?: StorageManagerConfig;
    deviceManager?: DeviceManagerConfig;
    styleManager?: StyleManagerConfig;
    blockManager?: BlockManagerConfig;
    panels?: PanelsConfig;
    plugins?: any[];
    pluginsOpts?: Record<string, any>;
    [key: string]: any;
  }

  export interface StorageManagerConfig {
    type?: string;
    autosave?: boolean;
    autoload?: boolean;
    stepsBeforeSave?: number;
    id?: string;
    [key: string]: any;
  }

  export interface DeviceManagerConfig {
    devices?: Device[];
    [key: string]: any;
  }

  export interface Device {
    name: string;
    width: string;
    widthMedia?: string;
    [key: string]: any;
  }

  export interface StyleManagerConfig {
    sectors?: Sector[];
    [key: string]: any;
  }

  export interface Sector {
    name: string;
    open?: boolean;
    properties?: string[] | Property[];
    [key: string]: any;
  }

  export interface Property {
    name: string;
    property?: string;
    type?: string;
    [key: string]: any;
  }

  export interface BlockManagerConfig {
    appendTo?: string | HTMLElement;
    blocks?: Block[];
    [key: string]: any;
  }

  export interface Block {
    id: string;
    label: string;
    category?: string;
    content: string | { [key: string]: any };
    media?: string;
    [key: string]: any;
  }

  export interface PanelsConfig {
    defaults?: Panel[];
    [key: string]: any;
  }

  export interface Panel {
    id: string;
    el: string;
    buttons?: Button[];
    resizable?: boolean | { [key: string]: any };
    [key: string]: any;
  }

  export interface Button {
    id: string;
    label?: string;
    command?: string;
    active?: boolean;
    togglable?: boolean;
    [key: string]: any;
  }

  export interface Editor {
    DomComponents: any;
    Commands: any;
    Panels: any;
    UndoManager: any;
    Config: any;
    Canvas: any;
    BlockManager: any;
    StyleManager: any;
    StorageManager: any;
    AssetManager: any;
    on(event: string, callback: Function): void;
    getHtml(): string;
    getCss(): string;
    getJs(): string;
    runCommand(command: string): void;
    stopCommand(command: string): void;
    setDevice(device: string): void;
    addComponents(components: string): any;
    getComponents(): any;
    getWrapper(): any;
    destroy(): void;
    store(): void;
    [key: string]: any;
  }

  // Update the default export to be callable directly
  const grapesjs: (config: EditorConfig) => Editor;
  export default grapesjs;
}

declare module 'grapesjs-preset-webpage' {
  const plugin: any;
  export default plugin;
}
