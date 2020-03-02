const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')('tailwind.config.js');

// BUG: https://github.com/FullHuman/purgecss/issues/296
const purgecssConfig = require('./purgecss.config');
const purgecss = require('@fullhuman/postcss-purgecss')(purgecssConfig);

const SRC_DIR = './src';
const OUT_DIR = './dist';

const paths = {
  scripts: {
    source: `${SRC_DIR}/scripts/index.ts`,
    output: `${OUT_DIR}/main.js`,
  },
  styles: {
    source: `${SRC_DIR}/styles/index.scss`,
    output: `${OUT_DIR}/main.css`,
  },
};

const postCssPlugins = [
  tailwindcss,
  require('autoprefixer'),
  ...(mix.inProduction() ? [purgecss] : []),
];

mix
  .ts(paths.scripts.source, paths.scripts.output)
  .sass(paths.styles.source, paths.styles.output)
  .options({
    processCssUrls: false,
    postCss: postCssPlugins,
  });
