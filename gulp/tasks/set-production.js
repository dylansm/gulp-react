module.exports = function(gulp, options) {
  gulp.task('set-production', function(done) {
    options.production = true;
    return done(null);
  });
};
