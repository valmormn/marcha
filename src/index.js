// index.js

import { core } from "./core/core.js"
import { settings } from "./settings/settings.js"
import { style } from "./style/style.js"
import { app } from "./app/app.js"

window.v = {
  name: "web-graphics",
  author: "Valmor",
  site: "https://www.valmor.net.br/",
  style: style,
  app: app,
  core: core,
  route: {},
  settings: settings,
  // app: app,
  // sys: sys,
  // vendor: vendor,
  // style: style
  yeah: () => {
    console.log("╭∩╮( ͡° ͜ʖ ͡° ͜)╭∩╮")
  },
  // aee: aee()
}

!(function() {
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      window.app = window.v
      // window.v.yeah()

      // hljs.initHighlightingOnLoad(); // isso nao ta funcionando... CORRIGIR

      // document.querySelectorAll('pre code').forEach((block) => {
      //   hljs.highlightBlock(block);
      // });
      ;(() => {
        // console.log('🐧'); // ⚡⚡⚡
      })()

      // console.log('( ͡°👅 ͡°)');

      // setup();

      // var event = new Event("app-loaded")
      // document.dispatchEvent(event)
    },
    false
  )
})()

console.log("🔥")
