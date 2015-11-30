var postcss              = require('gulp-postcss');
var mqpacker             = require('css-mqpacker');
var csswring             = require('csswring');
var sourcemaps  = require('gulp-sourcemaps');

module.exports = function(gulp, options) {
  gulp.task('build-styles', function() {
    var processors = [
      mqpacker,
      csswring
    ];

    return gulp.src(options.paths.styleBundle + '/' + options.paths.styleOut)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(options.paths.distBuild));
  });
};
