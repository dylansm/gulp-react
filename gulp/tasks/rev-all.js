require('gulp-rev-all');

module.exports = function(gulp, options, browserSync) {
  gulp.task('rev-all', function() {
    var revAll = new RevAll();
    return gulp.src(['assets/**'])
      .pipe(gulp.dest('build/assets'))
      .pipe(revAll.revision())
      .pipe(gulp.dest('build/assets'))
      .pipe(revAll.manifestFile())
      .pipe(gulp.dest('build/assets'));
  });
};
