const rimraf = require('rimraf');
console.log('Removing `dist` folder...');
rimraf('./dist', function () {
  console.log('Done!');
});
