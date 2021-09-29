const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack (config) {
    config.plugins.push(new MonacoEditorWebpackPlugin({
      languages: ['html', 'markdown', 'twig', 'typescript', 'json']
    }))
    config.optimization.splitChunks.cacheGroups.monaco = {
      test: /[\\/]node_modules[\\/](?!monaco).*/,
      name: 'monaco',
      chunks: 'all'
    }
  }
}
