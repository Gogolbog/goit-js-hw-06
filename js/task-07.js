const inputEl = document.getElementById("font-size-control");
console.log("inputEl: ", inputEl);
const textEl = document.getElementById("text");
console.log("textEl: ", textEl);

inputEl.addEventListener("input", () => 
textEl.style.fontSize = inputEl.value + "px");

    
