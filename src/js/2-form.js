'use strict';

const form = document.querySelector('.feedback-form');
const labels = document.querySelectorAll('.feedback-form label');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const button = document.querySelector('button');

labels.forEach(label => {
    label.classList.add('form-label');
});
emailInput.classList.add('form-input');
messageTextarea.classList.add('form-textarea');
button.classList.add('form-button');

// =======================================

let formData = {
    email: "",
    message: ""
};

// Збереження formData в локальне сховище
function addToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Заповнення форми
function fillFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email;
        messageTextarea.value = formData.message;
    }
}

// Обробка input
form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    addToLocalStorage();
});

// Обробка submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
    } else {
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
        localStorage.removeItem('feedback-form-state');
        formData = { email: "", message: "" };
        form.reset();
    }

     
});

// Заповнення при завантаженні
window.addEventListener('load', fillFromLocalStorage);