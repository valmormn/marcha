// index.js
"use strict";

// import 'index.scss';

// import jquery from "jquery";
// window.$ = window.jQuery = jquery;

import "bootstrap";
// import "node_modules/bootstrap/dist/css/bootstrap.min.css";

// import React from 'react'
// import ReactDOM from 'react-dom'

// import * as Rx from "rxjs/Observable";
// console.log(Rx);

// import './index.scss';

import {
  core
} from "./core/core.js";
import {
  settings
} from "./settings/settings.js";
import {
  style
} from "./style/style.js";
import {
  app
} from "./app/app.js";

// var app = require('./app/app.js');
// var React = require('react');
// console.log("fuck222");

$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
});

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

window.v = dev;

window.v.f = app.f;

Object.defineProperty(window, "dev", {
  value: dev,
  writable: false,
  enumerable: true
});

window.a = "as";
