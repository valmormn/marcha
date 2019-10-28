

document.addEventListener("render", (e) => {
  console.log('render');
  console.log(e)

});

export let renderEngine = async (targetID, component, callback) => {

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
