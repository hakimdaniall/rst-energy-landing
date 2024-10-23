const pluginSass = require('eleventy-plugin-sass');
const prettier = require('prettier');

module.exports = function (eleventyConfig) {
  // Copy through
  eleventyConfig.addPassthroughCopy('./src/assets/images');
  eleventyConfig.addPassthroughCopy('./src/assets/fonts');
  eleventyConfig.addPassthroughCopy('./src/assets/js/vendors');
  eleventyConfig.addPassthroughCopy('./src/assets/vendor');

  // Watch targets
  eleventyConfig.addWatchTarget('./src/assets/js');

  // Template filters
  eleventyConfig.addFilter('json', (value) => JSON.stringify(value));

  // Plugins
  eleventyConfig.addPlugin(pluginSass, {
    watch: ['./src/assets/scss/**/*.scss'],
    outputDir: './dist/assets/css/',
    cleanCSS: false,
  });

  eleventyConfig.addTransform('html-prettier', function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      return prettier.format(content, { parser: 'html' });
    }

    return content;
  });

  // Globals
  return {
    dir: {
      includes: '_includes',
      input: 'src',
      layouts: '_layouts',
      output: 'dist',
    },
  };
};
