let clock = document.querySelector('.js-clock');

let title = clock.querySelector('.js-title');

let startBtn = clock.querySelector('.js-start');

let stopBtn = clock.querySelector('.js-stop');

let timerId = null;

function stopClock() {
    clearInterval(timerId);
    stopBtn.classList.add('hidden');
    startBtn.classList.remove('hidden');
}

function startClock() {
    currentTime();
    timerId = setInterval(currentTime, 1000);
    startBtn.classList.add('hidden');
    stopBtn.classList.remove('hidden');
}

function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    title.innerText = `${hours<10? `0${hours}`:hours}:${minutes<10? `0${minutes}`:minutes}:${seconds<10? `0${seconds}`:seconds}`;
}

function init() {
    startBtn.addEventListener('click', startClock);
    stopBtn.addEventListener('click', stopClock);
}
init();