// hearder.js

document.addEventListener("header", () => {
  // console.log(header)

  var login = document.getElementById("toggleAuth")
  login.addEventListener("click", () => {
    let main = document.getElementById("main")
    main.innerHTML = `<div 
    id="login" 
    class="render" 
    data-component="login" 
    data-path="app/user/auth/login/login.html">
    </div>`
    var event = new CustomEvent("pageScan", {
      detail: "pageScan",
      bubbles: true,
      cancelable: false,
    })
    setTimeout(() => {
      login.dispatchEvent(event)
    }, 100)
  })

  var halfmoon = document.getElementById("halfmoon")
  // console.log(halfmoon)

  halfmoon.addEventListener("click", () => {
    // console.log(halfmoon)
    let component = {
      target: "main",
      path: "app/page/about/about.html",
    }
    // console.log("click halfmoon")
    // window.history.pushState({}, "auth", "  ?=auth");
    // renderX("main", "./app/auth/auth.html");
  })
})

export let header = {
  id: "header",
  path: "app/layout/header/header.js",
  // afterLoad: afterLoad(),
}
