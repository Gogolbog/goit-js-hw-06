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


const ingredient = ingredients.map((item) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = item;
  return liEl;
});

ulEl.append(...ingredient);
