const display = document.getElementById("StopwatchDisplay");
let timer = null;
let startTime = 0;
let elaspedTime = 0;
let isRunning = false;

function StartStopwatch(){

    if(!isRunning){
        startTime = Date.now() - elaspedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function StopStopwatch(){
    if(isRunning){
        clearInterval(timer);
        elaspedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function ResetStopwatch(){
    clearInterval(timer);
    startTime = 0;
    elaspedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";

}

function update(){

    const currentTime = Date.now();
    elaspedTime = currentTime - startTime;

    let hours = Math.floor(elaspedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elaspedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elaspedTime / 1000 % 60);
    let miliseconds = Math.floor(elaspedTime % (1000 / 10));

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    miliseconds = String(miliseconds).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}