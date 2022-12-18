function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timer = null;

startBtn.addEventListener('click', () => {
  timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  stopBtn.disabled = false;
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  stopBtn.disabled = true;
  startBtn.disabled = false;
});
