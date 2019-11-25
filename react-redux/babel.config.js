module.exports = {
  "presets": [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins":[
    "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from"
  ]
}