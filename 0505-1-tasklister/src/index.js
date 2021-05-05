let tasksUl = document.querySelector("ul#tasks")
let newTaskForm = document.querySelector("form#create-task-form")

// {"id":1, "toDo": "Task"} -> <li><span>Task</span><button>x</button></li>
function takeTaskTurnToLi(taskObj){
  // Create an outer box
  let taskLi = document.createElement("li")
  
  // Fill the box
    taskLi.innerHTML = `
      <span>${taskObj.toDo}</span>
      <button>X</button>
    `

  // Slap box on the DOM
  tasksUl.append(taskLi)

  // Look inside the box for specific elements
  let theDeleteButton = taskLi.querySelector("button")

  // Add event listeners
  theDeleteButton.addEventListener("click", () => {
    console.log(taskObj)
  })
}


function getAllTasks(){

  fetch("http://localhost:3000/tasks")
    .then(res => res.json())
    .then((tasksArr) => {

      tasksArr.forEach((taskFromResp) => {
        takeTaskTurnToLi(taskFromResp)
      })
    })
}

getAllTasks()









newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault()
    // e.target is always the <form> element if we use submit event
  let theForm = e.target
    // I can use ID or name of input to get <input> element
  let theInputElement = theForm.ericWasHere

  let whatUserTypedStr = theInputElement.value
    // e.target.ericWasHere.value

  fetch("http://localhost:3000/tasks", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      toDo: whatUserTypedStr
    })
  })
    .then(res => res.json())
    .then(newlyCreatedTaskObj => {
      takeTaskTurnToLi(newlyCreatedTaskObj)
    })

})  