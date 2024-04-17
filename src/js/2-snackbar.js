import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();

  const delayInput = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  const makePromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delayInput);
        } else {
          reject(delayInput);
        }
      }, delayInput);
    });
  };

  makePromise()
    .then(delay => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
      });
    })
    .catch(delay => {
      console.error(`❌ Rejected promise in ${delay}ms`);
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topCenter',
      });
    });

  setTimeout(() => {
    event.target.reset();
  }, 0);
}
