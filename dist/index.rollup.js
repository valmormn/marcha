!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e=e||self).play={})}(this,(function(e){"use strict";function o(e,o){if(e!==o)throw new TypeError("Cannot instantiate an arrow function")}console.log("core"),document.addEventListener("DOMContentLoaded",function(){o(this,void 0),console.log("corejs")}.bind(void 0));var n={id:"core",js:{render:{id:"render"}}};console.log("app.js");var t={f:function(){o(this,void 0),console.log("inside app.js!")}.bind(void 0)};console.log("fuck222");var i=document.querySelector("#div");t.f();var d={style:{id:"style"},app:t,core:n,settings:{id:"settings",appName:"dev"},x:i};window.v=d,window.v.f=t.f,Object.defineProperty(window,"dev",{value:d,writable:!1,enumerable:!0}),window.a="as",e.dev=d,Object.defineProperty(e,"__esModule",{value:!0})}));
