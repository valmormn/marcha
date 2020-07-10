// limao.js

let pokan = {
  tipo: "pokan",
  valor: 8.0,
  info: "wtf",
  img: "./app/shop/products/armazem/hortifruti/frutas/tangerina/tangerina_pokan.png",
  un: "dz",
  estoque: "1",
  projection: () => {
    console.log("projection")
  }
}

export let tangerina = {
  pokan: pokan
}
