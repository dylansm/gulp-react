module.exports = function(gulp, options, browserSync) {
  gulp.task('watch', function() {
    gulp.watch(options.paths.html, gulp.parallel('copy-html'));
    gulp.watch('./src/precss/**/*.css', gulp.parallel('process-styles'));
    gulp.watch('./src/**/!(*.js|*.map|*.css)', gulp.parallel('test', browserSync.reload));
  });
};

