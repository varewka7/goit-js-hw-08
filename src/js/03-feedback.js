import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
}

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(populateTextarea, 500));

saveData ()
let formData = {};

function populateTextarea() {
    formData.email = refs.input.value;
    formData.message = refs.textarea.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function saveData() {
    const dataSaved = localStorage.getItem(STORAGE_KEY);
    const dataParsed = JSON.parse(dataSaved);

    if (dataSaved) {
        refs.input.value = dataParsed.email;
        refs.textarea.value = dataParsed.message;
        return dataParsed;
}
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(saveData());
    
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}




