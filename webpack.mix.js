const mix = require('laravel-mix');

const paths = {
  scripts: {
    source: './src/scripts/index.ts',
    output: './dist/main.js',
  },
  styles: {
    source: './src/styles/index.scss',
    output: './dist/main.css',
  },
};

mix
  .ts(paths.scripts.source, paths.scripts.output)
  .sass(paths.styles.source, paths.styles.output);
