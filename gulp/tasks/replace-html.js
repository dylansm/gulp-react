var htmlreplace = require('gulp-html-replace');

module.exports = function(gulp, options) {
  gulp.task('replace-html', function() {
    return gulp.src(options.paths.html)
    .pipe(htmlreplace({
      'css': 'build/' + options.paths.styleOut,
      'js': 'build/' + options.paths.jsMinOut
    }))
    .pipe(gulp.dest(options.paths.dist));
  });
};
