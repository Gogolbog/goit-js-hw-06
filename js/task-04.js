const counterWrapperEL = document.getElementById("counter")
console.log("counterWrapperEL: ", counterWrapperEL);

const value = document.getElementById("value");
console.log("value: ", value.textContent);

let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log("decrementBtn: ", decrementBtn);



const incrementBtn = document.querySelector('[data-action="increment"]');
console.log("incrementBtn: ", incrementBtn);

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
    value.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    value.textContent = counterValue;
});



