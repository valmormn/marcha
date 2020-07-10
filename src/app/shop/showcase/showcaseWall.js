// showcaseWall.js

!(() => {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      // asd
      // console.log(window.v.lista_frutas)
      // mount()
    },
    false
  )
})()

let mount = () => {
  //

  // console.log("mount product wall")

  class ProductCard {
    constructor(name, price, img) {
      this.name = name
      this.price = price
      this.img = img
      // this.link = link
    }

    //
    get html() {
      // card
      let frag = document.createDocumentFragment()
      // card.appendChild(document.createElement("div"))
      let card = document.createElement("div")
      card.className = "card"
      // console.log(card)

      // card/img-top
      let img = document.createElement("img")
      img.className = "card-img-top"
      img.src = this.img

      // console.log(img)

      card.appendChild(img)

      // console.log(card)

      // card/body
      let body = document.createElement("div")
      body.className = "card-body"

      // body/titulo - nome produto
      let title = document.createElement("h5")
      title.className = "card-title"

      let titleTxt = this.name

      title.innerText = titleTxt

      body.appendChild(title)

      // card-text - price
      let text = document.createElement("p")
      text.className = "card-text"

      let cardText = this.price

      text.innerText = cardText
      body.appendChild(text)

      // botao comprar

      let btn = document.createElement("button")
      btn.className = "btn btn-primary btn-block"

      let btnTxt = "Comprar"
      btn.innerHTML = btnTxt

      body.appendChild(btn)

      // src/app/shop/products/armazem/hortifruti/frutas/limao/limao_thaiti.jpg

      // adiciona tudo no body do cartao
      card.appendChild(body)

      //  ### ERRO ###
      // AS IMAGENS NAOS ESTAO SENDO CARREGADAS CORRETAMENTE.alert-dark

      // e agora retorna o elemento em html todo bunitinho
      return card
      // return frag
    }
  }

  //
  let productWall = document.getElementById("product-wall")

  // console.log(productWall)

  let lista = window.v.lista_frutas
  lista.forEach((v, i) => {
    // console.log(v) // nome do item

    let name = v[0] // v[0] // nome do item
    let price = v[1] // v[1] // preço
    let img = v[2] // v[2] // imagem   // v[3] // link
    let cartao = new ProductCard(name, price, img)

    // console.log(cartao.html)

    productWall.appendChild(cartao.html)
  })
}

export let showcaseWall = {
  mount: () => {
    mount()
  }
}

//
