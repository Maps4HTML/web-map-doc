module.exports = {
  sidebar: {
    'Getting Started': [
      'intro',
      'installation',
      'building'
    ],
    'Element Reference': [
      'elements/mapml-viewer',
      'elements/map-caption',
      'elements/layer',
      'elements/mapml',
      'elements/extent',
      'elements/input',
      'elements/select',
      'elements/link',
      'elements/meta',
      'elements/feature',
      'elements/geometry',
      'elements/properties',
      'elements/span',
      'elements/map-a',
      'elements/style'
  ],
  'Element API Reference': [
    'api/mapml-viewer-api',
    'api/layer-api',
    'api/map-feature-api',
    'api/map-extent-api',
    'api/map-link-api',
    'api/map-style-api'
  ],
  'User Guide': [
    {
      type: 'category',
      label: 'Getting Started',
      key: 'user-guide-getting-started',
      items: [
        'user-guide/quick-start'
      ],
    },
    'user-guide/search',
    {
      'Styling': [
        'user-guide/creating-styles',
        'user-guide/using-styles'
      ],
      'Tutorials': [
        'user-guide/getting-started',
        'user-guide/modifying-map',
        'user-guide/custom-handlers'
      ]
    }
  ],
  'Browser Extension': [
    'extension/about',
    'extension/installation',
    'extension/features'
  ],
  Resources: [
    'resources/debug-mode',
    'resources/resources'
    ],
  },
};
