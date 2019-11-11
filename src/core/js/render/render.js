// render.js

import { scanner } from "./scanner.js"
import { renderEngine, renderEngineX } from "./render-engine.js"

document.addEventListener(
  "DOMContentLoaded",
  () => {
    // console.log("scanner scanPage")
    // render.scanner.scanPage()
  },
  false
)

export let render = {
  id: "render",
  scanner: scanner,
  renderEngine: renderEngine,
  renderEngineX: renderEngineX,
}
