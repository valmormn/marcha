var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// scanner.js
function scanPage() {
  return _scanPage.apply(this, arguments);
}

function _scanPage() {
  _scanPage = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _this2 = this;

    var elements2Render;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // console.log( "Escaneando a página em busca de elementos com a classe 'render'" );
            elements2Render = [];
            _context.next = 3;
            return document.getElementsByClassName("render");

          case 3:
            elements2Render = _context.sent;
            elements2Render = Array.from(elements2Render);

            if (elements2Render.length > 0) {
              elements2Render.forEach(function (element) {
                var _this3 = this;

                _newArrowCheck(this, _this2);

                // console.log(element);
                var event = new CustomEvent("render", {
                  detail: element,
                  // .dataset.path
                  bubbles: true,
                  cancelable: false
                });
                setTimeout(function () {
                  _newArrowCheck(this, _this3);

                  element.dispatchEvent(event);
                }.bind(this), 200);
              }.bind(this));
            } else {// console.log('nada para carregar por enquanto');
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _scanPage.apply(this, arguments);
}

document.addEventListener("pageScan", function (e) {
  _newArrowCheck(this, _this);

  // setTimeout( scanPage(), 20 );
  // console.log(e);
  scanPage();
}.bind(this));

function afterLoad() {
  // console.log("hey");
  document.addEventListener("DOMContentLoaded", function () {
    // console.log('scannerx');
    // Primeira escaneada no documento 
    // pra carregar os primeiros componentes na pagina 
    scanPage();
  });
}

export var scanner = {
  id: "scanner",
  path: "./sys/js/render/scanner.js",
  afterLoad: afterLoad() // scanPage: scanPage()

};