var postcss              = require('gulp-postcss');
var autoprefixer         = require('autoprefixer');
var cssnext              = require('cssnext');
var postcssBemLinter     = require('postcss-bem-linter');
var postcssNesting       = require('postcss-nesting');
var postcssImport        = require('postcss-import');
var postcssMixins        = require('postcss-mixins');

module.exports = function(gulp, options, browserSync) {
  gulp.task('process-styles', function() {
    var processors = [
      //postcssFilterPlugins(),
      postcssImport(),
      postcssBemLinter(),
      autoprefixer({browsers: ['last 1 version']}),
      cssnext({
        'browsers': ['last 1 version'],
        'customProperties': true,
        'colorFunction': true,
        'customSelectors': true,
        'sourcemap': true,
        'compress': false
      }),
      postcssNesting(),
      postcssMixins()
    ];

    return gulp.src(options.paths.styleEntryPoint)
    .pipe(postcss(processors))
    .pipe(gulp.dest(options.paths.styleBundle))
    .pipe(browserSync.stream());
  });
};
