// produtos comercializados

import { tomate } from "./tomate"

export class Product {
  constructor() {
    this.type = arguments[0]
    this.price = arguments[1]
    this.unity = arguments[2]
  }
}

let cebola = new Product("cebola", 7.0, "kg")
let batata = {
  inglesa: new Product("inglesa", 7.0, "kg"),
  asterix: new Product("asterix", 8.0, "kg")
}
// let tomate = {
//   carmem: new Product("carmem", 5.0, "kg"),
//   italiano: new Product("italiano", 5.0, "kg"),
//   holandes: new Product("holandes", 5.0, "kg"),
//   italiano_estufa: new Product("italiano_estufa", 5.0, "kg"),
//   debora: new Product("debora", 5.0, "kg"),
//   cereja: new Product("cereja", 5.0, "kg")
// }
let quiabo = new Product("quiabo", 9.0, "kg")
let inhame = new Product("inhame", 5.0, "kg")
// let laranja_s = new Product("laranja seleta", 9.0, "dz")
// let laranja_b = new Product("laranja bahia", 9.0, "dz")
let tangerina = new Product("tangerina", 9.0, "dz")
let limao = new Product("limão", 5.0, "kg")
let aipim = {
  casca_rosa: {
    com_casca: new Product("aipim com casca", 3.0, "kg"),
    sem_casca: new Product("aipim com casca", 3.0, "kg"),
    congelado: new Product("aipim com casca", 3.0, "kg"),
    parafinado: new Product("aipim com casca", 3.0, "kg")
  },
  casca_branca: {
    com_casca: new Product("aipim com casca", 3.0, "kg"),
    parafinado: new Product("aipim com casca parafinado", 3.0, "kg"),
    sem_casca: new Product("aipim sem casca", 3.0, "kg"),
    congelado: new Product("aipim sem casca congelado", 3.0, "kg")
  }
}
let aipim_descascado = new Product("aipim sem casca", 4.0, "kg")
let aipim_congelado = new Product("aipim sem casca", 5.0, "kg")
let chuchu = new Product("chuchu", 3.0, "kg")
let banana = new Product("banan", 5.0, "dz")

export let products = {
  cebola: cebola,
  batata: batata,
  tomate: tomate,
  quiabo: quiabo,
  inhame: inhame,
  // laranja: laranja,
  // laranja_s: laranja_s,
  // laranja_b: laranja_b,
  tangerina: tangerina,
  limao: limao,
  aipim: aipim,
  aipim_descascado: aipim_descascado,
  aipim_congelado: aipim_congelado,
  chuchu: chuchu,
  banana: banana
  // coco: coco
}

//
