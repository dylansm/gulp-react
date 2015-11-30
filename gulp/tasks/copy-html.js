module.exports = function(gulp, options) {
  gulp.task('copy-html', function() {
    return gulp.src(options.paths.html)
      .pipe(gulp.dest(options.paths.dist));
  });
};
