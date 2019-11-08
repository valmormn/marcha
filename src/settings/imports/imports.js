// imports

// import "core-js"
import "core-js/stable"
import "regenerator-runtime/runtime"
import "@babel/polyfill"
// import "babel-polyfill"

import jquery from "jquery"
window.$ = window.jQuery = jquery
import { popper } from "popper.js"

import * as Rx from "rxjs/Observable"
console.log(Rx)

// import React from "react"
// import ReactDOM from "react-dom"

//

export let imports = {
  id: "imports",
}

// console.log("imports")
