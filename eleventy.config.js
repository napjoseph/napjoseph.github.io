// https://www.11ty.dev/docs/config/

module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-rss'));
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'));

  eleventyConfig.addFilter(
    'readableDate',
    require('./src/_11ty/filters/readableDate')
  );
  eleventyConfig.addFilter(
    'htmlDateString',
    require('./src/_11ty/filters/htmlDateString')
  );
  eleventyConfig.addFilter('head', require('./src/_11ty/filters/head'));

  eleventyConfig.setLibrary(
    'md',
    require('./src/_11ty/libraries/markdownLibrary')
  );

  eleventyConfig.addCollection(
    'tagsList',
    require('./src/_11ty/collections/tagsList')
  );

  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('home', 'home.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');

  eleventyConfig.addTransform(
    'htmlMinifier',
    require('./src/_11ty/transforms/htmlMinifier')
  );

  eleventyConfig.addPassthroughCopy({ 'src/_root_files': './' });

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
