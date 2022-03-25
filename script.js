document.addEventListener('DOMContentLoaded', () => {
     todoList();
})

let todoListItems = [
    {
        taskName: 'lavar platos',
    },
    {
        taskName: 'entrevista a las 5',
    },
    {
        taskName: 'recoger a mi novia',
    }
]
const todoList = () =>{
        const listLocalStorage = JSON.parse(localStorage.getItem("toDOList"));
        console.log("🚀 ~ file: script.js ~ line 18 ~ todoList ~ listLocalStorage", listLocalStorage)
        
        listLocalStorage ? (todoListItems= listLocalStorage) : (todoListItems = todoListItems)
        todoListItems.forEach(nodo => {
        const task = document.createElement('div');
        task.classList.add('task', 'roundBorder');
        task.addEventListener('click', changeTaskState)
        task.textContent = nodo.taskName;
        tasksContainer.prepend(task);
    });
    
}
// Informacion date (fecha)
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    // console.log('====================================');
    // console.log(date.toLocaleString('es', { day: 'numeric' }));
    // console.log('====================================');

    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    // console.log('====================================');
    // console.log(date.toLocaleString('es', { weekday: 'short' }));
    // console.log('====================================');
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    // console.log('====================================');
    // console.log(date.toLocaleString('es', { month: 'long' }));
    // console.log('====================================');
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
    // console.log('====================================');
    // console.log(date.toLocaleString('es', { year: 'numeric' }));
    // console.log('====================================');
};

const addNewTask = event => {
    event.preventDefault();
    // console.log('====================================');
    // console.log(event.target.taskText.value);
    // console.log('====================================');
    // if(!event.target.taskText.value) return;
    const { value } = event.target.taskText;

    if(!value) return;

    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder', );
    task.addEventListener('click', changeTaskState)
    task.textContent = `${value}`;
    tasksContainer.prepend(task);
    todoListItems.push({ taskName: value, });
    localStorage.setItem("toDOList", JSON.stringify(todoListItems)); 
    
    event.target.reset();
};

const changeTaskState = event => {
    // console.log('====================================');
    // console.log(event.target.classList);
    // console.log('====================================');
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    // console.log('================aqui debemos ver un array de nodos===================');
    // console.log(tasksContainer.childNodes);
    // console.log('====================================');
    tasksContainer.childNodes.forEach( nodo => {
        nodo.classList.contains('done') ? done.push(nodo) : toDo.push(nodo)
    })
    return [...done, ...toDo ];
}

const renderOrderedTasks = () => {

    // console.log('====================================');
    // console.log(order());
    // console.log('====================================');
    // const data = order();
    // data.forEach(element => tasksContainer.appendChild(element))
    order().forEach(element => tasksContainer.appendChild(element));
    
}

setDate();


