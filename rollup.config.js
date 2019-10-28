// rollup.config.js

// var fs = require("fs");
// const rollup = require('rollup');

import progress from 'rollup-plugin-progress';
import filesize from 'rollup-plugin-filesize';
// import visualizer from 'rollup-plugin-visualizer';
// import helpers from 'babel-plugin-external-helpers';

import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import {
  uglify
} from 'rollup-plugin-uglify'
import {
  terser
} from 'rollup-plugin-terser';
// import copy from 'rollup-plugin-copy';
// import sass from 'rollup-plugin-sass';
import scss from 'rollup-plugin-scss';

// import html from 'rollup-plugin-fill-html';

import dev from 'rollup-plugin-dev';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

// import serve from 'rollup-plugin-serve';
// import phpServer from 'rollup-plugin-php-server';
// import browserSync from 'rollup-plugin-browsersync';
// import livereload from 'rollup-plugin-livereload';

let graph = require("rollup-plugin-graph");
let graphOptions = {
  prune: true
};

export default {
  input: 'src/index.js',
  // treeshake: {},
  output: {
    // dir: '',
    file: "dist/index.rollup.js",
    format: "umd",
    // cjs: The CommonJS module that typically targetted for the Node.js environment.
    // amd: The AMD module which usually used in the browser.
    // umd: The UMD module which often use to target both the Node.js and the browser environments.
    // es: The ES module itself.
    // iife: Which will wrap our bundle within the IIFE (Immediately-Invoked Function Expression) for browser usage.
    name: "play"
  },
  plugins: [
    globals(),
    builtins(),
    progress(),
    // visualizer(),
    filesize(),
    resolve({
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(), // prise en charge de require
    resolve({
      browser: true
    }),
    babel({
      extensions: ['.js', '.jsx', '.ts'],
      exclude: "node_modules/**", // only transpile our source code
      babelrc: false,
      // presets: [['babel-preset-env', { modules: false }], 'stage-3', 'react'],
      presets: [
        ['@babel/env', {
          loose: true,
          modules: false
        }]
      ],
      // plugins: ['external-helpers'],
      // externalHelpers: true,
      runtimeHelpers: true,
    }),
    uglify(),
    terser(), // minification
    // sass(),
    // scss({output: 'dist'}), // ERROR - will output compiled styles to bundle.css,
    // serve('dist'),
    // phpServer({
    // port: 17365
    // }),
    // browserSync({
    //   proxy: 'localhost:17365'
    // }),
    // livereload({
    //   watch: 'dist',
    //   verbose: true, // Disable console output

    //   // other livereload options
    //   // https: {
    //   //   key: fs.readFileSync('keys/agent2-key.pem'),
    //   //   cert: fs.readFileSync('keys/agent2-cert.pem')
    //   // }
    // }),
    // graph(),
    // dev('dist/', { port: 3021 }),
    // html({
    //   dest: "dist/",
    //   // ...
    //   onlinePath: '//www.valmor.net.br/dist/'
    // }),
    // html({
    // include: '**/*.html',
    // htmlMinifierOptions: {
    //   collapseWhitespace: true,
    //   collapseBooleanAttributes: true,
    //   conservativeCollapse: true,
    //   minifyJS: true
    // },
    // template: 'src/index.html',
    // filename: 'index.html'
    // }),
    // copy({
    // targets: [
    // { src: 'src/**/*.html', dest: 'dist/' },
    // { src: ['assets/fonts/arial.woff', 'assets/fonts/arial.woff2'], dest: 'dist/public/fonts' },
    // { src: 'assets/images/**/*', dest: 'dist/public/images' }
    // ]
    // })
  ],
  watch: {
    // chokidar,
    // clearScreen,
    // exclude,
    // include
  }
};
