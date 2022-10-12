import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  startBtn: document.querySelector('button[data-start]'),
};

let choosedTime = 0;
let timerTime = 0;

new flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    choosedTime = selectedDates[0].getTime();
    if (choosedTime < Date.now()) {
      alert('Choose the time in the future');
      refs.startBtn.disabled = true;
    }
    return choosedTime;
  },
});

refs.startBtn.addEventListener('click', () => {
  const timer = setInterval(() => {
    const currentTime = Date.now();
    const convertedTime = convertMs(choosedTime - currentTime);

    timerTime = choosedTime - currentTime;

    refs.days.textContent = addLeadingZero(convertedTime.days);
    refs.hours.textContent = addLeadingZero(convertedTime.hours);
    refs.minutes.textContent = addLeadingZero(convertedTime.minutes);
    refs.seconds.textContent = addLeadingZero(convertedTime.seconds);

    if (timerTime <= 1000) {
      clearInterval(timer);
    }
  }, 1000);
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
