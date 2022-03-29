//IIFE for validating elements
(function () {
    // elements that I want to have real time validtion with
    let emailInput = document.querySelector('#contact-email');
    let messageInput = document.querySelector('#contact-message');
    let form = document.querySelector('#contact-form');


    // returns true when input email is valid and false when otherwise
    function validateEmail() {
        let value = emailInput.value;
        if (!value) {
            showErrorMessage(emailInput, 'Email is a required field');
            return false;
        }

        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address (Missing: @)');
            return false;
        }

        if (value.indexOf('@') + 1 === value.length) {
            showErrorMessage(emailInput, 'You must enter a valid email address (Missing: part following @)');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    // checks if message has been inputted
    function validateMessage() {
        let value = messageInput.value;

        if (!value) {
            showErrorMessage(messageInput, 'Message is a required field');
            return false;
        }

        showErrorMessage(messageInput, null);
        return true;
    }

    // appends error message below input
    function showErrorMessage(input, message) {
        let container = input.parentElement;

        // remove an exisiting error
        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        // add error message if the message isn't empty
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    // event listeners for email and message inputs
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);
})();








