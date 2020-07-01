var _this = this;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// export function rendererX() {
//   document.addEventListener("render", function (e) {
//       console.log(e);
//       console.log(e.srcElement.dataset);
//       e.srcElement.classList.remove("render");
//       var xhr = new XMLHttpRequest();
//       xhr.open("GET", e.srcElement.dataset.path, true);
//       xhr.responseType = "document";
//       xhr.addEventListener("load", afterload);
//       function afterload() {
//         // console.log(evt);
//         let response = xhr.response;
//         // console.log(response.body.innerHTML);
//         // debugger
//         e.srcElement.innerHTML = response.body.innerHTML;
//         // debugger
//         // verifica se existem scripts a serem carregados
//         let scriptJS = response.body.getElementsByTagName("script");
//         // caso positivo: bota esses cabra pra trabalhar!
//         if (scriptJS.length > 0) {
//           eval(scriptJS[0].innerHTML);
//         }
//         // escaneia a pagina de novo
//         // var event = new Event('pageScan');
//         // document.dispatchEvent(event);
//         var event = new CustomEvent("pageScan", {
//           detail: "scana this page", //element, // .dataset.path
//           bubbles: true,
//           cancelable: false
//         });
//         // debugger;
//         document.dispatchEvent(event);
//         // debugger;
//         // return
//       }
//       xhr.send();
//     },
//     false
//   );
// }
// Renderiza um componente dentro de outro componente alvo e executa uma função no final
var renderX =
/*#__PURE__*/
function () {
  var _renderX = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(targetID, path2Component) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _newArrowCheck(this, _this);

            _context4.next = 3;
            return fetch(path2Component).then(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(response) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", response.text());

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref.apply(this, arguments);
              };
            }()).then(
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(html) {
                var parser, doc, target, pageScanEvent;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        // Initialize the DOM parser
                        parser = new DOMParser(); // Parse the text

                        doc = parser.parseFromString(html, "text/html"); // console.log(doc.body);

                        target = document.getElementById(targetID);
                        target.innerHTML = doc.body.innerHTML; // console.log(target);
                        // escaneia a pagina de novo

                        pageScanEvent = new CustomEvent("pageScan", {
                          detail: "page scan",
                          bubbles: true,
                          cancelable: false
                        });
                        setTimeout(document.dispatchEvent(pageScanEvent), 100);

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }())["catch"](
            /*#__PURE__*/
            function () {
              var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3(err) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        console.log("Failed to fetch page: ", err);

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x5) {
                return _ref3.apply(this, arguments);
              };
            }());

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  function renderX(_x, _x2) {
    return _renderX.apply(this, arguments);
  }

  return renderX;
}().bind(this);

Object.defineProperty(window, "renderX", {
  value: renderX,
  writable: false,
  enumerable: true
}); // 

