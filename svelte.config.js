const { babelOptions } = require('./babelOptions.js')

module.export = {
  preprocess: require('svelte-preprocess')({
    scss: {
      prependData: '@import "src/scss/main.scss";'
    },
    babel: babelOptions()
  })
}