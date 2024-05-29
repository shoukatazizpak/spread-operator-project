// script.js

// Original object 
const originalObject = {
  firstName: undefined,
  lastName: undefined,
  gmail: undefined,
  number: undefined,
};
// original object in spread in spread operator 
const spreadOperater = {...originalObject};

// add value in original object and spread operator is undefined  so original object value fill in spread operator
document.getElementById('submitButton').addEventListener('click', function (event) {
  event.preventDefault();
//   input value for orginal data
  originalObject.firstName =document.getElementById("firstName").value;
  originalObject.lastName = document.getElementById("lastName").value;
  originalObject.gmail = document.getElementById("email").value;
  originalObject.number = document.getElementById("number").value;
 
  
  //  print original object 
  document.getElementById('outputO').innerHTML = `Name: ${originalObject.firstName} ${originalObject.lastName}`;
  document.getElementById('outputGmailO').innerHTML = `Gmail: ${originalObject.gmail}`;
  document.getElementById('outputNumberO').innerHTML = `Number: ${originalObject.number}`;
//  print spread operator 
  document.getElementById("outputC").innerHTML = `Name: ${spreadOperater.firstName} ${spreadOperater.lastName}`
  document.getElementById("outputGmailC").innerHTML = `Gmail: ${spreadOperater.gmail}`;
    document.getElementById("outputNumberC").innerHTML = `Number: ${spreadOperater.number}`;
//  spread operaator is undefined print so print original value the palce of spread operater 
 if (spreadOperater === undefined)
 { document.getElementById('outputC').innerHTML = `Name: ${originalObject.firstName} ${originalObject.lastName}`;
  document.getElementById('outputGmailC').innerHTML = `Gmail: ${originalObject.gmail}`;
  document.getElementById('outputNumberC').innerHTML = `Number: ${originalObject.number}`;
}
});

//  button for spread operator
 document.getElementById("button1").addEventListener("click", function(e){
  e.preventDefault();
  //  input spread operator value
  spreadOperater.firstName = document.getElementById("firstName").value;
  spreadOperater.lastName = document.getElementById("lastName").value;
  spreadOperater.gmail = document.getElementById("email").value;
  spreadOperater.number = document.getElementById("number").value;
  // print spreadOperater value
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
