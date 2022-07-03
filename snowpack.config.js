const { babelOptions } = require('./babelOptions.js')

module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-optimize',
    'babel-plugin-transform-remove-console',
    ['@snowpack/plugin-babel', {
      transformOptions: babelOptions()
    }]
  ],
  alias: {
    '~': './src'
  },
  devOptions: {
    open: 'none'
  }
}