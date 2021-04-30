let promiseBox = new Promise((resolve) => {
    setTimeout(() => {
      let thisThing = "Information from a server"
      resolve(thisThing)
    }, 5000)
  })

//   let promise = fetch("URL", {})

promiseBox
    .then((infoInsidePromise) => {
        console.log(infoInsidePromise)
    })

console.log("Hello")
console.log("Goodbye")
console.log("Bawk bawk")

  