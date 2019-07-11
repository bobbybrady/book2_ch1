const head = document.querySelector(".article__header");
head.textContent = "Welcome to the {insert your name here} blog";

const important = document.querySelectorAll(".article__header");
for (let i = 0; i < important.length; i++) {
    const currentItem = important[i];
    currentItem.classList.add("important");
}
    
console.log(important);

const dashed = document.querySelector(".dashed");
dashed.classList.remove('dashed');

const gold = document.querySelector('.article__footer');
gold.classList.add('goldenrod');
