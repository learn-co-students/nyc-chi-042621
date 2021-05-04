// STABLE ELEMENTS GO AT THE TOP
let newTaskForm = document.querySelector("form#create-task-form")
let listUl = document.querySelector("#tasks")


function getAllItems(){
  fetch("http://localhost:3000/items")
    .then(res => res.json())
    .then((itemsArr) => {  

      itemsArr.forEach((itemObj) => {
        makeItemObjToLi(itemObj)
      })

    })
}

getAllItems()


// function addEventToForm(){
newTaskForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  // evt.target -> 100% will be the form element if it's submit event
    // evt.target -> <form></form>

  let theFormElement = evt.target
  let theInput = theFormElement.ericWasHere
  let whatUserTyped = theInput.value

  // let theUserInputTyped = evt.target.ericWasHere.value

  // To send what the user typed over to the backend
  fetch("http://localhost:3000/items", {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      task: whatUserTyped
    }),
  })
    .then(res => res.json())
    .then((newlyCreatedItem) => {
      makeItemObjToLi(newlyCreatedItem)
      evt.target.reset()
    })

 

})
// }









// {id:0, task: ""} -> <li><p>Buy Tacos</p><button>X</button></li>

function makeItemObjToLi(theItemObj){
  // Make a box
  let todoLi = document.createElement("LI")

  // Fill the contents of that box
    todoLi.innerHTML = `
      <span>${theItemObj.task}</span>
      <button>X</button>
    `

  // Slap box on page
  listUl.append(todoLi)

  // Find elements inside box
    // BUTTON
  let deleteButton = todoLi.querySelector("button")

  // Add event listener on elements
  deleteButton.addEventListener("click", (e) => {
    deleteThisItem(theItemObj, todoLi)
  })

}


function deleteThisItem(itemToBeDeleted, theLiToBeRemoved){
  console.log(itemToBeDeleted)
  // Fetch over here
  // Remove which element???? How do we know?
}