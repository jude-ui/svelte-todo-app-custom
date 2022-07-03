const production = process.env.NODE_ENV === 'production'

module.exports = {
  babelOptions() {
    return {
      plugins: production
        ? ['transform-remove-console']
        : []
    }
  }
}