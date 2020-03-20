var complexity = prompt("How many characters would you like your password to be?")
//Confirm Letters
var confSpecChar = confirm("Would you like your password to contain special characters?");
// Confirm Upper Letters
var CUL = confirm("Would you like your password to contain upper case letters?");
// Confirm Lower Letters
var CLL = confirm("Would you like your password to contain lower case letters?");
// Confirm Numbers
var CN = confirm("Would you like your password to contain numbers?");

var lengthComp = parseInt(complexity); //turns inserted string number into intiger; uses parseInt instead of int because we are turning string value into intiger

function generatePassword() {
  // Set Indexes for random variables to be chosen from
  var Nums =  "0123456789"; //[1,2,3,4,5,6,7,8,9,0]
  var specChar = "!@#$%^&*(){}[].,<>:;'?/";
  var LowerLetters = "abcdefghijklmopqrstuvwxyz"; //["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var UpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // This is the proper way to use toUpperCase on a array after joining it. Look up .join() on MDN
  //Sets password to blank string to then add to through following conditional statements
  password = "";
  //If confirm boolean for special characters, then adds entire string of specChar to password
  if (confSpecChar) {
    password += specChar;
    }
  //If confirm boolean for upper case letters, then adds entire string of UpperLetters to password
  if (CUL) {
    password += UpperLetters;
  }
   //If confirm boolean for lower letters, then adds entire string of LowerLetters to password
  if (CLL) {
    password += LowerLetters;
  }
   //If confirm boolean for numbers, then adds entire string of numbers to password
  if (CN) {
    password += Nums;
  }
  //Needs to create variable for final password to display when button is pressed
  var finalPass = "";
  //for loop created to go through number of times desired by user; declared through input of complexity variable by user
  //IE: If user wants password to be 10 characters, then loops through 10 times.
  for (i = 0; i < lengthComp; i++) {
    //Final pass string is initially set to "" as defined on line 38, then takes random floor number through declared function and randomly 
    //chooses characters out of password variable, which stores all numb/letters/special characters as stored through cumulations of 
    //lines 23, 27, 31, 35, and randomly places such values into string of desired length of password.lengh;
    finalPass += password.charAt(Math.floor(Math.random()*password.length));
  }
  //
  return finalPass;

}




//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Saving password below
  passwordText.value = password;
  
  //add password to textbox/display area
  document.getElementById("password").value = password;

  //add password to previously generated password section
  document.getElementById("lastNums").innerHTML += "<li>" + password + "</li>"
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Copy to clip board

var cpyBtn = document.querySelector("#copy");

// create function to select current password and call function to copy 
//to clip board

function copyPassword() {
  document.querySelector("#password").select();
  document.execCommand("Copy");

//alert is given to notify user password has been copied

  alert("Password is copied to clipboard");
}

// Event listener is stated on backside to run function of copyPassword when clicked
cpyBtn.addEventListener("click", copyPassword);



