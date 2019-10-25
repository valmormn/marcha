/**
 * Settings
 * Turn on/off build features
 */

var settings = {
  clean: true,
  scripts: true,
  polyfills: true,
  styles: true,
  svgs: true,
  copy: true,
  reload: true
};


/**
 * Paths to project folders
 */

var paths = {
  input: 'src/',
  output: 'dist/',
  scripts: {
    input: 'src/js/*',
    polyfills: '.polyfill.js',
    output: 'dist/js/'
  },
  styles: {
    input: 'src/sass/**/*.{scss,sass}',
    output: 'dist/css/'
  },
  svgs: {
    input: 'src/svg/*.svg',
    output: 'dist/svg/'
  },
  copy: {
    input: 'src/copy/**/*',
    output: 'dist/'
  },
  reload: './dist/'
};


/**
 * Template for banner to add to file headers
 */

var banner = {
  main: '/*!' +
    ' <%= package.name %> v<%= package.version %>' +
    ' | (c) ' + new Date().getFullYear() + ' <%= package.author.name %>' +
    ' | <%= package.license %> License' +
    ' | <%= package.repository.url %>' +
    ' */\n'
};


/**
 * Gulp Packages
 */

// General
var {
  gulp,
  src,
  dest,
  watch,
  series,
  parallel
} = require('gulp');
// var del = require('del');
// var flatmap = require('gulp-flatmap');
// var lazypipe = require('lazypipe');
// var rename = require('gulp-rename');
// var header = require('gulp-header');
// var package = require('./package.json');

// Scripts
// var jshint = require('gulp-jshint');
// var stylish = require('jshint-stylish');
// var concat = require('gulp-concat');
// var uglify = require('gulp-terser');
// var optimizejs = require('gulp-optimize-js');

// Styles
var sass = require('gulp-sass');
// var postcss = require('gulp-postcss');
// var prefix = require('autoprefixer');
// var minify = require('cssnano');

// SVGs
// var svgmin = require('gulp-svgmin');

// BrowserSync
var browserSync = require('browser-sync');


/**
 * Gulp Tasks
 */

// Watch for changes to the src directory
var startServer = function (done) {

  // Make sure this feature is activated before running
  if (!settings.reload) return done();

  // Initialize BrowserSync
  browserSync.init({
    server: {
      baseDir: paths.reload
    }
  });

  // Signal completion
  done();

};

// Reload the browser when files change
var reloadBrowser = function (done) {
  if (!settings.reload) return done();
  browserSync.reload();
  done();
};

// Watch for changes
var watchSource = function (done) {
  watch(paths.input, series(exports.default, reloadBrowser));
  done();
};


// /**
//  * Export Tasks
//  */

// // Default task
// // gulp
// exports.default = series(
// 	cleanDist,
// 	parallel(
// 		buildScripts,
// 		lintScripts,
// 		buildStyles,
// 		buildSVGs,
// 		copyFiles
// 	)
// );

// Watch and reload
// gulp watch
exports.watch = series(
  exports.default,
  startServer,
  watchSource
);
