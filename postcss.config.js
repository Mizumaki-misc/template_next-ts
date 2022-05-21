module.exports = {
  plugins: [
    'tailwindcss/nesting',
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
          'custom-media-queries': true,
        },
        importFrom: './src/styles/mediaQuery.css',
      },
    ],
    'postcss-nesting',
  ],
};
