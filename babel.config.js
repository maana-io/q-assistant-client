const presets = [
  [
    '@babel/env',
    {
      targets: [
        "last 3 chrome version",
        "last 3 firefox version",
        "last 3 safari version",
        "last 3 edge version"
      ],
      useBuiltIns: 'usage',
      corejs: '3'
    }
  ]
]

const plugins = ['@babel/plugin-proposal-class-properties']

module.exports = { presets, plugins }
