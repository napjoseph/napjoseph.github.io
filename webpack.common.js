const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';
const outputPath = path.resolve(__dirname, 'dist');

const optimization = {
  splitChunks: isProd && { chunks: 'all' },
  minimize: isProd,
  // prints more readable module names in the browser console on HMR updates, in dev
  namedModules: !isProd,
  // prevent emitting assets with errors, in dev
  noEmitOnErrors: !isProd,
};

/** Set to false to disable hashing of generated files. */
const useHash = false;
const filenamePattern = name => (useHash && isProd ? `${name}.[hash]` : name);
const chunkFileNamePattern = useHash && isProd ? '[id].[hash]' : '[id]';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    scripts: path.resolve(__dirname, 'src', 'scripts', 'index.ts'),
    styles: path.resolve(__dirname, 'src', 'styles', 'index.scss'),
  },
  output: {
    path: outputPath,
    filename: `${filenamePattern('[name]')}.js`,
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${filenamePattern('styles')}.css`,
      chunkFilename: `${chunkFileNamePattern}.css`,
      ignoreOrder: false,
    }),
    new ManifestPlugin({
      fileName: '../src/_includes/.webpack/manifest.json',
    }),
  ],
  optimization,
};
