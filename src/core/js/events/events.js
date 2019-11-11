// events.js

// loadComponentJS
document.addEventListener("loadComponentJS", e => {
  // console.log(e)

  var loadComponentJS = new CustomEvent(e.srcElement.id, {
    detail: "pageScan",
    bubbles: true,
    cancelable: false,
  })

  setTimeout(document.dispatchEvent(loadComponentJS), 100)

  // var login = document.getElementById("toggleAuth")
  // console.log(login)

  // login.addEventListener("click", () => {
  //   console.log("click no login")
  // })
})

export let events = {
  id: "events",
}
