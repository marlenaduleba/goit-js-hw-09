import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
const daysToDate = document.querySelector('[data-days]');
const hoursToDate = document.querySelector('[data-hours]');
const minutesToDate = document.querySelector('[data-minutes]');
const secondsToDate = document.querySelector('[data-seconds]');
let selectedTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      selectedTime = selectedDates[0];
    }
  },
};

const calendar = flatpickr(input, options);

startBtn.addEventListener('click', countdown);

function countdown() {
  const interval = setInterval(() => {
    const now = new Date();
    const timeDifference = selectedTime - now;
    const convertedTimeDifference = convertMs(timeDifference);
    startBtn.disabled = true;

    if (timeDifference < 0) {
      clearInterval(interval);
      return;
    }
    daysToDate.textContent = addLeadingZero(convertedTimeDifference.days);
    hoursToDate.textContent = addLeadingZero(convertedTimeDifference.hours);
    minutesToDate.textContent = addLeadingZero(convertedTimeDifference.minutes);
    secondsToDate.textContent = addLeadingZero(convertedTimeDifference.seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}
