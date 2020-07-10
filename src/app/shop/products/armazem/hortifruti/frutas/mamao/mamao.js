// limao.js

let papaya = {
  tipo: "papaya",
  valor: 2.0,
  info: "wtf",
  img: "./app/shop/products/armazem/hortifruti/frutas/mamao/mamao_papayaB.png",
  un: "un",
  estoque: "0",
  projection: () => {
    console.log("projection")
  }
}

export let mamao = {
  papaya: papaya
}
