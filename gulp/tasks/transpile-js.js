var browserify  = require('browserify');
var watchify    = require('watchify');
var source      = require('vinyl-source-stream');

module.exports = function(gulp, options, browserSync) {
  gulp.task('transpile-js', function() {
    var watcher;
    var bStream = browserify({
      entries: [options.paths.entryPoint],
      transform: options.browserify.transforms,
      debug: true,
      cache: {}, packageCache: {}, fullPaths: true
    });

    if (options.production) {
      return bStream.bundle()
      .pipe(source(options.paths.jsOut))
      .pipe(gulp.dest(options.paths.jsBundle));
    } else {
      watcher = watchify(bStream);
      return watcher.on('update', function() {
        watcher.bundle()
        .pipe(source(options.paths.jsOut))
        .pipe(gulp.dest(options.paths.jsBundle))
        .pipe(browserSync.stream());
        //gulp.start('test');
      }).bundle()
      .pipe(source(options.paths.jsOut))
      .pipe(gulp.dest(options.paths.jsBundle))
      .pipe(browserSync.stream());
    }
  });
};
