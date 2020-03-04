const htmlMinifier = require('html-minifier');

module.exports = function(content, outputPath) {
  if (outputPath.endsWith('.html')) {
    return htmlMinifier.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    });
  }
  return content;
};
