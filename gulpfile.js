//  Settings -  Turn on/off build features


var settings = {
  clean: true,
  scripts: true,
  polyfills: true,
  styles: true,
  svgs: true,
  copy: true,
  reload: true
};

var gulp = require('gulp');
var gutil = require('gulp-util');
var log = require('gulplog');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');


var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var commonjs = require('rollup-plugin-commonjs');
var resolve = require('rollup-plugin-node-resolve');
var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify)');
// const { uglify } = = require('rollup-plugin-uglify')

var terser = require('rollup-plugin-terser');

const rollup = require('rollup');
const rollupTypescript = require('rollup-plugin-typescript');


var assign = require('lodash.assign');

var browserSync = require('browser-sync');

// Javascript


// add transformations here
// i.e. b.transform(coffeeify);
gulp.task('js', async () => {
  return console.log('js \n');


})


// Style
gulp.task('css', async function () {
  // var production = gutil.env.type === 'production';
  return console.log('css \n');
});

// Html
gulp.task('html', async function () {
  // var production = gutil.env.type === 'production';
  return console.log('html \n');
});

// Php
gulp.task('php', async function () {
  // var production = gutil.env.type === 'production';
  return console.log('php \n');
});

// Images
gulp.task('img', async function () {
  // var production = gutil.env.type === 'production';
  return console.log('images \n');
});

// Watch
gulp.task('watch', function () {
  return console.log('watch');
  // server.listen(35729, function (err) {
  //   if (err) {
  //     return console.log(err)
  //   };
  //   // Watch html files
  //   gulp.watch('src/**/*.html', ['html']);
  //   // Watch .scss files
  //   gulp.watch('src/**/*.scss', ['styles']);
  //   // Watch .js files
  //   gulp.watch('src/**/*.js', ['scripts']);
  //   // Watch image files
  //   gulp.watch('src/**/*.img', ['images']);
  // });
});

gulp.task('build', () => {
  return rollup.rollup({
    input: './src/index.js',
    plugins: [
      rollupTypescript(),
      commonjs(), // prise en charge de require
      resolve(),
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      }),
      uglify(),
      terser() // minification
    ]
  }).then(bundle => {
    return bundle.write({
      file: './dist/index.rollup.build.js',
      format: 'umd',
      name: 'library',
      sourcemap: true
    });
  });
});

// 
let v = async () => {
  return console.log("asd");
}

gulp.task('v', v);

var reloadBrowser = function (done) {
  if (!settings.reload) return done();
  browserSync.reload();
  done();
};

gulp.task('reloadBrowser', reloadBrowser);

gulp.task('serve', function (event) {
  connect.server({
    root: destinations.docs,
    port: 1987,
    livereload: true
  });
  // sets up a livereload that watches for any changes in the root
  watch({
      glob: [sources.html, sources.styles]
    })
    .pipe(connect.reload());
});

gulp.task('default', function () {
  gulp.parallel('html', 'css', 'js', 'php', 'img', 'watch');
});
