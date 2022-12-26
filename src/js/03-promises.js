import Notiflix, { Notify } from 'notiflix';

const form = document.querySelector('.form');
const { delay, step, amount } = form;

let totalDelay = 0;

form.addEventListener('submit', event => {
  event.preventDefault();
  showPromises();
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function showPromises() {
  for (let i = 0; i < amount.value; i++) {
    let delayNumber = Number(delay.value);
    let stepNumber = Number(step.value);
    totalDelay = delayNumber + stepNumber * i;
    createPromise(i + 1, totalDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
