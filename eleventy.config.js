const htmlMinifier = require('./src/_helpers/htmlMinifier');

module.exports = function(eleventyConfig) {
  eleventyConfig.addTransform('htmlMinifier', htmlMinifier);

  eleventyConfig.addPassthroughCopy({ 'src/_copied_directly': './' });

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
