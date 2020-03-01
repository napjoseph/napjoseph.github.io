const htmlMinifier = require('html-minifier');

module.exports = function(eleventyConfig) {
  eleventyConfig.addTransform('htmlMinifier', function(content, outputPath) {
    if (outputPath.endsWith('.html')) {
      return htmlMinifier.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }

    return content;
  });

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    dir: {
      input: 'src',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts',
      output: 'dist',
    },
  };
};
