// scanner.js

async function scanPage() {
  // console.log( "Escaneando a página em busca de elementos com a classe 'render'" );

  let elements2Render = [];
  elements2Render = await document.getElementsByClassName("render");
  elements2Render = Array.from(elements2Render);

  if (elements2Render.length > 0) {
    elements2Render.forEach( element => {
      // console.log(element);
      var event = new CustomEvent("render", {
        detail: element, // .dataset.path
        bubbles: true,
        cancelable: false
      });
      setTimeout(()=>{element.dispatchEvent(event);}, 200);
    });
  } else {
    // console.log('nada para carregar por enquanto');
  }
}

document.addEventListener("pageScan", e => {
  // setTimeout( scanPage(), 20 );
  // console.log(e);
  scanPage();
});

function afterLoad() {
  // console.log("hey");

  document.addEventListener("DOMContentLoaded", function () {
    // console.log('scannerx');
    // Primeira escaneada no documento 
    // pra carregar os primeiros componentes na pagina 
    scanPage();
  });
}

export let scanner = {
  id: "scanner",
  path: "./sys/js/render/scanner.js",
  afterLoad: afterLoad(),
  // scanPage: scanPage()
};
