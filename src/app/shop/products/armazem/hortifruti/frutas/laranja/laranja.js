// limao.js

let seleta = {
  tipo: "seleta",
  valor: 9.0,
  info: "wtf",
  img: "./app/shop/products/armazem/hortifruti/frutas/laranja/laranja_seleta.jpg",
  un: "dz",
  estoque: "1",
  projection: () => {
    console.log("projection")
  }
}

let bahia = {
  tipo: "bahia",
  valor: 9.0,
  info: "wtf",
  img: "",
  un: "dz",
  estoque: "0",
  projection: () => {
    console.log("projection")
  }
}

let pera = {
  tipo: "pera",
  valor: 9.0,
  info: "wtf",
  img: "",
  un: "dz",
  estoque: "0",
  projection: () => {
    console.log("projection")
  }
}

export let laranja = {
  seleta: seleta,
  bahia: bahia,
  pera: pera
}
