// scanner.js

document.addEventListener("pageScan", e => {
  scanPage()
})

async function scanPage() {
  // // console.log("Escaneando a página em busca de elementos com a classe 'render'");
  let a = document.querySelectorAll("[data-render]")
  // console.log(a)

  let elements2Render = []
  elements2Render = document.getElementsByClassName("render")
  elements2Render = Array.from(elements2Render)

  if (elements2Render.length > 0) {
    elements2Render.forEach(element => {
      // // console.log(element);
      var event = new CustomEvent("render", {
        detail: element, // .dataset.path
        bubbles: true,
        cancelable: false
      })
      setTimeout(() => {
        element.dispatchEvent(event)
      }, 10)
    })
  } else {
    // // console.log("nada para carregar por enquanto")
  }
}

function afterLoad() {
  //
  document.addEventListener("DOMContentLoaded", e => {
    // console.log(e)
  })
}

export let scanner = {
  id: "scanner",
  path: "core/js/render/scanner.js",
  afterLoad: afterLoad(),
  scanPage: scanPage()
}
