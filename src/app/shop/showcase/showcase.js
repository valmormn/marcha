// showcase

!(function() {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      let mountProductsWall = () => {
        //

        console.log("mount product wall")

        let productWall = document.getElementById("product-wall")

        let items = window.v.app.shop.products.hortifruti
        console.log(items)

        let legumes = items.legumes
        console.log(legumes)

        let frutas = [["laranja bahia", "9.00", "dz"]]

        let bat = "batata"
        console.log(legumes[bat]["inglesa"])

        let div = `<div></div>`

        var getKeys = function(obj) {
          var keys = []
          for (var key in obj) {
            keys.push(key)
          }
          return keys
        }
        let showcaseHTML = ""
        return showcaseHTML
      }

      document.addEventListener("showcase", () => {
        // console.log("showcase")

        let showcase = document.getElementById("showcase")
        // console.log(showcase)

        let showcaseHTML = mountProductsWall()

        showcase.innerHTML = showcaseHTML
      })
    },
    false
  )
})() // docu
export let showcase = {
  id: "showcase"
  // target: target
}
