// tomate.js
// import { Product } from "./products"

class Product {
  constructor() {
    this.type = arguments[0]
    this.price = arguments[1]
    this.unity = arguments[2]
  }
}

export let tomate = {
  carmem: new Product("carmem", 5.0, "kg"),
  italiano: new Product("italiano", 5.0, "kg"),
  holandes: new Product("holandes", 5.0, "kg"),
  italiano_estufa: new Product("italiano_estufa", 5.0, "kg"),
  debora: new Product("debora", 5.0, "kg"),
  cereja: new Product("cereja", 5.0, "kg")
}
