var mochify = require('mochify');

module.exports = function(gulp, options) {
  gulp.task('test', function() {
    return mochify('./test/**/*.coffee', {
      reporter: 'spec',
      transform: [{ _: ['coffeeify'], 'extensions': '.coffee' }]});
  });
};
