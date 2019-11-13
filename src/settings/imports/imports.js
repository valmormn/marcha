// imports

import "core-js"
// import "core-js/stable"
import "regenerator-runtime/runtime"
import "@babel/polyfill"
// import "babel-polyfill"

// import _ from "lodash"
// import { forEachOf } from "async-es"
// import * as async from "async-es"
// console.log(async)

import jquery from "jquery"
window.$ = window.jQuery = jquery
import { popper } from "popper.js"
import "bootstrap"

// import * as Rx from "rxjs/Observable"
// console.log(Rx)

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
const images = { cat: "/cat.png", dog: "/dog.png", duck: "/duck.png" }
const sizes = {}

let promise = new Promise((resolve, reject) => {
  if (1 === 2) resolve("done")
  else reject(new Error("…"))
})

const checkIfDone = () => {
  promise
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.log(err)

      console.error("Deu ruim!")
    })
}

checkIfDone()
