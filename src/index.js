// index.js

// require("@babel/register");
// import React from 'react'
// import ReactDOM from 'react-dom'

// import './index.scss';
import { app } from './app/app.js';
import { style } from './style/style.js';
// var app = require('./app/app.js');
// var React = require('react');
// asdasdqw

// var _ = require('underscore');

// import Preact from 'preact';

// var descriptions = items.map(item => (
//   <>
//     <dt>{item.name}</dt>
//     <dd>{item.value}</dd>
//   </>
// ));

const x = document.querySelector('#div');

// export let play = ()=>{
//   console.log(foo);
//   // logUnderscoreVersion();// rollup.config.js

// }

// app.f();

export let dev = {
  style: style,
  app: app,
  x: x
}
