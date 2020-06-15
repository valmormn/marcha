// // auth.js

// // import { login } from "./login/login.js"
// // import { signup } from "./signup/signup.js"

// var OAuth = require("@zalando/oauth2-client-js")
// var google = new OAuth.Provider({
//   id: "google", // required
//   authorization_url: "https://google.com/auth" // required
// })

// //

// // Create a new request
// var request = new OAuth.Request({
//   client_id: "my_client_id", // required
//   redirect_uri: "http://my.server.com/auth-answer"
// })

// // Give it to the provider
// var uri = google.requestToken(request)

// // Later we need to check if the response was expected
// // so save the request
// google.remember(request)

// // Do the redirect
// window.location.href = uri

// //

// //
// export let auth = { id: "auth" }
