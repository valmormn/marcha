var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// render.js
// import { scanner } from "./scanner.js";
// import { renderEngine } from "./render-engine.js";
// import {
//   mdHotLoad
// } from "./mdhotload.js";
// import {
//   jshotload
// } from "./jshotload.js";
// import {
//   cssHotLoad
// } from "./csshotload.js";
document.addEventListener("loadPage", function (e) {
  var _this2 = this;

  _newArrowCheck(this, _this);

  console.log('loadPage');
  setTimeout(function () {// let loadSingUpPage = document.getElementById("loadSingUpPage");
    // loadSingUpPage.addEventListener("click", (e) => {
    //   console.log(e);
    //   window.history.pushState({}, "auth", "  ?=signup");
    //   // renderXX("main", "./app/auth/signup/signup.html");
    //   var event = new CustomEvent( "signup",  {
    //     detail: {
    //       message: "signup",
    //       time: new Date(),
    //     },
    //     bubbles: true,
    //     cancelable: true
    //   });
    //   document.dispatchEvent(event);
    // });

    _newArrowCheck(this, _this2);
  }.bind(this), 200);
}.bind(this));

function afterLoad() {
  // console.log("hey");
  document.addEventListener("DOMContentLoaded", function () {// console.log('renderxx');
  });
}

document.addEventListener("DOMContentLoaded", function () {// console.log('renderxx');
});
export var render = {
  id: "render",
  path: "core/js/render/render.js",
  scanner: scanner,
  renderEngine: renderEngine // renderer: renderer(),
  // render: renderX,
  // jshotload: jshotload,
  // cssHotLoad: cssHotLoad,
  // afterLoad: afterLoad()

};