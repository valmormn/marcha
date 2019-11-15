// mouse.js

let clickController = () => {
  document.addEventListener("click", e => {
    console.log(e)
    if (e.srcElement.tagName === "A") {
      e.preventDefault()
      e.stopPropagation()
      console.log(e.srcElement)
    } else {
      return
    }
  })
}

let afterLoad = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // console.log("mouse2")
    // clickController()
  })
}

// console.log("mouse")

// afterLoad();
clickController()

export let mouse = {
  id: "mouse",
  afterLoad: afterLoad,
  clickController: clickController,
}
