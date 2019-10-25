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

var assign = require('lodash.assign');

var browserSync = require('browser-sync');

// Javascript

// browsify
// gulp.task('browserify', async function () {
//   var production = gutil.env.type === 'production';
//   gulp.src(['./src/index.js'], {
//       read: false
//     })
//     //Browserify, and add source maps if this isn't a production build
//     .pipe(browserify({
//       debug: !production,
//       transform: ['reactify'],
//       extensions: ['.jsx']
//     }))
//     .on('prebundle', function (bundler) {
//       // Make React available externally for dev tools
//       bundler.require('react');
//     })
//     // Rename the destination file
//     .pipe(rename('bundle.js'))
//     // Output to the build directory
//     .pipe(gulp.dest('build/'));
// });

// var customOpts = {
//   entries: ['./src/index.js'],
//   debug: true
// };
// var opts = assign({}, watchify.args, customOpts);
// var b = watchify(browserify(opts));

// add transformations here
// i.e. b.transform(coffeeify);
gulp.task('js', async () => {
  // return console.log('js \n');
  b.bundle()
    // log errors if they happen
    .on('error', log.error.bind(log, 'Browserify Error'))
    .pipe(source('index.gulp.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({
      loadMaps: true
    })) // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist/'));

})
// gulp.task('js', bundle); // so you can run `gulp js` to build the file
// b.on('update', bundle); // on any dep update, runs the bundler
// b.on('log', log.info); // output build logs to terminal

// function bundle() {
//   return b.bundle()
//     // log errors if they happen
//     .on('error', log.error.bind(log, 'Browserify Error'))
//     .pipe(source('bundle.js'))
//     // optional, remove if you don't need to buffer file contents
//     .pipe(buffer())
//     // optional, remove if you dont want sourcemaps
//     .pipe(sourcemaps.init({
//       loadMaps: true
//     })) // loads map from browserify file
//     // Add transformation tasks to the pipeline here.
//     .pipe(sourcemaps.write('./')) // writes .map file
//     .pipe(gulp.dest('./dist/js/'));
// }

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
