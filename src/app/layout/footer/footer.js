// footer.js
// import { rendererX } from "../../../sys/js/render/renderer";

let afterLoad = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // console.log('footerComponent');
    // window.route.footer = {
    //   name: "footerComponent",
    //   path: "/app/layout/footer/footer.html",
    //   title: "footer"
    // };

    // Link Sobre
    setTimeout(() => {
      var go2About = document.getElementById("go2About")
      // console.log(go2About);

      // go2About.addEventListener("click", () => {
      //   console.log("click go2About")
      //   // window.history.pushState({}, "auth", "about")
      //   // renderX("main", "./app/page/about/about.html")
      // })
    }, 1000)

    // Link Entrar
    document.addEventListener("footerComponent", () => {
      setTimeout(() => {
        var toggleAuthFooter = document.getElementById("toggleAuthF")
        // console.log(toggleAuthFooter);

        toggleAuthFooter.addEventListener("click", async () => {
          await window.renderXX("content", window.route.login, () => {
            //
            // console.log("ta foda")
          })

          return false

          // window.renderY ("main", window.route.login, ()=>{})
        })
      }, 100)
    })
  })
}

document.addEventListener("footer", () => {
  document.querySelector("#go2About").addEventListener("click", () => {
    // console.log("#go2About")
    var about = document.getElementById("go2About")
    about.addEventListener("click", () => {
      let main = document.getElementById("main")
      main.innerHTML = `<div id="about" class="render" data-component="about" data-path="app/page/about/about.html"></div>`
      var event = new CustomEvent("pageScan", {
        detail: "pageScan",
        bubbles: true,
        cancelable: false
      })
      setTimeout(() => {
        about.dispatchEvent(event)
      }, 100)
    })

    // toggleAuthFooter
    var toggleAuthFooter = document.getElementById("toggleAuthF")
    // console.log(toggleAuthFooter);

    toggleAuthFooter.addEventListener("click", async () => {
      // await window.renderXX("main", window.route.login, () => {
      //   //
      //   // console.log("ta foda")
      // })

      // window.renderY ("main", window.route.login, ()=>{})

      console.log("toggleAuthFooter")

      return false
    })
  })
})

export let footer = {
  id: "footer",
  html: "app/layout/footer/footer.html",
  path: "/app/layout/footer/footer.js",
  afterLoad: afterLoad()
}
