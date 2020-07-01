// console.log("imports")
const images = { cat: "/cat.png", dog: "/dog.png", duck: "/duck.png" }
const sizes = {}

let promise = new Promise((resolve, reject) => {
  if (1 === 2) resolve("done")
  else reject(new Error("…"))
})

const checkIfDone = () => {
  promise
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.log(err)

      console.error("Deu ruim!")
    })
}

checkIfDone()

// #####################

function chopCarrots() {
  /**
   * Some long computational task here...
   */
  console.log("Done chopping carrots!")
}

function chopOnions() {
  /**
   * Some long computational task here...
   */
  let array = Array(9999)
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }
  console.log("Done chopping onions!")
}

function addOnions() {
  console.log("Add Onions to pot!")
}

function addCarrots() {
  console.log("Add Carrots to pot!")
}

async function letPotKeepBoiling(time) {
  return /* A promise to let the pot keep boilng for certain time */
}

async function boilPot() {
  return /* A promise to let the pot boil for time */
}

async function makeSoup() {
  const pot = boilPot()
  chopCarrots()
  chopOnions()
  await pot
  addCarrots()
  await letPotKeepBoiling(5)
  addOnions()
  await letPotKeepBoiling(10)
  console.log("Your vegetable soup is ready!")
}

makeSoup()

// #############################

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved")
    }, 2000)
  })
}

async function asyncCall() {
  console.log("calling")
  var result = await resolveAfter2Seconds()
  console.log(result)
  // expected output: 'resolved'
}

asyncCall()
