const e={delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),submitBtn:document.querySelector('button[type="submit"]'),form:document.querySelector(".form")};let t=Number(e.delay.value),o=Number(e.step.value),n=Number(e.amount.value);function u(e,t){return new Promise(((o,n)=>{const u=Math.random()>.3;return setTimeout((()=>{u?o({position:e,delay:t}):n({position:e,delay:t})}),t),{position:e,delay:t}})).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}e.submitBtn.addEventListener("click",(function(l){l.preventDefault();const m={Delay:t,Step:o,Amount:n};console.log(m);for(let e=0;e<=n;e+=1)u(e,t);e.form.reset()}));
//# sourceMappingURL=03-promises.e51738b1.js.map
