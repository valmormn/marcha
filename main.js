// main.js

// var fs = require("fs")
// const fs = require("fs-extra")
const chalk = require("chalk")

// const chokidar = require("chokidar")
// const exec = require("child_process")

// var sass = require("node-sass")
// var browserify = require("browserify")
// var babelify = require("babelify")

// let server = require("./scripts/server/server.js")

// chokidar.watch("./src").on("all", (event, path) => {
// console.log(event, path)
// clear()
// })

let fuckthatshit = () => {
  // Watch changes in src directory
  // chokidar.watch("./src").on("all", (event, path) => {
  //   console.log(event, path)
  //   // clear();
  // })
}

try {
  // a path we KNOW is totally bogus and not a module
  //  require('./apps/npm-debug.log/app.js')
  fuckthatshit()
} catch (e) {
  console.log("oh no big error")
  console.log(e)
}

// const express = require("express")
// const next = require("next");
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dir: ".", dev });
// const handle = app.getRequestHandler();

// nodemon

// Combine styled and normal strings
let x = "Running ./main.js"
const log = console.log
log(chalk.blue(x) + chalk.red("!"))
log(chalk.blue.bgRed.bold("Hello world!"))
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"))
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"))

// With async/await:
// async function html() {
//   try {
//     await fs.copy("./src/**/*.html", "dist/").then(() => {
//       console.log("success!")
//     })

//     console.log("html")

//     console.log("success!")
//   } catch (err) {
//     console.log("fuck that shit!")
//     console.error(err)
//   }
// }

// html()

// Nest styles of the same type even (color, underline, background)
// log(
//   chalk.green(
//     "I am a green line " +
//       chalk.blue.underline.bold("with a blue substring") +
//       " that becomes green again!"
//   )
// )

// ES2015 template literal
// log(`
// CPU: ${chalk.red("90%")}
// RAM: ${chalk.green("40%")}
// DISK: ${chalk.yellow("70%")}
// `)

// ES2015 tagged template literal
// log(chalk `
// CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${ram.used / ram.total * 100}%}
// DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// `);

// Use RGB colors in terminal emulators that support it.
// log(chalk.keyword("orange")("Yay for orange colored text!"))
// log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"))
// log(chalk.hex("#DEADED").bold("Bold gray!"))

// console.log(chalk.blue("Hello world!"))

// console.log(server.v);
// console.log(server.wtf);

// console.log("main")

// browserify({
//     debug: true
//   })
//   .transform(babelify)
//   .require("src/index.js", {
//     entry: true
//   })
//   .bundle()
//   .on("error", function (err) {
//     console.log("Error: " + err.message);
//   })
//   .pipe(fs.createWriteStream("dev/index.js"));

// destination.txt will be created or overwritten by default.
// fs.copyFile('src/index.html', 'dev/index.html', (err) => {
//   if (err) throw err;
//   console.log('src/index.html was copied to dev/index.html');
// });

//

// sass.render({file: scss_filename}, function(err, result) { /* ... */ });
// OR
// var result = sass.renderSync({file: scss_filename});

// https://github.com/paulmillr/chokidar
// Watch changes in src directory
// chokidar
//   .watch('./src')
//   .on('all', (event, path) => {
//     console.log(event, path);

//     exec('npm run dev', function (error, stdout, stderr) {
//       if (error) {
//         console.log(error.code);
//       }
//     });

//   });

// exec('http-server -o -p 7521 ./dev/', function(error, stdout, stderr) {
//   if (error) {
//     console.log(error.code);
//   }
// });

// var copyfiles = require('copyfiles');
// copyfiles([paths], opt, callback);
// copyfiles(['src/', 'dist/']);

// let a = () => {
//   console.log("ahhh eu to maluco2222")
//   return
// }

// a()
