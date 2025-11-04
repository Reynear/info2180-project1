/* Add your JavaScript to this file */

window.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('#email');
    const messageDiv = document.querySelector('.newsletter .message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const emailValue = emailInput.value.trim();
        
        if (emailValue === '') {
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            messageDiv.textContent = `Thank you! Your email address ${emailValue} has been added to our mailing list!`;
        }
    });
});