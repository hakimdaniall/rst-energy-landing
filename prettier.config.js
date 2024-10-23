module.exports = {
  printWidth: 100,
  singleQuote: true,
  twigFollowOfficialCodingStandards: false,
  twigMelodyPlugins: ['node_modules/prettier-plugin-twig-enhancements'],
  overrides: [
    {
      files: '*.njk',
      options: {
        parser: 'melody',
      },
    },
  ],
};
