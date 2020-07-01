// core

import { js } from "./js/js.js"

// console.log("core")

document.addEventListener("DOMContentLoaded", () => {
  // console.log("corejs")
})

// Object.defineProperty(window, "range", {
//   value: (start, end, step = 1) => {
//     const length = Math.floor(Math.abs((end - start) / step)) + 1
//     return Array.from(Array(length), (x, index) => start + index * step)
//   },
//   writable: false,
//   enumerable: true,
// })

window.range = (start, end, step = 1) => {
  const length = Math.floor(Math.abs((end - start) / step)) + 1
  return Array.from(Array(length), (x, index) => start + index * step)
}

export let core = {
  id: "core",
  js: js
}
