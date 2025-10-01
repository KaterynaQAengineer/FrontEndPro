let seconds = parseInt(prompt("Enter time in seconds:"));

function formatTime(sec) {
  let min = Math.floor(sec / 60);
  let s = sec % 60;

  return (min < 10 ? "0" + min : min) + ":" + (s < 10 ? "0" + s : s);
}

const timerElement = document.getElementById("timer");
timerElement.textContent = formatTime(seconds);

// Запускаю інтервал кожну секунду
let countdown = setInterval(() => {
  seconds--;

  if (seconds >= 0) {
    timerElement.textContent = formatTime(seconds);
  } else {
    clearInterval(countdown); // зупиняємо таймер на 00:00
  }
}, 1000);
