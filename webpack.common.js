const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const GoogleFontsPlugin = require('google-fonts-plugin');

module.exports = {
  entry: './src/scripts/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        {
          family: 'Fira Sans',
          variants: ['400', '400i', '700', '700i'],
          subsets: ['latin-ext'],
        },
        {
          family: 'Roboto',
          variants: ['400', '400i', '700', '700i'],
          subsets: ['latin-ext'],
        },
      ],
      formats: ['woff', 'woff2'],
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};
