var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var uglify      = require('gulp-uglify');
var streamify   = require('gulp-streamify');
var sourcemaps  = require('gulp-sourcemaps');

module.exports = function(gulp, options, browserSync) {
  gulp.task('build-js', function() {
    return browserify({
      entries: [options.paths.entryPoint],
      transform: options.browserify.transforms
    })
    .bundle()
    .pipe(source(options.paths.jsMinOut))
    .pipe(streamify(sourcemaps.init({ loadMaps: true })))
    .pipe(streamify(uglify()))
    .pipe(streamify(sourcemaps.write('.')))
    .pipe(gulp.dest(options.paths.distBuild))
    .pipe(browserSync.stream());
  });
};
