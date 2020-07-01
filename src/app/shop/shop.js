// shop

import { pay } from "./pay/pay.js"
import { products } from "./products/products"
import { showcase } from "./showcase/showcase"

export let shop = {
  id: "shop",
  html: "./shop.html",
  pay: pay,
  products: products,
  showcase: showcase
}
