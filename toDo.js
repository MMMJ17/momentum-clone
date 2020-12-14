let formToDo = document.querySelector('.js-formToDo');

let inputToDo = formToDo.querySelector('input');

let ul = document.querySelector('.toDoList');

const TODO = 'toDos';

let toDoArr = [];

function deleteToDo(event) {
    let li = event.target.parentNode;
    ul.removeChild(li);
    let cleanToDoArr = toDoArr.filter(function (toDo) {
        return toDo.id !== li.id;
    })
    toDoArr = cleanToDoArr;
    saveToDo();
}

function showToDo(index) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let btn = document.createElement('button');
    ul.appendChild(li);
    li.appendChild(btn);
    li.appendChild(span);
    li.id = toDoArr.length + 1;
    span.innerText = index;
    btn.innerText = '✔';
    btn.addEventListener('click', deleteToDo);
    let toDoObj = {
        text: index,
        id: li.id
    }
    toDoArr.push(toDoObj);
    saveToDo();
}

function saveToDo() {
    localStorage.setItem(TODO, JSON.stringify(toDoArr));
}

function handleSubmit(event) {
    event.preventDefault();
    showToDo(inputToDo.value);
    inputToDo.value = '';
}

function loadToDo() {
    let loadedToDo = localStorage.getItem(TODO);
    if (loadedToDo !== null) {
        let parsedToDos = JSON.parse(localStorage.getItem(TODO));
        parsedToDos.forEach(function (index) {
            showToDo(index.text);
        })
    } 
}

function init() {
    loadToDo();
    formToDo.addEventListener('submit', handleSubmit);
}
init();