let body = document.querySelector('body');

const IMG_NUM = 3;

function showBg(imgNumber) {
    let img = document.createElement('img');
    body.appendChild(img);
    img.src = `images / ${imgNumber+1}.jpg`
}

function getRandom() {
    return Math.floor(Math.random()*IMG_NUM);
}

function init() {
    let randomNumber = getRandom();
    showBg(randomNumber);
}
init();
