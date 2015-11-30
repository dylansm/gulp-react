var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Scripts
var babelify    = require('babelify');
var coffeeify   = require('coffeeify');

var options = {
  production: false,
  browserify: {
    transforms: [babelify, coffeeify]
  },
  gzip: {
    src: './dist/**/*.{html,xml,json,css,js}',
    options: {}
  },
  paths: {
    src:             './src',
    entryPoint:      './src/prejs/app.js',
    jsOut:           'app.js',
    jsMinOut:        'app.min.js',
    jsBundle:        './src/js',
    styleOut:        'app.css',
    styleEntryPoint: './src/precss/app.css',
    styleBundle:     './src/css',
    html:            './src/index.html',
    distBuild:       './dist/build',
    dist:            './dist'
  }
};

require('./gulp/tasks')(gulp, options, browserSync);

gulp.task('default', gulp.parallel('watch', 'transpile-js', 'process-styles', 'browser-sync'));
gulp.task('scripts', gulp.series('set-production', 'transpile-js', 'build-js'));
gulp.task('styles', gulp.series('process-styles', 'build-styles'));
gulp.task('build', gulp.series('scripts', 'styles', 'copy-html', 'replace-html', 'compress-text', 'browser-sync-prod'));
gulp.task('production', gulp.parallel('build'));
  // 'optimize-images',

