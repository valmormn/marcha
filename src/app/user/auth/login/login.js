// login.js

import { loginFormSubmit } from "./loginFormSubmit.js"

document.addEventListener("loginComponent", () => {
  // login event handler
  console.log("login")
  setTimeout(() => {
    let loadSingUpPage = document.getElementById("loadSingUpPage")
    loadSingUpPage.addEventListener("click", e => {
      console.log(e)
      window.history.pushState({}, "signup", "signup")
      // renderX("main", "./app/auth/signup/signup.html");

      window.renderXX("main", window.route.signup, () => {
        console.log("ta foda")

        var pageScanEvent = new CustomEvent("signupComponent", {
          detail: "signupComponent",
          bubbles: true,
          cancelable: false
        })

        setTimeout(document.dispatchEvent(pageScanEvent), 100)
      })

      var event = new CustomEvent("signup", {
        detail: {
          message: "signup",
          time: new Date()
        },
        bubbles: true,
        cancelable: true
      })
      document.dispatchEvent(event)
    })
  }, 200)
})

document.addEventListener("DOMContentLoaded", () => {
  // console.log('login');
  window.route.login = {
    name: "loginComponent",
    title: "login",
    path: "/app/auth/login/login.html"
  }

  // Object.defineProperty(window.route, "renderX", {
  //   value: renderX,
  //   writable: false,
  //   enumerable: true
  // });
})

export let login = {
  id: "login",
  loginFormSubmit: loginFormSubmit
}
