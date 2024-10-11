const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-z0-9_.%+-]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'COOL'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT COOL'
        gmailResult.style.color = 'red'
    }
};



const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

let positionX = 0;
let positionY = 0;
const step = 5;
const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

function moveBlock() {
    if (positionX < offsetWidth && positionY === 0) {
        childBlock.style.left = `${positionX}px`;
        positionX += step;
    } else if (positionX >= offsetWidth && positionY < offsetHeight) {
        childBlock.style.top = `${positionY}px`;
        positionY += step;
    } else if (positionX > 0 && positionY >= offsetHeight) {
        childBlock.style.left = `${positionX}px`;
        positionX -= step;
    } else if (positionX <= 0 && positionY > 0) {
        childBlock.style.top = `${positionY}px`;
        positionY -= step;
    }
    requestAnimationFrame(moveBlock);
}
moveBlock()

let seconds = 0;
let intervalId = null;

const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            seconds++;
            secondsDisplay.textContent = seconds;
        }, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    secondsDisplay.textContent = seconds;
});