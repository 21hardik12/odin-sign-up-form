const firstname = document.getElementById('first-name');
// console.log(firstname);
const lastname = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('tele');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const form = document.getElementById('form');
const signupButton = document.getElementById('sign-up-button');
// signupButton.addEventListener('click', e => form.);

form.addEventListener('submit', e => {
    
    e.preventDefault();
    validateForm();
});

function setError(element, message) {
    const inputControl = element.parentElement;
    // console.log(inputControl);
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.textContent = message;
    errorDisplay.classList.add('error');
}

function setSuccess(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.textContent = '';
    errorDisplay.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isPhoneValid(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone).toLowerCase());
}

function validateForm() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (firstnameValue === '') {
        setError(firstname, 'First Name is required');
    } else {
        setSuccess(firstname);
    }

    if (lastnameValue === '') {
        setError(lastname, 'Last Name is required');
    } else {
        setSuccess(lastname);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Enter a valid email');
    } else {
        setSuccess(email);
    }

    if (phoneValue === '') {
        setError(phone, 'Phone is required');
    } else if (!isPhoneValid(phoneValue)) {
        setError(phone, 'enter a valid phone number');
    } else {
        setSuccess(phone);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password is too short');
    } else {
        setSuccess(password);
    }

    if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, 'Passwords do no match');
    } else {
        setSuccess(confirmPassword);
    }

    const errorElement = document.querySelector('.error');
    if (!errorElement) form.submit();
}