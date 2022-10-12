import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  submitBtn: document.querySelector('button[type="submit"]'),
  form: document.querySelector('.form'),
};

refs.submitBtn.addEventListener('click', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let delay = Number(refs.delay.value);
  let step = Number(refs.step.value);

  for (let position = 1; position <= Number(refs.amount.value); position += 1) {
    delay += step;
    createPromise(position, delay);
  }

  refs.form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
    return { position, delay };
  })
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
