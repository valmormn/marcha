// products
import { hortifruti } from "./armazem/hortifruti/hortifruti"
// import { frutas } from "./armazem/hortifruti/frutas/frutas"

let list = {
  laranja: {
    tipo: "bahia",
    valor: 9.0,
    unidade: "dz"
  }
}

!(function() {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      // asd
      window.v.lista_frutas = []

      window.frutas = Object.entries(hortifruti.frutas)
      window.frutas.forEach((v, i) => {
        window.frutas_sub = Object.entries(v[1])
        console.log(window.frutas_sub)

        window.frutas_sub.forEach((value, index) => {
          let item = v[0] // 0 = nome do item
          item = item.charAt(0).toUpperCase() + item.slice(1)
          let subitem = value[0] // 0 = nome do sub_item
          subitem = subitem.charAt(0).toUpperCase() + subitem.slice(1)
          let name = item + " " + subitem
          let valor = value[1].valor
          let unidade = value[1].un
          let preco = "R$ " + valor + " / " + unidade
          let page = "/app/shop/products/armazem/hortifruti/frutas/" + item + "/" + item + ".html"
          let img = value[1].img
          let estoque = value[1].estoque

          let vetor = [name, preco, img, page]
          // console.log(vetor)

          // criar a lista de produtos
          // somente para itens que existam no estoque
          if (estoque > 0) {
            window.v.lista_frutas.push(vetor)
          }
        })
      })
    },
    false
  )
})()

export let products = {
  id: "products",
  hortifruti: hortifruti,
  lista: list,
  fuck: () => {
    console.log("fuck")
  }
}
