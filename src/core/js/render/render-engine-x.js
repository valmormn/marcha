// render - engine.js

import { async } from "async-es"

document.addEventListener("render", e => {
  renderEngine(e, () => {
    // console.log("fuck yeah!")
  })
})

var obj = { dev: "/dev.json", test: "/test.json", prod: "/prod.json" }
var configs = {}

async.forEachOf(
  obj,
  function(value, key, callback) {
    fs.readFile(__dirname + value, "utf8", function(err, data) {
      if (err) return callback(err)
      try {
        // configs[key] = JSON.parse(data)
        console.log(key)
      } catch (e) {
        return callback(e)
      }
      callback()
    })
  },
  function(err) {
    if (err) console.error(err.message)
    // configs is now a map of JSON data
    doSomethingWith(configs)
  }
)

export let renderEngine = async (e, callback) => {
  // let type = component.path.substr(component.path.length - 4);
  // console.log(e)

  var myHeaders = new Headers()

  var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
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
        cancelable: false,
      })

      setTimeout(document.dispatchEvent(loadComponentJS), 100)
    })
    .then(async () => {
      // escaneia a pagina de novo
      var pageScanEvent = new CustomEvent("pageScan", {
        detail: "pageScan",
        bubbles: true,
        cancelable: false,
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

export let renderEngineX = async (e, callback) => {
  // let type = component.path.substr(component.path.length - 4);
  // console.log(e)

  var myHeaders = new Headers()

  var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  }

  await fetch(e.target.dataset.path, myInit)
    .then(async function(response) {
      // console.log(response);
      e.srcElement.classList.remove("render")
      return await response.text()
    })
    .then(async html => {
      // console.log("then load html");
      // console.log(html);

      // Initialize the DOM parser
      var parser = new DOMParser()

      // Parse the text
      var doc = parser.parseFromString(html, "text/html")
      // console.log("doc.body");
      // console.log(doc.body);
      var target = document.getElementById(e.srcElement.id)
      target.innerHTML = doc.body.innerHTML
      // console.log('target');
      // console.log(target);
    })
    .then(async () => {
      // console.log('then load css');
    })
    .then(async () => {
      // console.log('then load js');
      // var loginComponentEvent = new CustomEvent("loginComponent", {
      //   detail: "loginComponent",
      //   bubbles: true,
      //   cancelable: false
      // });
      // setTimeout(document.dispatchEvent(loginComponentEvent), 100);
    })
    .then(async function() {
      // console.log("pageScan")
      // escaneia a pagina de novo
      var pageScanEvent = new CustomEvent("pageScan", {
        detail: "page scan",
        bubbles: true,
        cancelable: false,
      })

      setTimeout(document.dispatchEvent(pageScanEvent), 1)
    })
    .then(async () => {})
    .then(async () => {
      // console.log('then run callback');
      callback()
    })
    .catch(async function(err) {
      console.log("Failed to fetch page: ", err)
    })
}
