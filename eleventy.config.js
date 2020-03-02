const htmlMinifier = require('./src/_11ty/htmlMinifier');
const getWebpackAsset = require('./src/_11ty/getWebpackAsset');

module.exports = function(eleventyConfig) {
  eleventyConfig.addTransform('htmlMinifier', htmlMinifier);

  eleventyConfig.addShortcode('getWebpackAsset', getWebpackAsset);

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
