module.exports = function(gulp, options, browserSync) {
  var normalizedPath = require("path").join(__dirname, ".");
  require("fs").readdirSync(normalizedPath).forEach(function(file) {
    if (file.match(/\.js$/) !== null && file !== 'index.js') {
      require('./' + file)(gulp, options, browserSync);
    }
  });
  // require('./browser-sync.js')(gulp, options, browserSync);
  // require('./build-js.js')(gulp, options, browserSync);
  // require('./build-styles.js')(gulp, options);
  // require('./clean.js')(gulp, options);
  // require('./compress-text.js')(gulp, options);
  // require('./copy-html.js')(gulp, options);
  // require('./process-styles.js')(gulp, options, browserSync);
  // require('./replace-html.js')(gulp, options);
  // require('./set-production.js')(gulp, options);
  // require('./transpile-js.js')(gulp, options, browserSync);
  // require('./watch.js')(gulp, options, browserSync);
};
