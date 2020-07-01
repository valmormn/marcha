// toggleColorScheme.js

document.addEventListener("DOMContentLoaded", function() {
  console.log("toggleColorScheme");
    var halfmoon = document.getElementById("halfmoon");
    // console.log(halfmoon);

    halfmoon.addEventListener("click", () => {
      console.log(halfmoon);
      // console.log("click halfmoon");
      // window.history.pushState({}, "auth", "  ?=auth");
      // renderX("main", "./app/auth/auth.html");
    });
  }, 5000);


export let toggleColorScheme = {
  id: "toggleColorScheme",
}
