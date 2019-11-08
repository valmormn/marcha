// footer.js
// import { rendererX } from "../../../sys/js/render/renderer";

let afterLoad = () => {
  document.addEventListener("DOMContentLoaded", function() {
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

      go2About.addEventListener("click", () => {
        console.log("click go2About")
        // window.history.pushState({}, "auth", "about")
        // renderX("main", "./app/page/about/about.html")
      })
    }, 1000)

    // Link Entrar
    document.addEventListener("footerComponent", () => {
      setTimeout(() => {
        var toggleAuthFooter = document.getElementById("toggleAuthF")
        // console.log(toggleAuthFooter);

        toggleAuthFooter.addEventListener("click", async () => {
          await window.renderXX("main", window.route.login, () => {
            //
            // console.log("ta foda")
          })

          return false

          // window.renderY ("main", window.route.login, ()=>{})
        })
      }, 1000)
    })
  })
}

export let footer = {
  id: "footer",
  path: "/app/layout/footer/footer.js",
  afterLoad: afterLoad(),
}
