/* Add JavaScript for the form here */
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nameInput.value === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (emailInput.value === '') {
    alert('Please enter your email address.');
    emailInput.focus();
    return;
  }

  if (messageInput.value === '') {
    alert('Please enter your message.');
    messageInput.focus();
    return;
  }

  alert('Thank you for your message!');
  form.reset();
});
