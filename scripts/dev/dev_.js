var fs = require("fs");
var sass = require('node-sass');
var browserify = require("browserify");
var babelify = require("babelify");

console.log('dev');

browserify({
    debug: true
  })
  .transform(babelify)
  .require("src/index.js", {
    entry: true
  })
  .bundle()
  .on("error", function (err) {
    console.log("Error: " + err.message);
  })
  .pipe(fs.createWriteStream("dev/index.js"));

// destination.txt will be created or overwritten by default.
fs.copyFile('src/index.html', 'dev/index.html', (err) => {
  if (err) throw err;
  console.log('src/index.html was copied to dev/index.html');
});

const chokidar = require('chokidar');

// Watch changes in src directory
// chokidar
//   .watch('./src')
//   .on('all', (event, path) => {
//     console.log(event, path);
//     // clear();
//   });

// 

// sass.render({file: scss_filename}, function(err, result) { /* ... */ });
// OR
// var result = sass.renderSync({file: scss_filename});

