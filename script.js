// script.js

// Original object with initial data
const originalObject = {
  firstName: '',
  lastName: '',
  gmail: '',
  number: ''
};

// Flag to track if it's the first submission
let firstSubmit = true;

// Function to handle form submission
document.getElementById('submitButton').addEventListener('click', function (event) {
  event.preventDefault();

  // Extract form data
  const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      gmail: document.getElementById('email').value,
      number: document.getElementById('number').value
  };

  // Update original data only on the first submission
  if (firstSubmit) {
      originalObject.firstName = formData.firstName;
      originalObject.lastName = formData.lastName;
      originalObject.gmail = formData.gmail;
      originalObject.number = formData.number;
      firstSubmit = false;
  }

  // Display results
  document.getElementById('outputO').textContent = `Name: ${originalObject.firstName} ${originalObject.lastName}`;
  document.getElementById('outputGmailO').textContent = `Gmail: ${originalObject.gmail}`;
  document.getElementById('outputNumberO').textContent = `Number: ${originalObject.number}`;

  // Display merged data (spread operator doesn't affect originalObject)
  document.getElementById('outputC').textContent = `Name: ${formData.firstName} ${formData.lastName}`;
  document.getElementById('outputGmailC').textContent = `Gmail: ${formData.gmail}`;
  document.getElementById('outputNumberC').textContent = `Number: ${formData.number}`;
});

// Function to handle restart button
document.getElementById('restartButton').addEventListener('click', function () {
  // Reset form fields
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('number').value = '';

  // Reset display for merged data
  document.getElementById('outputC').textContent = '';
  document.getElementById('outputGmailC').textContent = '';
  document.getElementById('outputNumberC').textContent = '';
});
