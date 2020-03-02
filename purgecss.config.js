// https://purgecss.com/configuration.html#configuration-file

module.exports = {
  content: ['./src/**/*.html', './src/**/*.liquid'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
};
