var gzip = require('gulp-gzip');

module.exports = function(gulp, options) {
  gulp.task('compress-text', function() {
    return gulp.src(options.gzip.src)
      .pipe(gzip(options.gzip.options))
      .pipe(gulp.dest(options.paths.dist));
  });
};
