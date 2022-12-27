const inputEl = document.getElementById("name-input");
console.log("inputEl: ", inputEl);

const spanEl = document.getElementById("name-output");
console.log("spanEl: ", spanEl);

inputEl.addEventListener("input", (event) => {
    event.currentTarget.value === ""
      ? (spanEl.textContent = "Anonymous")
      : (spanEl.textContent = event.currentTarget.value);;
});