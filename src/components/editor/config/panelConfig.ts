
export const PanelConfig = {
  defaults: [
    {
      id: "layers",
      el: ".panel__right",
      resizable: {
        maxDim: 350,
        minDim: 200,
        tc: false,
        cl: true,
        cr: false,
        bc: false,
        keyWidth: "flex-basis"
      }
    },
    {
      id: "panel-devices",
      el: ".panel__devices",
      buttons: [
        {
          id: "device-desktop",
          label: "Desktop",
          command: "set-device-desktop",
          active: true,
          togglable: false
        },
        {
          id: "device-tablet",
          label: "Tablet",
          command: "set-device-tablet",
          togglable: false
        },
        {
          id: "device-mobile",
          label: "Mobile",
          command: "set-device-mobile",
          togglable: false
        }
      ]
    }
  ]
};
