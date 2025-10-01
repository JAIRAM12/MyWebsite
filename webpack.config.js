const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  // ...your existing webpack config
  plugins: [
    // other plugins
    new BundleAnalyzerPlugin({
      analyzerMode: 'server', // opens the report in browser
      openAnalyzer: true,     // automatically opens report after build
    }),
  ],
};
