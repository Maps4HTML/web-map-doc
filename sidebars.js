module.exports = {
  someSidebar: {
    'Getting Started': ['installation'],
    'Mapping Elements': [
      'intro',
      'maps/mapml-viewer',
      'maps/web-map',
      {
        'Layers': [
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
    'api/custom-projections',
    'api/custom-rendering',
    'api/layer-api',
    'api/mapml-viewer-api',
  ],
  Resources: [
    'resources/debug-mode',
    'resources/resources',
    ],
  },
};
