// showcase
// showcase mostra uma coluna de cartões com os produtos disponíveis

import { showcaseWall } from "./showcaseWall"

!(function() {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      document.addEventListener("showcase", () => {
        // console.log("showcase")

        showcaseWall.mount()

        let showcase = document.getElementById("showcase")
        // console.log(showcase)

        // let showcaseHTML = mountProductsWall()

        // showcase.innerHTML = showcaseHTML
      })
    },
    false
  )
})()

//
export let showcase = {
  id: "showcase",
  // target: target
  showcaseWall: showcaseWall
}
