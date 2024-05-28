
// script.js

// Original object with initial data
const originalObject = {
  firstName: '',
  lastName: '',
  gmail: '',
  number: ''
};

const spreadOperater = {...originalObject};

// Function to handle form submission
document.getElementById('submitButton').addEventListener('click', function (event) {
  event.preventDefault();

  originalObject.firstName =document.getElementById("firstName").value;
  originalObject.lastName = document.getElementById("lastName").value;
  originalObject.gmail = document.getElementById("email").value;
  originalObject.number = document.getElementById("number").value;
  document.getElementById("button1").addEventListener("click", function(e){
    e.preventDefault();
    spreadOperater.firstName = document.getElementById("firstName").value;
    spreadOperater.lastName = document.getElementById("lastName").value;
    spreadOperater.gmail = document.getElementById("email").value;
    spreadOperater.number = document.getElementById("number").value;
    document.getElementById("outputC").innerHTML = `Name: ${spreadOperater.firstName} ${spreadOperater.lastName}`
  document.getElementById("outputGmailC").innerHTML = `Gname: ${spreadOperater.gmail}`;
    document.getElementById("outputNumberC").innerHTML = `Number: ${spreadOperater.number}`;
  
  });
  
  // Display results
  document.getElementById('outputO').innerHTML = `Name: ${originalObject.firstName} ${originalObject.lastName}`;
  document.getElementById('outputGmailO').innerHTML = `Gmail: ${originalObject.gmail}`;
  document.getElementById('outputNumberO').innerHTML = `Number: ${originalObject.number}`;
  
  // spreadOperater.firstName  = simple
  // spreadOperater.lastName = simple

 if (spreadOperater === undefined)
 { document.getElementById('outputC').innerHTML = `Name: ${originalObject.firstName} ${originalObject.lastName}`;
  document.getElementById('outputGmailC').innerHTML = `Gmail: ${originalObject.gmail}`;
  document.getElementById('outputNumberC').innerHTML = `Number: ${originalObject.number}`;
}
});
 document.getElementById("button1").addEventListener("click", function(e){
  e.preventDefault();
  spreadOperater.firstName = document.getElementById("firstName").value;
  spreadOperater.lastName = document.getElementById("lastName").value;
  spreadOperater.gmail = document.getElementById("email").value;
  spreadOperater.number = document.getElementById("number").value;
  document.getElementById("outputC").innerHTML = `Name: ${spreadOperater.firstName} ${spreadOperater.lastName}`
document.getElementById("outputGmailC").innerHTML = `Gmail: ${spreadOperater.gmail}`;
  document.getElementById("outputNumberC").innerHTML = `Number: ${spreadOperater.number}`;

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
