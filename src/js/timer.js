import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datetimePicker = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

let userSelectedDate = null;
let timerInterval = null;

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  /// Number of milliseconds per unit of time
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const picked = selectedDates[0];
    if (picked <= new Date()) {
      startBtn.disabled = true;
      iziToast.error({
        title: 'Hata',
        titleColor: '#fff',
        message: 'Please choose a date in the future',
        iconUrl: '../img/error.svg',
        iconColor: '#fff',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        progressBarColor: '#4375ff',
        position: 'topRight',
      });
      userSelectedDate = null;
    } else {
      startBtn.disabled = false;
      userSelectedDate = picked;
    }
  },
  locale: {
    firstDayOfWeek: 1,
  },
});

startBtn.addEventListener('click', () => {
  if (!userSelectedDate) return;

  startBtn.disabled = true;
  datetimePicker.disabled = true;

  timerInterval = setInterval(() => {
    const now = new Date();
    const diff = userSelectedDate - now;

    if (diff <= 0) {
      clearInterval(timerInterval);
      updateTimerDisplay(0);
      return;
    }

    updateTimerDisplay(diff);
  }, 1000);
});

function updateTimerDisplay(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);

  daysSpan.textContent = String(days).padStart(2, '0');
  hoursSpan.textContent = addLeadingZero(hours);
  minutesSpan.textContent = addLeadingZero(minutes);
  secondsSpan.textContent = addLeadingZero(seconds);
}

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
      .iziToast > .iziToast-close {
        background: url('../img/close.svg') no-repeat center center;
        background-size: 16px 16px;
        width: 24px;
        height: 24px;
        color: transparent;
        opacity: 1;
        top: 14px;
        right: 14px;
      }
    `;
  document.head.appendChild(style);
});
