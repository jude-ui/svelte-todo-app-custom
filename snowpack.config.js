const { babelOptions } = require('./babelOptions.js')

module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-optimize',
    '@snowpack/plugin-postcss',
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
  },
  buildOptions: {
    out: './docs'
  }
}