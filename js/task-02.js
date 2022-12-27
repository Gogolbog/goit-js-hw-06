const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.getElementById("ingredients");
console.log("ulEl: ", ulEl);


ingredients.forEach((...ingredient) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item")
  liEl.textContent = ingredient[0];
  console.log("liEl: ", liEl);

  ulEl.append(liEl);
});
