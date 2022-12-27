// 1 вибрати лі з класом ітем
// 2 вивести кількість лі з класом ітем
const categoriesEl = document.getElementById("categories");
console.log("categoriesEl: ", categoriesEl);

const categoriesNameEl = categoriesEl.children;
console.log("Number of categories:", categoriesNameEl.length);


for (const itemEl of categoriesNameEl) {
    const category = itemEl.firstElementChild.textContent;
    console.log("category: ", category);
    const elements = itemEl.lastElementChild.children.length;
    console.log("elements: ", elements);
};