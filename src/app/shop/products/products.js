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
      window.lista_frutas = []

      window.frutas = Object.entries(hortifruti.frutas)
      window.frutas.forEach((v, i) => {
        window.frutas_sub = Object.entries(v[1])
        // console.log(window.frutas_sub)

        window.frutas_sub.forEach((value, index) => {
          let item = v[0]
          let subitem = value[0]
          let name = item + " " + subitem
          let valor = value[1].valor
          let unidade = value[1].un
          let img = value[1].img

          let vetor = [name, valor, unidade, img]
          console.log(vetor)

          window.lista_frutas.push(vetor)
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