var renderXX =
/*#__PURE__*/
function () {
  var _renderXX = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13(targetID, component, callback) {
    var _this2 = this;

    var myHeaders, myInit;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _newArrowCheck(this, _this);

            // let type = component.path.substr(component.path.length - 4);
            // console.log(type);
            myHeaders = new Headers();
            myInit = {
              method: 'GET',
              headers: myHeaders,
              mode: 'cors',
              cache: 'default'
            };
            _context13.next = 5;
            return fetch(component.path, myInit).then(
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee5(response) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return response.text();

                      case 2:
                        return _context5.abrupt("return", _context5.sent);

                      case 3:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x9) {
                return _ref4.apply(this, arguments);
              };
            }()).then(
            /*#__PURE__*/
            function () {
              var _ref5 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee6(html) {
                var parser, doc, target;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        console.log("then load html"); // Initialize the DOM parser

                        parser = new DOMParser(); // Parse the text

                        doc = parser.parseFromString(html, "text/html"); // console.log(doc.body);

                        target = document.getElementById(targetID);
                        target.innerHTML = doc.body.innerHTML; // console.log(target);
                        // escaneia a pagina de novo
                        // var pageScanEvent = new CustomEvent("pageScan", {
                        //   detail: "page scan",
                        //   bubbles: true,
                        //   cancelable: false
                        // });
                        // setTimeout(document.dispatchEvent(pageScanEvent), 100);

                      case 5:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function (_x10) {
                return _ref5.apply(this, arguments);
              };
            }()).then(
            /*#__PURE__*/
            _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _newArrowCheck(this, _this2);

                      console.log('then load css');

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            })).bind(this)).then(
            /*#__PURE__*/
            _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee8() {
              var loginComponentEvent;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _newArrowCheck(this, _this2);

                      console.log('then load js');
                      loginComponentEvent = new CustomEvent("loginComponent", {
                        detail: "loginComponent",
                        bubbles: true,
                        cancelable: false
                      });
                      setTimeout(document.dispatchEvent(loginComponentEvent), 100);

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            })).bind(this)).then(
            /*#__PURE__*/
            _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee9() {
              var pageScanEvent;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      console.log('pageScan'); // escaneia a pagina de novo

                      pageScanEvent = new CustomEvent("pageScan", {
                        detail: "page scan",
                        bubbles: true,
                        cancelable: false
                      });
                      setTimeout(document.dispatchEvent(pageScanEvent), 1000);

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }))).then(
            /*#__PURE__*/
            _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }))).then(
            /*#__PURE__*/
            _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _newArrowCheck(this, _this2);

                      console.log('then run callback');
                      callback();

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            })).bind(this))["catch"](
            /*#__PURE__*/
            function () {
              var _ref11 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee12(err) {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        console.log("Failed to fetch page: ", err);

                      case 1:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              }));

              return function (_x11) {
                return _ref11.apply(this, arguments);
              };
            }());

          case 5:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }));

  function renderXX(_x6, _x7, _x8) {
    return _renderXX.apply(this, arguments);
  }

  return renderXX;
}().bind(this);

Object.defineProperty(window, "renderXX", {
  value: renderXX,
  writable: false,
  enumerable: true
}); // 

var renderY = function renderY(targetID, component, callback) {
  // Create the XHR request
  var request = new XMLHttpRequest(); // Return it as a Promise

  return new Promise(function (resolve, reject) {
    // Setup our listener to process compeleted requests
    request.onreadystatechange = function () {
      var _this3 = this;

      // Only run if the request is complete
      if (request.readyState !== 4) return; // Process the response

      if (request.status >= 200 && request.status < 300) {
        // If successful
        console.log(document);
        console.log(document.getElementById(targetID));
        var target = document.getElementById(targetID);
        target.innerHTML = request.response.body.innerHTML; // document.getElementById(targetID).innerHTML = request.response.body.innerHTML;

        setTimeout(function () {
          _newArrowCheck(this, _this3);

          callback();
        }.bind(this));
        resolve(request);
      } else {
        // If failed
        console.log(this);
        reject({
          status: request.status,
          statusText: request.statusText
        });
      }
    }; // Setup our HTTP request


    request.open('GET', component.path, true); // Send the request

    request.send(null);
  }); // makeRequest(component.path, 'GET');
  // 
};

Object.defineProperty(window, "renderY", {
  value: renderY,
  writable: false,
  enumerable: true
});
Object.defineProperty(window, "render", {
  value: renderX,
  writable: false,
  enumerable: true
});
document.addEventListener("render", function (e) {
  var _this4 = this;

  _newArrowCheck(this, _this);

  e.srcElement.classList.remove("render"); // console.log("");

  var targetId = e.srcElement.id; // console.log(targetId);

  var component = e.srcElement.dataset.component; // console.log(component);

  var path = window.route[component].path; // console.log(path);

  var componentName = window.route[component].name; // console.log(componentName);
  // renderX(e.srcElement.id, e.srcElement.dataset.path);

  renderX(targetId, path);
  e.preventDefault(); // (
  //   // ,
  //   console.log("asdasd")
  // )();

  var event = new CustomEvent(componentName, {
    detail: componentName,
    // .dataset.path
    bubbles: true,
    cancelable: false
  });
  setTimeout(function () {
    _newArrowCheck(this, _this4);

    document.dispatchEvent(event);
  }.bind(this), 100);
  return false;
}.bind(this));

function afterLoad() {
  // console.log("hey");
  document.addEventListener("DOMContentLoaded", function () {// console.log('renderer');
  });
}

export var renderEngine = {
  id: "renderer",
  path: "./sys/js/render/renderer.js",
  // scanner: scanner,
  // renderer: renderer(),
  // render: renderX,
  // jshotload: jshotload,
  // cssHotLoad: cssHotLoad,
  afterLoad: afterLoad()
};