// index.js
"use strict";

// import 'index.scss';

import "core-js/stable";
import "regenerator-runtime/runtime";
// import "@babel/polyfill";

// import { Bootstrap } from "bootstrap";
// import "bootstrap";
// import "node_modules/bootstrap/dist/css/bootstrap.min.css";

// import React from 'react'
// import ReactDOM from 'react-dom'

// import * as Rx from "rxjs/Observable";
// console.log(Rx);

// import './index.scss';

import { core } from "./core/core.js";
import { settings } from "./settings/settings.js";
import { style } from "./style/style.js";
import { app } from "./app/app.js";

// var app = require('./app/app.js');
// var React = require('react');
// console.log("fuck222");

var sass = require("sass"); // or require('node-sass');

var result = sass.renderSync({file: "./index.scss"});

// var _ = require('underscore');

// import Preact from 'preact';

// var descriptions = items.map(item => (
//   <>
//     <dt>{item.name}</dt>
//     <dd>{item.value}</dd>
//   </>
// ));

const x = document.querySelector("#div");

// export let play = ()=>{
//   console.log(foo);
//   // logUnderscoreVersion();// rollup.config.js
// }

// app.f();

export let dev = {
  style: style,
  app: app,
  core: core,
  settings: settings,
  x: x
};

// window.v = dev;

// window.v.f = app.f;

Object.defineProperty(window, "dev", {
  value: dev,
  writable: false,
  enumerable: true
});

window.a = "as";

window.v = {};

!(function() {
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      window.v = {
        name: "web-graphics",
        author: "Valmor",
        site: "https://www.valmor.net.br/",
        style: style,
        app: app,
        core: core,
        settings: settings,
        x: x
        // app: app,
        // sys: sys,
        // vendor: vendor,
        // style: style
        // yeah: (() => {
        //   console.log('╭∩╮( ͡° ͜ʖ ͡° ͜)╭∩╮');
        // }),
        // aee: aee()
      };

      // hljs.initHighlightingOnLoad(); // isso nao ta funcionando... CORRIGIR

      // document.querySelectorAll('pre code').forEach((block) => {
      //   hljs.highlightBlock(block);
      // });

      // (() => {
      //   // console.log('🐧'); // ⚡⚡⚡
      // })();

      // console.log('( ͡°👅 ͡°)');

      // setup();

      var event = new Event("app-loaded");
      document.dispatchEvent(event);
    },
    false
  );
})();
console.log("🔥");
