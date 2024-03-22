let breathingInterval;
let inhale = true; // Variable to track inhale/exhale status

document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('startBtn');
  const stopButton = document.getElementById('stopBtn');

  startButton.addEventListener('click', startBreathing);
  stopButton.addEventListener('click', stopBreathing);
});

function startBreathing() {
  breathingInterval = setInterval(breathe, 4000);
}

function breathe() {
  const circle = document.getElementById('circle');
  const breathingStatus = document.getElementById('breathing-status');

 

  // Toggle inhale/exhale status
  inhale = !inhale;

  // Scale the circle
  circle.style.transform = 'scale(1.2)';
  setTimeout(() => {
    circle.style.transform = 'scale(1)';
  }, 2000);
}

function stopBreathing() {
  clearInterval(breathingInterval);
}
