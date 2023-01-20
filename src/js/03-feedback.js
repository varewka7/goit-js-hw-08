import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

const formData = {};

function onFormSubmit(evt) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function onTextareaInput(evt) {
    const messageOn = evt.target.value;

    localStorage.setItem('feedback-form-state', messageOn);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem('feedback-form-state');

    if (savedMessage) {
        refs.textarea.value = savedMessage;
    };
}

refs.form.addEventListener('input', e => {

    formData[e.target.name] = e.target.value;
    
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (data) {
        refs.input = data.email;
        refs.textarea = data.message;
}
})





