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

var renderX = async (targetID, path2Component) => {
  await fetch(path2Component)
    .then(async function (response) {
      // console.log(response);
      return response.text();
    })
    .then(async function (html) {
      // Initialize the DOM parser
      var parser = new DOMParser();

      // Parse the text
      var doc = parser.parseFromString(html, "text/html");

      // console.log(doc.body);
      var target = document.getElementById(targetID);
      target.innerHTML = doc.body.innerHTML;
      // console.log(target);

      // escaneia a pagina de novo
      var pageScanEvent = new CustomEvent("pageScan", {
        detail: "page scan",
        bubbles: true,
        cancelable: false
      });

      setTimeout(document.dispatchEvent(pageScanEvent), 100);
    })
    .catch(async function (err) {
      console.log("Failed to fetch page: ", err);
    });
};

Object.defineProperty(window, "renderX", {
  value: renderX,
  writable: false,
  enumerable: true
});

// 
var renderXX = async (targetID, component, callback) => {

  // let type = component.path.substr(component.path.length - 4);
  // console.log(type);

  var myHeaders = new Headers();

  var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  };

  await fetch(component.path, myInit)
    .then(async function (response) {
      // console.log(response);
      return await response.text();
    })
    .then(async function (html) {
      console.log("then load html");
      // Initialize the DOM parser
      var parser = new DOMParser();

      // Parse the text
      var doc = parser.parseFromString(html, "text/html");

      // console.log(doc.body);
      var target = document.getElementById(targetID);
      target.innerHTML = doc.body.innerHTML;
      // console.log(target);

      // escaneia a pagina de novo
      // var pageScanEvent = new CustomEvent("pageScan", {
      //   detail: "page scan",
      //   bubbles: true,
      //   cancelable: false
      // });

      // setTimeout(document.dispatchEvent(pageScanEvent), 100);
    })
    .then(async ()=>{
      console.log('then load css');
    })
    .then(async ()=>{
      console.log('then load js');
      var loginComponentEvent = new CustomEvent("loginComponent", {
        detail: "loginComponent",
        bubbles: true,
        cancelable: false
      });

      setTimeout(document.dispatchEvent(loginComponentEvent), 100);
    })
    .then(async function(){
      console.log('pageScan');
      // escaneia a pagina de novo
      var pageScanEvent = new CustomEvent("pageScan", {
        detail: "page scan",
        bubbles: true,
        cancelable: false
      });

      setTimeout(document.dispatchEvent(pageScanEvent), 1000);
    })
    .then(async function () {
      // window.history.pushState({}, "login", "login");
    })
    .then(async ()=>{
      console.log('then run callback');
      callback();
    })
    .catch(async function (err) {
      console.log("Failed to fetch page: ", err);
    });
};

Object.defineProperty(window, "renderXX", {
  value: renderXX,
  writable: false,
  enumerable: true
});

// 
var renderY = function (targetID, component, callback) {

  // Create the XHR request
  let request = new XMLHttpRequest();

  // Return it as a Promise
  return new Promise(function (resolve, reject) {

    // Setup our listener to process compeleted requests
    request.onreadystatechange = function () {

      // Only run if the request is complete
      if (request.readyState !== 4) return;

      // Process the response
      if (request.status >= 200 && request.status < 300) {
        // If successful
        console.log(document);
        console.log(document.getElementById(targetID));
        let target = document.getElementById(targetID);
        target.innerHTML = request.response.body.innerHTML;

        // document.getElementById(targetID).innerHTML = request.response.body.innerHTML;
        setTimeout(() => {
          callback();
        });

        resolve(request);

      } else {
        // If failed
        console.log(this);
        reject({
          status: request.status,
          statusText: request.statusText
        });
      }

    };

    // Setup our HTTP request
    request.open('GET', component.path, true);

    // Send the request
    request.send(null);

  });

  // makeRequest(component.path, 'GET');

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

document.addEventListener("render", e => {
  e.srcElement.classList.remove("render");
  
  // console.log("");
  let targetId = e.srcElement.id;
  // console.log(targetId);
  let component = e.srcElement.dataset.component;
  // console.log(component);
  let path = window.route[component].path;
  // console.log(path);
  let componentName = window.route[component].name;
  // console.log(componentName);

  // renderX(e.srcElement.id, e.srcElement.dataset.path);
  renderX(targetId, path);
  e.preventDefault();

  // (
  //   // ,
  //   console.log("asdasd")
  // )();

  var event = new CustomEvent(componentName, {
    detail: componentName, // .dataset.path
    bubbles: true,
    cancelable: false
  });
  
  setTimeout(()=>{document.dispatchEvent(event);}, 100);

  return false;
});

function afterLoad() {
  // console.log("hey");
  document.addEventListener("DOMContentLoaded", function () {
    // console.log('renderer');
  });
}

export let renderEngine = {
  id: "renderer",
  path: "./sys/js/render/renderer.js",
  // scanner: scanner,
  // renderer: renderer(),
  // render: renderX,
  // jshotload: jshotload,
  // cssHotLoad: cssHotLoad,
  afterLoad: afterLoad()
};
