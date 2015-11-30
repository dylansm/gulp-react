var del = require('del');

module.exports = function(gulp, options) {
  gulp.task(clean);

  function clean(done) {
    return del([options.paths.distBuild], done);
  }
};
