// hearder.js

let checkThis2 = function() {
  let resposta = "";
  fetch("src/app/layout/header/trythis.js")
    .then(response => response.text())
    .then(text => (resposta = text));

  return resposta;
};

let afterLoad = () => {
  document.addEventListener("DOMContentLoaded", function() {
    // console.log("wtf");
    // console.log('headerComponent');
    window.route.header = {
      name: "headerComponent",
      path: "/app/layout/header/header.html",
      title: "header"

    }

    setTimeout(() => {
      var login = document.getElementById("toggleAuth");
      // console.log(login);

      login.addEventListener("click", () => {
        // console.log("click login");
        window.history.pushState({}, "login", "  ?=login");
        // renderX("main", "./app/auth/auth.html");
        let destino = "./app/auth/login/login.html";
        window.renderX("main", destino);
        
        var event = new CustomEvent( "login",  {
            detail: {
              message: "Hello World!",
              time: new Date(),
            },
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(event);
        
      });

      var halfmoon = document.getElementById("halfmoon");
      // console.log(halfmoon);

      halfmoon.addEventListener("click", () => {
        console.log(halfmoon);
        // console.log("click halfmoon");
        // window.history.pushState({}, "auth", "  ?=auth");
        // renderX("main", "./app/auth/auth.html");
      });
    }, 1000);
  });
};

export let header = {
  id: "header",
  path: "/app/page/layout/header/header.js",
  afterLoad: afterLoad()
};
