const refs = {
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  submitBtn: document.querySelector('button[type="submit"]'),
  form: document.querySelector('.form'),
};

let delay = Number(refs.delay.value);
let step = Number(refs.step.value);
let amount = Number(refs.amount.value);

refs.submitBtn.addEventListener('click', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {
    Delay: delay,
    Step: step,
    Amount: amount,
  };

  console.log(formData);

  for (let position = 0; position <= amount; position += 1) {
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
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
