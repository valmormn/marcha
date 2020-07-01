var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// core
import { js } from "./js/js.js";
console.log("core");
document.addEventListener("DOMContentLoaded", function () {
  _newArrowCheck(this, _this);

  console.log('corejs');
}.bind(this));
export var core = {
  id: "core",
  js: js
};