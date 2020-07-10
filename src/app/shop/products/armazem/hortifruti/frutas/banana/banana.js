// limao.js

let prata = {
  tipo: "prata",
  valor: 5.0,
  info: "wtf",
  img: "./app/shop/products/armazem/hortifruti/frutas/banana/banana_prata.jpg",
  un: "dz",
  estoque: "1",
  price: () => {
    // console.log(valor + " " + un)
    console.log("fuck")
  },
  projection: () => {
    console.log("projection")
  }
}

export let banana = {
  prata: prata
}
