// render - engine.js

document.addEventListener("render", e => {
  renderEngine(e, () => {
    // console.log("fuck yeah!")
  })
})

export let renderEngine = async (e, callback) => {
  // let type = component.path.substr(component.path.length - 4);
  // console.log(e)

  var myHeaders = new Headers()

  var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default"
  }

  await fetch(e.target.dataset.path, myInit)
    .then(async function(response) {
      e.srcElement.classList.remove("render")
      return await response.text()
    })
    .then(async html => {
      // Initialize the DOM parser
      var parser = new DOMParser()

      // Parse the text
      var doc = parser.parseFromString(html, "text/html")
      var target = document.getElementById(e.srcElement.id)
      target.innerHTML = doc.body.innerHTML
    })
    .then(async () => {
      // load md
    })
    .then(async () => {
      // load css
    })
    .then(async () => {
      //
      var loadComponentJS = new CustomEvent(e.srcElement.id, {
        detail: "loadComponentJS",
        bubbles: true,
        cancelable: false
      })

      setTimeout(document.dispatchEvent(loadComponentJS), 50)
    })
    .then(async () => {
      // escaneia a pagina de novo
      var pageScanEvent = new CustomEvent("pageScan", {
        detail: "pageScan",
        bubbles: true,
        cancelable: false
      })

      setTimeout(document.dispatchEvent(pageScanEvent), 100)
    })
    .then(async () => {
      // s
    })
    .then(async () => {
      callback()
    })
    .catch(async err => {
      console.log("Failed to fetch page: ", err)
    })
}
