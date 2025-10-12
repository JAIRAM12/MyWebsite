export default {
  plugins: {
    '@tailwindcss/postcss': {},
    '@fullhuman/postcss-purgecss': {
      content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx',
        './public/index.html'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: [/^nav-/, /^btn-/, /^card-/, /^icon-/, /^tag-/, /^footer-/, /^hero-/, /^faq-/, /^h[1-4]-/],
        deep: [/reveal-on-scroll/, /is-visible/, /show/]
      }
    },
    autoprefixer: {},
  }
}