import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.currentTarget;
  const delay = parseInt(form.elements.delay.value, 10);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: '✅ Success',
        titleColor: '#ffffff',
        message: `Fulfilled promise in ${delay}ms`,
        iconUrl: '../img/ok.svg',
        iconColor: '#ffffff',
        backgroundColor: '#59a10d',
        messageColor: '#ffffff',
        progressBarColor: '#326101',
        position: 'topRight',
        overlayColor: 'rgba(181,234,124,1)',
        timeout: 3000,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '❌ Error',
        titleColor: '#ffffff',
        message: `Rejected promise in ${delay}ms`,
        iconUrl: '../img/error.svg',
        iconColor: '#ffffff',
        backgroundColor: '#ef4040',
        messageColor: '#ffffff',
        progressBarColor: '#b51b1b',
        position: 'topRight',
        overlayColor: 'rgba(255,190,190,1)',
        timeout: 3000,
      });
    });

  form.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
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
