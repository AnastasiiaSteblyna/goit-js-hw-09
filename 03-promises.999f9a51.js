const e={delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),submitBtn:document.querySelector('button[type="submit"]'),form:document.querySelector(".form")};function t(e,t){return new Promise(((o,n)=>{const u=Math.random()>.3;return setTimeout((()=>{u?o({position:e,delay:t}):n({position:e,delay:t})}),t),{position:e,delay:t}})).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}e.submitBtn.addEventListener("click",(function(o){o.preventDefault();const n={Delay:Number(e.delay.value),Step:Number(e.step.value),Amount:Number(e.amount.value)};console.log(n);let u=Number(e.delay.value),l=Number(e.step.value);for(let o=1;o<=Number(e.amount.value);o+=1)u+=l,t(o,u);e.form.reset()}));
//# sourceMappingURL=03-promises.999f9a51.js.map