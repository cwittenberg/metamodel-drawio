/**
 * Copyright (c) 2006-2020, JGraph Ltd
 * Copyright (c) 2006-2020, draw.io AG
 */
// Overrides of global vars need to be pre-loaded
window.EXPORT_URL = 'REPLACE_WITH_YOUR_IMAGE_SERVER';
window.PLANT_URL = 'REPLACE_WITH_YOUR_PLANTUML_SERVER';
window.DRAWIO_BASE_URL = "https://draw.metamodel.cloud"; // Replace with path to base of deployment, e.g. https://www.example.com/folder
window.DRAWIO_VIEWER_URL = "https://draw.metamodel.cloud/js/viewer.min.js"; // Replace your path to the viewer js, e.g. https://www.example.com/js/viewer.min.js
window.DRAWIO_LIGHTBOX_URL = "https://draw.metamodel.cloud/."; //null; // Replace with your lightbox URL, eg. https://www.example.com
window.DRAW_MATH_URL = 'math/es5';
window.DRAWIO_CONFIG = `
{
    "language": "",
    "customFonts": [],
    "libraries": "general;uml;er;bpmn;",
    "plugins": [
      "plugins/sql.js",
      "plugins/svgdata.js",
      "plugins/update.js"
    ],
    "recentColors": [],
    "formatWidth": "240",
    "createTarget": false,
    "pageFormat": {
      "x": 0,
      "y": 0,
      "width": 850,
      "height": 1100
    },
    "search": true,
    "showStartScreen": false,
    "gridColor": "#d0d0d0",
    "darkGridColor": "#424242",
    "autosave": true,
    "resizeImages": null,
    "openCounter": 23,
    "dark": 1,
    "version": 18,
    "unit": 1,
    "isRulerOn": false,
    "ui": ""
  }
`; // Replace with your custom draw.io configurations. For more details, https://www.drawio.com/doc/faq/configure-diagram-editor
urlParams['sync'] = 'manual';
