# spread-operator-project

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object Challenge</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Spread operator</h1>
    <p> where am i going to use sperad operator in real world project 
    
    </p>
<p> <-can you tell me ?  -></p>
  <p> sperad operator use in real world project</p>
    <!-- Input fields -->
    
    <label for="firstName">First Name:</label>
    <input type="text" id="firstName" placeholder="Enter first name">
<br>
    <label for="lastName">Last Name:</label>
    <input type="text" id="lastName" placeholder="Enter last name">
<br>
    <label for="number"> Number  :</label>
    <input class="number"  type="text" id="number" placeholder="Enter number">
<br>
    <label  for="email">Gmail:</label>
    <input class="Gmail" type="email" id="email" placeholder="Enter Gmail address">
    </form>
<br>
    <!-- Buttons -->
   <div class="hi"> <button id="submitButton">Submit</button>
    <button id="restartButton">Restart</button></div>

    <!-- Display the objects -->
    <h1>orignal object</h1>
    <p>we know object pass by refrence</p>
    <br>
    <div >
      <div id="outputO"></div>
      <div id="outputGmailO"></div>
      <div id="outputNumberO"></div>
    </div>
   
   <br>
   <h1>sperad operator  </h1>
   <p>pass by value </p>
   <br>
    <div >
      <div id="outputC"></div>
      <div id="outputGmailC"></div>
      <div id="outputNumberC"></div>
    </div>

    <script >// script.js

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
});</script>
</body>
</html>
