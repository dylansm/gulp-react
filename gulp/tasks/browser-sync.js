module.exports = function(gulp, options, browserSync) {
  gulp.task('browser-sync', function() {
    browserSync.init({
      server: {
        baseDir: options.paths.src
      },
      port: 4000
    });
  });

  gulp.task('browser-sync-prod', function() {
    browserSync.init({
      server: {
        baseDir: options.paths.dist
      },
      xip: true,
      port: 4001
    });
  });
};
