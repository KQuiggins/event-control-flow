const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');
const body = document.querySelector('body');

button.addEventListener('click', (e) => {
    alert('Button was clicked')
    e.stopPropagation();

})

