// hearder.js

let checkThis2 = function() {
  let resposta = ""
  fetch("src/app/layout/header/trythis.js")
    .then(response => response.text())
    .then(text => (resposta = text))

  return resposta
}

let afterLoad = () => {
  // console.log("afterLoad")

  document.addEventListener("DOMContentLoaded", () => {
    // console.log("wtf")
    // console.log("headerComponent")

    // console.log(v)

    // Object.defineProperty(window.v.route, "header", {
    //   value: {
    //     name: "headerComponent",
    //     path: "/app/layout/header/header.html",
    //     title: "header",
    //   },
    //   // value: (start, end, step = 1) => {
    //   //   const length = Math.floor(Math.abs((end - start) / step)) + 1
    //   //   return Array.from(Array(length), (x, index) => start + index * step)
    //   // },
    //   writable: false,
    //   enumerable: true,
    // })

    // window.v.route.header = {
    //   name: "headerComponent",
    //   path: "/app/layout/header/header.html",
    //   title: "header",
    // }

    let as = async () => {
      window.onload = function() {
        // var refButton = document.getElementById("btnButton")

        // refButton.onclick = function() {
        //   alert("I am clicked!")
        // }

        console.log("ayn")
        //

        var login = document.getElementById("toggleAuth")
        console.log(login)

        login.addEventListener("click", () => {
          // console.log("click login");
          let isConnected = () => {
            console.log("loged in as user: ")
          }

          let notConnected = () => {
            window.history.pushState({}, "login", "  ?=login")
            // renderX("main", "./app/auth/auth.html");
            let destino = "app/user/auth/login/login.html"
            window.render("main", destino)

            var event = new CustomEvent("login", {
              detail: {
                message: "Hello World!",
                time: new Date(),
              },
              bubbles: true,
              cancelable: true,
            })
            document.dispatchEvent(event)
          }

          //

          let whoami = ""
          if (whoami === "") {
            console.log("notConnected")
            // notConnected()
          } else {
            console.log("isConnected")
            // isConnected()
          }

          //
        })
      }

      //
      // var halfmoon = document.getElementById("halfmoon")
      // console.log(halfmoon)

      // halfmoon.addEventListener("click", () => {
      //   console.log(halfmoon)
      //   // console.log("click halfmoon")
      //   // window.history.pushState({}, "auth", "  ?=auth");
      //   // renderX("main", "./app/auth/auth.html");
      // })
    }

    as().then(console.log("log then"))

    // setTimeout(() => {

    // }, 1000)
  })
}

// afterLoad()

export let header = {
  id: "header",
  path: "/app/page/layout/header/header.js",
  afterLoad: afterLoad(),
}
