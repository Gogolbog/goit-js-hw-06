const inputEl = document.getElementById("validation-input");
console.log("inputEl: ", inputEl);

inputEl.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//     event.currentTarget.value.length === Number(inputEl.dataset.length)
//       ? (inputEl.style.borderColor = "green")
//       : (inputEl.style.borderColor = "red");
// };


function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
};

