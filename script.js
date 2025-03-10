const inputElement = document.getElementById('typeText')
const taskListElement = document.getElementById('task-list')
const addBtn = document.getElementById('add-button')

 const taskArray = []

addBtn.addEventListener('click', (event) => {
    event.preventDefault()
    pushTask()
})

function pushTask(){
    taskArray.push(inputElement.value)
    //console.log(taskArray)
    createDiv()
}
function createDiv(){
    const div = document.createElement('div')
    div.classList.add('div-task')

    const p = document.createElement('p')
    p.classList.add('p-task')

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add('task-deleteBtn')

    taskArray.forEach((value) =>{
        taskListElement.appendChild(div)
        p.textContent = value
        div.appendChild(p)
        div.appendChild(deleteBtn)
    })

}