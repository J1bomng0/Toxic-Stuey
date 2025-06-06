let timer
let minutes = 25
let seconds = 0
let isPaused = true
let enteredTime = null

function startTimer() {
    clearInterval(timer); 
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const timerElement = document.getElementById('timer');

    if (!isPaused) {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            alert('Time is up! Take a break. Good Job!');
        } else {
            if (seconds > 0) {
                seconds--;
            } else {
                seconds = 59;
                minutes--;
            }
        }
    }

    timerElement.textContent = formatTime(minutes, seconds);
}

function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function togglePauseResume() {
    const pauseResumeButton = document.querySelector('.buttons button');
    isPaused = !isPaused;
    if (isPaused) {
        clearInterval(timer);
        pauseResumeButton.textContent = 'Resume';
    } else {
        startTimer();
        pauseResumeButton.textContent = 'Pause';
    }
}

function restartTimer() {
    clearInterval(timer);
    minutes = enteredTime || 15;
    seconds = 0;
    isPaused = false;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(minutes, seconds);
    const pauseResumeButton = document.querySelector('.buttons button');
    pauseResumeButton.textContent = 'Pause';
    startTimer();
}

function chooseTime() {
    const newTime = prompt('Enter new time in minutes:');
    if (!isNaN(newTime) && newTime > 0) {
        enteredTime = parseInt(newTime);
        minutes = enteredTime;
        seconds = 0;
        isPaused = false;
        const timerElement = document.getElementById('timer');
        timerElement.textContent = formatTime(minutes, seconds);
        clearInterval(timer);
        const pauseResumeButton = document.querySelector('.control-buttons button');
        pauseResumeButton.textContent = 'Pause';
        startTimer();
    } else {
        alert('Invalid input. Please enter a valid number greater than 0.');
    }
}

const messages = [
    "Don't you want to be successful???",
    "შენ მაგივრად მე ვისწავლი????",
    "ტიკტოკი გასწავლის?",
    "Imagine failing this exam.",
    "Others are working harder right now.",
    "You're behind... again!",
    "GPA რამდენი გაქვს?",
    "გამოცდაზე რას აპირებ?",
    "და სტიპენდია?",
    "დე, მა, საგანი შემეტენა",
    "Imagine man telling you, he's smarter"
];

function showRandomMessage() {
    const messageBox = document.getElementById('message-box');
    const message = messages[Math.floor(Math.random() * messages.length)];
    const sound = document.getElementById('toxic-sound');

    messageBox.innerText = message;

    messageBox.style.display = 'none'; 
    void messageBox.offsetWidth; 
    messageBox.style.display = 'block'; 

    sound.currentTime = 0;
    sound.play();

    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 5000);

    const nextDelay = (Math.floor(Math.random() * 2) + 1) * 60 * 1000;
    setTimeout(showRandomMessage, nextDelay);
}



startTimer();
showRandomMessage();
