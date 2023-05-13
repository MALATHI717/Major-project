// Get the registration form element
const form = document.getElementById('registration-form');

// Add an event listener for the form submit
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the form input values
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if the name is valid
    if (fullName.length < 5) {
        showError('full-name', 'Name must be at least 5 characters.');
        return;
    }

    // Check if the email is valid
    if (!email.includes('@')) {
        showError('email', 'Email must contain the \'@\' character.');
        return;
    }

    // Check if the phone number is valid
    if (phone === '123456789' || !/^\d{10}$/.test(phone)) {
        showError('phone', 'Phone number must be a 10-digit number and should not be 123456789.');
        return;
    }

    // Check if the password is valid
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        showError('password', 'Password cannot be \'password\' or \'full name\' or less than 8 characters.');
        return;
    }

    // Check if the confirm password matches the password
    if (confirmPassword !== password) {
        showError('confirm-password', 'Passwords must match.');
        return;
    }

    // If all fields are valid, submit the form
    alert('Form submitted successfully!');
});

// Add an event listener for the form inputs
form.addEventListener('input', function(event) {
    // Get the input element
    const input = event.target;
    // Remove the error message if the input is valid
    if (input.checkValidity()) {
        hideError(input.id);
    }
});

// Function to show an error message for a given input field
function showError(inputId, errorMessage) {
    const input = document.getElementById(inputId);
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');
    input.classList.add('is-invalid');
    invalidFeedback.innerHTML = errorMessage;
    invalidFeedback.style.display = 'block';
}

// Function to hide an error message for a given input field
function hideError(inputId) {
    const input = document.getElementById(inputId);
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');
    input.classList.remove('is-invalid');
    invalidFeedback.style.display = 'none';
}