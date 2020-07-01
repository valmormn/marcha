// mouse.js

document.addEventListener("click", e => {
  console.log(e.srcElement)
  if (
    e.srcElement.tagName === "A" ||
    e.srcElement.parentElement.tagName === "A"
  ) {
    clickControllerX(e)
      .then(() => {
        // console.log("1 one more time")
      })
      .catch(e => {
        // console.error()
        // console.log("4")
        console.log(e)
        // console.log(1 + 4)
      })
      .then(() => {
        // console.log("2 wtf doidao!")
      })
      .finally(() => {
        // console.log("3 duuuuude!")
      })
  } else {
    // console.log(e.srcElement)
  }
})

let clickControllerX = async e => {
  // e.stopPropagation()
  // e.preventDefault()
  // console.log(e.srcElement.dataset.link)
  // console.log(e.srcElement.dataset.path)
  // console.log(e.srcElement)
  // throw new Error("mose.js - Thrown from thisThrows()")
  // return
}

let clickController = () => {
  document.addEventListener("click", e => {
    // console.log(e)
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
        console.log("wtf")
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
// clickController()

export let mouse = {
  id: "mouse",
  // afterLoad: afterLoad,
  // clickController: clickController,
}
