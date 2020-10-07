const presets = [
  [
    '@babel/env',
    {
      targets: ['>0.2%', 'not dead', 'not ie <= 10', 'not op_mini all'],
      useBuiltIns: 'usage',
      corejs: '3',
    },
  ],
]

const plugins = ['@babel/plugin-proposal-class-properties']

module.exports = { presets, plugins }
