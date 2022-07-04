const { babelOptions } = require('./babelOptions.js')

module.export = {
  preprocess: require('svelte-preprocess')({
    babel: babelOptions()
  })
}