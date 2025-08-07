let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId = null;
let isRunning = false;

const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

function startStopwatch() {
    if (!isRunning) {
        intervalId = setInterval(updateStopwatch, 1);
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

function stopStopwatch() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

function resetStopwatch() {
    clearInterval(intervalId);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function updateStopwatch() {
    milliseconds++;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateDisplay();
}

function updateDisplay() {
    hoursDisplay.textContent = String(hours).padStart(2, '0');
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
    millisecondsDisplay.textContent = String(milliseconds).padStart(3, '0');
}
