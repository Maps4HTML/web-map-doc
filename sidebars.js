module.exports = {
  sidebar: {
    'Getting Started': [
      'installation',
      'intro',
    ],
    'Mapping Elements': [
      'maps/mapml-viewer',
      'maps/web-map',
      {
        'Layers': [
          'layers/layer',
          'layers/static-tiles',
          'layers/static-features',
          'layers/static-images',
          'layers/templated-tiles',
          'layers/templated-features',
          'layers/templated-images',
        ],
      },
      {
        'Other Elements': [
          'other-elements/map-a',
        ],
      },
  ],
  API: [
    'api/mapml-viewer-api',
    'api/layer-api',
    'api/custom-projections',
    'api/custom-rendering',
  ],
  Resources: [
    'resources/debug-mode',
    'resources/resources',
    ],
  },
};
