// shop

import { pay } from "./pay/pay.js"
import { products } from "./products/products"

export let shop = {
  id: "shop",
  html: "./shop.html",
  pay: pay,
  products: products
}
