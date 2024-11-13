const prettier = require('prettier');

module.exports = function (eleventyConfig) {
  // Passthrough Copy
  eleventyConfig.addPassthroughCopy('./src/assets/images');
  eleventyConfig.addPassthroughCopy('./src/assets/fonts');
  // eleventyConfig.addPassthroughCopy('./src/assets/js');
  eleventyConfig.addPassthroughCopy('./src/assets/vendor');

  eleventyConfig.addPassthroughCopy('./dist/assets/css'); // Ensure compiled CSS is copied

  // Watch targets
  eleventyConfig.addWatchTarget('./src/assets/scss'); // Watch SCSS files for changes
  eleventyConfig.addWatchTarget('./src/assets/js');    // Watch JS files for changes

  // Template filters
  eleventyConfig.addFilter('json', (value) => JSON.stringify(value));

  // HTML Prettier Transform
  eleventyConfig.addTransform('html-prettier', function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      return prettier.format(content, { parser: 'html' });
    }
    return content;
  });

  // Eleventy directory configuration
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      output: 'dist',
    },
  };
};