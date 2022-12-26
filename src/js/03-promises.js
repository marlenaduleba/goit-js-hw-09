import Notiflix, { Notify } from 'notiflix';

const form = document.querySelector(".form");
const { delay, step, amount } = form;

let totalDelay = 0;

form.addEventListener("submit", event => {
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
  }, delay.value);
  
});
  
}

function showPromises() {
  
    for (let i = 1; i <= amount.value; i++) {
  let parsedDelay = Number.parseInt(delay.value);
  let parsedStep = Number.parseInt(step.value);
  totalDelay = parsedDelay + parsedStep * i;
    createPromise(i, totalDelay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    
}

}

