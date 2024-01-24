const counting = document.getElementById("count");
const secCount = document.getElementById("sec");
const minCount = document.getElementById("min");
const hourCount = document.getElementById("hr");

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let intervalId;

let timer = false;

function start() {
  if (!timer) {
    timer = true;
    intervalId = setInterval(stopwatch, 10);
  }
}

function stop() {
  timer = false;
  clearInterval(intervalId);
}

function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;

  counting.innerHTML = "00";
  secCount.innerHTML = "00";
  minCount.innerHTML = "00";
  hourCount.innerHTML = "00";
}

function stopwatch() {
  if (timer) {
    count = count + 1;

    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    let hrString = hr < 10 ? "0" + hr : hr;
    let minString = min < 10 ? "0" + min : min;
    let secString = sec < 10 ? "0" + sec : sec;
    let countString = count < 10 ? "0" + count : count;

    counting.innerHTML = countString;
    secCount.innerHTML = secString;
    minCount.innerHTML = minString;
    hourCount.innerHTML = hrString;
  }
}
