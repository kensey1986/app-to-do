// document.addEventListener('DOMContentLoaded', () => {
//     todoList();
// })

let todoListItems = [
    {
        taskName: 'una tarea',
    },
    {
        taskName: '2 tarea',
    },
]
const todoList = () =>{
        // const listLocalStorage = JSON.parse(localStorage.getItem("toDOList"))
        // listLocalStorage? (todoListItems= listLocalStorage) : (todoListItems = todoListItems)
        todoListItems.forEach(element => {
        const task = document.createElement('div');
        task.classList.add('task', 'roundBorder');
        task.addEventListener('click', changeTaskState)
        task.textContent = element.taskName;
        tasksContainer.prepend(task);
    });
    
}
// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    // localStorage.setItem("toDOList", JSON.stringify(todoListItems)); todoListItems.push({ taskName: value, });
    
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( element => {
        element.classList.contains('done') ? done.push(element) : toDo.push(element)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(element => tasksContainer.appendChild(element))
    
}

setDate();