const timerContainer = document.querySelector(".timer-container");

let minutes = 60;
let seconds = 0;

let interval;

function decrTimer() {
  if (seconds <= 0) {
    if (minutes <= 0) {
      clearInterval(interval);
    } else {
      seconds = 59;
      minutes--;
    }
  } else {
    seconds--;
  }

  timerContainer.textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

window.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
    interval = undefined;
  } else {
    interval = setInterval(decrTimer, 1000);
  }
});
