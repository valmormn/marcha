// mouse.js

let clickController = () => {
  document.addEventListener("click", e => {
    console.log(e)
    try {
      if (
        e.srcElement.tagName === "A" ||
        e.srcElement.parentElement.tagName === "A"
      ) {
        e.stopPropagation()
        e.preventDefault()
        console.log(e.srcElement.dataset.link)
        console.log(e.srcElement.dataset.path)
      } else {
        console.log("wtf");
        
      }
    } catch (error) {
      // console.error(error)
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
