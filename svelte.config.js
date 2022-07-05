const { babelOptions } = require('./babelOptions.js')

module.exports = {
  preprocess: require('svelte-preprocess')({
    babel: babelOptions()
  })
}