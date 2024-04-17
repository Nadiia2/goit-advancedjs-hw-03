import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

let countdownInterval;

const startCountdown = () => {
  clearInterval(countdownInterval);
  dateTimePicker.disabled = true;

  const selectedDate = new Date(dateTimePicker.value);
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
      position: 'topCenter',
    });
    dateTimePicker.disabled = false;
    return;
  }

  countdownInterval = setInterval(() => {
    const currentDate = new Date();
    const timeDifference = selectedDate.getTime() - currentDate.getTime();

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      daysValue.textContent = '00';
      hoursValue.textContent = '00';
      minutesValue.textContent = '00';
      secondsValue.textContent = '00';
      iziToast.success({
        title: 'Success',
        message: 'Countdown finished',
        position: 'topCenter',
      });
      dateTimePicker.disabled = false;
      dateTimePicker.value = '';
      startButton.disabled = false;
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      daysValue.textContent = String(days).padStart(2, '0');
      hoursValue.textContent = String(hours).padStart(2, '0');
      minutesValue.textContent = String(minutes).padStart(2, '0');
      secondsValue.textContent = String(seconds).padStart(2, '0');
    }
  }, 1000);

  startButton.disabled = true;
};

flatpickr(dateTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: selectedDates => {
    const selectedDate = selectedDates[0];
    if (!selectedDate) return;
    if (selectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topCenter',
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
});

startButton.addEventListener('click', startCountdown);
