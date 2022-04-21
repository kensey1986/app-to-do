var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
document.addEventListener('DOMContentLoaded', function () {
    todoList();
});
 interface ITareas{
     taskName: string;
     estado?: boolean;
 }
var todoListItems:ITareas[] = [
    {
        taskName: 'lavar platos'
    },
    {
        taskName: 'entrevista a las 5'
    },
    {
        taskName: 'recoger a mi novia'
    }
];
var todoList = function () {
    var listLocalStorage = JSON.parse(localStorage.getItem("toDOList"));
    console.log("🚀 ~ file: script.js ~ line 18 ~ todoList ~ listLocalStorage", listLocalStorage);
    listLocalStorage ? (todoListItems = listLocalStorage) : (todoListItems = todoListItems);
    todoListItems.forEach(function (nodo) {
        var task = document.createElement('div');
        task.classList.add('task', 'roundBorder');
        task.addEventListener('click', changeTaskState);
        task.textContent = nodo.taskName;
        tasksContainer.prepend(task);
    });
};
// Informacion date (fecha)
var dateNumber = document.getElementById('dateNumber');
var dateText = document.getElementById('dateText');
var dateMonth = document.getElementById('dateMonth');
var dateYear = document.getElementById('dateYear');
// Tasks Container
var tasksContainer = document.getElementById('tasksContainer');
var setDate = function () {
    var date = new Date();
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
var addNewTask = function (event) {
    event.preventDefault();
    // console.log('====================================');
    // console.log(event.target.taskText.value);
    // console.log('====================================');
    // if(!event.target.taskText.value) return;
    var value = event.target.taskText.value;
    if (!value)
        return;
    var task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = "".concat(value);
    tasksContainer.prepend(task);
    todoListItems.push({ taskName: value });
    localStorage.setItem("toDOList", JSON.stringify(todoListItems));
    event.target.reset();
};
var changeTaskState = function (event) {
    // console.log('====================================');
    // console.log(event.target.classList);
    // console.log('====================================');
    event.target.classList.toggle('done');
};
var order = function () {
    var done = [];
    var toDo = [];
    // console.log('================aqui debemos ver un array de nodos===================');
    // console.log(tasksContainer.childNodes);
    // console.log('====================================');
    tasksContainer.childNodes.forEach(function (nodo) {
        console.log('====================================');
        console.log(nodo);
        console.log('====================================');
        nodo.classList.contains('done') ? done.push(nodo) : toDo.push(nodo);
    });
    return __spreadArray(__spreadArray([], done, true), toDo, true);
};
var renderOrderedTasks = function () {
    // console.log('====================================');
    // console.log(order());
    // console.log('====================================');
    // const data = order();
    // data.forEach(element => tasksContainer.appendChild(element))
    order().forEach(function (element) { return tasksContainer.appendChild(element); });
};
setDate();
