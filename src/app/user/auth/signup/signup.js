// signup

import { signupFormSubmit } from "./signupFormSubmit.js"

document.addEventListener("signupComponent", () => {
  // //console.log('xerecao');
  setTimeout(async () => {
    // //console.log('xerecao2');
    let usernameInput = document.querySelector("#Inputusername1")
    let userNameInputHandler = async () => {
      usernameInput.addEventListener("keyup", e => {
        //console.log(e);
        return false
      })

      usernameInput.addEventListener("blur", e => {
        e.preventDefault()
        e.stopPropagation()
        //console.log(e);

        //console.log('verificar se o username está disponível');
        // se não passar no teste de validação emitir aviso e bloquear
        async function validateUsernameInput(usernameInput) {
          //console.log(usernameInput);

          try {
            // "await" will wait for the promise to resolve or reject
            // if it rejects, an error will be thrown, which you can
            // catch with a regular try/catch block
            // const someValue = await getSomeValue();
            // doSomethingWith(someValue);
            //console.log(usernameInput);
            document.getElementById("btnSignUpFormSubmit").disabled = false

            // if (error) { throw "fuck"; }
          } catch (error) {
            //console.error(error);
            usernameInput.className += " is-invalid"
            document.getElementById("btnSignUpFormSubmit").disabled = true
          } finally {
            //console.log('finally');
          }
        }

        validateUsernameInput(usernameInput)
        // })

        return false
      })
    }
    await userNameInputHandler()

    let emailInput = document.querySelector("#InputEmail1")
    emailInput.addEventListener("blur", e => {
      e.preventDefault()
      e.stopPropagation()
      //console.log(e);

      //console.log('verificar se o email está disponível');
      // se não passar no teste de validação emitir aviso e bloquear
      async function validateEmailInput(emailInput) {
        //console.log(emailInput);

        try {
          // "await" will wait for the promise to resolve or reject
          // if it rejects, an error will be thrown, which you can
          // catch with a regular try/catch block
          // const someValue = await getSomeValue();
          // doSomethingWith(someValue);
          //console.log(emailInput);
          document.getElementById("btnSignUpFormSubmit").disabled = false

          // if (error) { throw "fuck"; }
        } catch (error) {
          //console.error(error);
          emailInput.className += " is-invalid"
          document.getElementById("btnSignUpFormSubmit").disabled = true
        } finally {
          // //console.log('finally');
        }
      }

      validateEmailInput(emailInput)
      // })

      return false
    })

    let passInput = document.querySelector("#InputPassword1")
    passInput.addEventListener("blur", e => {
      e.preventDefault()
      e.stopPropagation()
      //console.log(e);

      //console.log('verificar se o username está disponível');
      // se não passar no teste de validação emitir aviso e bloquear
      async function validatePassInput(passInput) {
        //console.log(passInput);

        try {
          // "await" will wait for the promise to resolve or reject
          // if it rejects, an error will be thrown, which you can
          // catch with a regular try/catch block
          // const someValue = await getSomeValue();
          // doSomethingWith(someValue);
          //console.log(passInput);
          document.getElementById("btnSignUpFormSubmit").disabled = false

          // if (error) { throw "fuck"; }
        } catch (error) {
          //console.error(error);
          passInput.className += " is-invalid"
          document.getElementById("btnSignUpFormSubmit").disabled = true
        } finally {
          //console.log('finally');
        }
      }

      validatePassInput(passInput)
      // })

      return false
    })

    let passConfirmationInput = document.querySelector("#InputPassword2")
    passConfirmationInput.addEventListener("blur", e => {
      e.preventDefault()
      e.stopPropagation()
      //console.log(e);

      //console.log('verificar se o username está disponível');
      // se não passar no teste de validação emitir aviso e bloquear
      async function validateUsernameInput(usernameInput) {
        //console.log(usernameInput);

        try {
          // "await" will wait for the promise to resolve or reject
          // if it rejects, an error will be thrown, which you can
          // catch with a regular try/catch block
          // const someValue = await getSomeValue();
          // doSomethingWith(someValue);
          //console.log(usernameInput);
          document.getElementById("btnSignUpFormSubmit").disabled = false

          // if (error) { throw "fuck"; }
        } catch (error) {
          //console.error(error);
          usernameInput.className += " is-invalid"
          document.getElementById("btnSignUpFormSubmit").disabled = true
        } finally {
          //console.log('finally');
        }
      }

      validateUsernameInput(usernameInput)
      // })

      return false
    })

    let btnSignUpFormSubmit = document.getElementById("btnSignUpFormSubmit")
    btnSignUpFormSubmit.addEventListener("click", e => {
      e.preventDefault()
      e.stopPropagation()
      // //console.log(e);

      //console.log('enviar pedido de registro pro servidor e tratar retorno');
      //console.log(usernameInput.value);
      //console.log(emailInput.value);
      //console.log(passInput.value);
      //console.log(passConfirmationInput.value);

      let processor = "/app/auth/signup/signup.pdo.php"
      // let processor = "/app/auth/signup/signup.medoo.php";

      let data = {
        table: "accounts",
        operation: "insert",
        payload: {
          username: usernameInput.value,
          email: emailInput.value,
          pass: passConfirmationInput.value
        }
      }

      let inputform = "signup-form"
      // Registrar dados no servidor
      signupFormSubmit(inputform, processor)

      // Se tudo der certo logar o usuário e avisar sobre o email de confirmação

      return false
    })

    // window.renderXX("main", window.route.signup, () => {
    //   //console.log('ta foda');
    // });
  }, 100)
})

document.addEventListener("DOMContentLoaded", () => {
  //console.log('signupComponent');
  window.route.signup = {
    name: "signupComponent",
    title: "signup",
    path: "/app/auth/signup/signup.html"
  }
})

export let signup = {
  id: "signup"
}
