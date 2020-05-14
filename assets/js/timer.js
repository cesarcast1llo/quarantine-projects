var milliSeconds = 0;
var seconds = 0;
var minutes = 0;
var timer;

var stopwatch = document.querySelector('.stopwatch');

function start() {
  if (!timer) {
    timer = setInterval(runClock, 10);
  }
}

function runClock() {
  stopwatch.textContent = getTimer();
  milliSeconds++;
  if (milliSeconds === 100) {
    milliSeconds = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
}

function pause() {
  stopTimer();
}

//TODO find a quicker way
function stop() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  milliSeconds = 0;
  stopwatch.textContent = getTimer();
}

function stopTimer() {
  clearInterval(timer);
  timer = false;
}

function getTimer() {
  return (
    (minutes < 10 ? `0` + minutes : minutes) +
    `:` +
    (seconds < 10 ? `0` + seconds : seconds) +
    `:` +
    (milliSeconds < 10 ? `0` + milliSeconds : milliSeconds)
  );
  // minutes, seconds, milliseconds have zero in front until they reach 10
  // not necessary, but for UI
}

function restart() {
  stop();
  start();
}
