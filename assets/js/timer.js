function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = 'AM';

  if (h == 0) {
    h = 12;
  }

  if (h >= 12) {
    h = h - 12;
    session = 'PM';
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  var time = h + ':' + m + ':' + s + ' ' + session;
  document.getElementById('MyClockDisplay').innerText = time;
  document.getElementById('MyClockDisplay').textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

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
}

function restart() {
  stop();
  start();
}
