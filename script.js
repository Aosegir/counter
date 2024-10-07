let counters = document.getElementById('counters');
let createButton = document.getElementById('create');

createButton.addEventListener('click', () => {
    let input = prompt("Make a category!");
    createCounter(input);
});

function createCounter(categoryInput) {
    let container = document.createElement('div');
    container.classList.add('category');
    
    let category = document.createElement('h4');
    category.innerHTML = categoryInput;
    container.appendChild(category);

    let count = document.createElement('p');
    count.innerHTML = '0';
    count.addEventListener('click', () => {
        let currentCount = Number(count.innerHTML);
        currentCount++;
        count.innerHTML = currentCount;
    });
    container.appendChild(count);

    counters.appendChild(container);
};