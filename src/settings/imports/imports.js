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
// import * as Tone from "ton/e"
// let Tone = import("tone")

//create a synth and connect it to the master output (your speakers)
// var synth = new Tone.Synth().toMaster()

//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n")

export let imports = {
  id: "imports",
}

// console.log("imports")
