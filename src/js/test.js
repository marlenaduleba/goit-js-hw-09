
// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';

// const startBtn = document.querySelector("[data-start]");
// const dataDays = document.querySelector("[data-days]");
// const dataHours = document.querySelector("[data-hours]");
// const dataMinutes = document.querySelector("[data-minutes]");
// const dataSeconds = document.querySelector("[data-seconds]");

// let selectedTime = null;
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] <= Date.now()) {
//       startBtn.setAttribute("disabled", "disabled");
//       Notiflix.Notify.failure('Please choose a date in the future')
//     } else {
//       startBtn.removeAttribute("disabled")
//       Notiflix.Notify.info('Your can run your timer');
//       selectedTime = selectedDates[0];
//     }
//   },
// };

// flatpickr("#datetime-picker", options);

// startBtn.addEventListener("click", startTimer);

// let intervalId = null;
// function startTimer() {
//   Notiflix.Notify.success('Your timer is running');
//   Notiflix.Loading.pulse('In progress', {
//     backgroundColor: 'transparent',
//     cssAnimationDuration: 1000
//   });
//   startBtn.setAttribute("disabled", "disabled");
//   let differenceTime = selectedTime - Date.now();
//   intervalId = setInterval(() => {
//     differenceTime -= 1000;
//     if (differenceTime < 0) {
//       clearInterval(intervalId);
//       Notiflix.Loading.remove(1000)
//       return;
//     }
//     const convertedTime = convertMs(differenceTime);
//     dataDays.textContent = convertedTime.days
//     dataHours.textContent = convertedTime.hours;
//     dataMinutes.textContent = convertedTime.minutes;
//     dataSeconds.textContent = convertedTime.seconds;
//   }, 1000)
// }

// function addLeadingZero(value) {
//     return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   const days = addLeadingZero(Math.floor(ms / day));
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
//   return { days, hours, minutes, seconds };
// }
