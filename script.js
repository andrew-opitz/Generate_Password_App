// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = ('abcdefghijklmnopqrstuvwxyz')
var upper = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
var numbers = ('123456789')
var specials = ('`~!@#$%^&-_<>?')
var combined = ('')
var password = ('')

var Lowercase = confirm('Would you like to inlcude lowercase characters?')
var Uppercase = confirm('Would you like to include uppercase characters?')
var Numbers = confirm('Would you like to include numbers?')
var Specials = confirm('Would you like to include special characters?')

function generatePassword() {
  
  
  return 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
