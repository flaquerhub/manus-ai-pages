
import type { EditorConfig } from 'grapesjs';
import { BlockConfig } from './blockConfig';
import { StyleConfig } from './styleConfig';
import { DeviceConfig } from './deviceConfig';
import { PanelConfig } from './panelConfig';

export const createEditorConfig = (container: HTMLElement): EditorConfig => {
  return {
    container,
    height: "100%",
    width: "100%",
    storageManager: {
      type: "local",
      autosave: true,
      autoload: true,
      stepsBeforeSave: 1,
      id: "landing-page-editor"
    },
    deviceManager: DeviceConfig,
    styleManager: StyleConfig,
    blockManager: BlockConfig,
    panels: PanelConfig,
    plugins: ['gjs-preset-webpage'],
    pluginsOpts: {
      'gjs-preset-webpage': {}
    },
    // Avoid conflicts with React
    canvas: {
      scripts: [], 
      styles: []
    },
    commands: {
      defaults: [
        {
          id: 'set-device-desktop',
          run: (editor: any) => editor.setDevice('Desktop')
        },
        {
          id: 'set-device-tablet',
          run: (editor: any) => editor.setDevice('Tablet')
        },
        {
          id: 'set-device-mobile',
          run: (editor: any) => editor.setDevice('Mobile')
        }
      ]
    }
  };
};
