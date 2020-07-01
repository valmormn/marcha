// showcaseWall.js

let mount = () => {
  //

  console.log("mount product wall")

  let productWall = document.getElementById("product-wall")

  // let items = window.v.app.shop.products.hortifruti
  // console.log(items)

  // let legumes = items.legumes
  // console.log(legumes)

  let frutas = [["laranja bahia", "9.00", "dz"]]

  // let bat = "batata"
  // console.log(legumes["batata"]["inglesa"])
  // console.log(legumes["batata"]["inglesa"].valor)

  // let div = document.dom
  // console.log(div)

  // div.innerHTML = `<p>asdasdsa</p>`

  var getKeys = obj => {
    var keys = []
    for (var key in obj) {
      keys.push(key)
    }
    return keys
  }
}

export let showcaseWall = {
  mount: () => {
    mount()
  }
}

//
