let counters = document.getElementById('counters');
let createButton = document.getElementById('create');

createButton.addEventListener('click', () => {
    let input = prompt("Make a category!");
    createCounter(input);
});

function createCounter(categoryInput) {
    let category = document.createElement('h4');
    category.innerHTML = categoryInput;
    counters.appendChild(category);
};