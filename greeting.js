let formGreeting = document.querySelector('.js-formGreeting');

let inputGreeting = formGreeting.querySelector('input');

let sayHello = document.querySelector('#sayHello');

const USER_NAME = 'userName';

function showName(text) {
    formGreeting.classList.remove('showing');
    sayHello.classList.add('showing');
    sayHello.innerText = `Hello ${text}!`;
}

function saveName(text) {
    localStorage.setItem(USER_NAME, text);
    showName(text);
}

function handleSubmit(event) {
    event.preventDefault();
    let inputName = inputGreeting.value;
    saveName(inputName);
}

function askForName() {
    formGreeting.classList.add('showing');
    formGreeting.addEventListener('submit', handleSubmit);
}

function loadName() {
    let loadedName = localStorage.getItem(USER_NAME);
    if (loadedName===null) {
        askForName();
    } else {
        showName(loadedName);
    }
}

function init() {
    loadName();
}
init();