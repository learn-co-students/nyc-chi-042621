// 1) Find the element
  const tacoButton = document.querySelector("button#taco.nav-button")
  const emojisUl = document.querySelector("#blobs")
// 2) Use addEventListener with an event listener callback function
// 3) Write out the instructions within the callback


tacoButton.addEventListener("click", (e) => {


  const promiseBox = new Promise((resolve) => {
    setTimeout(() => {
      let tacoString = "Info from the server"
      resolve(tacoString)
    }, 1000)
  })


  // const promiseWithAResponseInIt = fetch("", {})
  // promiseWithAResponseInIt.then(resp => resp.json())

  promiseBox
    .then((thingInsideBox) => {
      console.log(thingInsideBox)
    })



  let tacoLi = document.createElement("li")
  tacoLi.textContent = "🌮"
  emojisUl.appendChild(tacoLi)
})




