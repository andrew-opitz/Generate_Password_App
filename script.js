// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = ('abcdefghijklmnopqrstuvwxyz')
var upper = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
var nums = ('123456789')
var specs = ('`~!@#$%^&-_<>?')
var combined = ('')
var password = ('')


function generatePassword() {
  var Lowercase = confirm('Would you like to inlcude lowercase characters?')
  var Uppercase = confirm('Would you like to include uppercase characters?')
  var Numbers = confirm('Would you like to include numbers?')
  var Specials = confirm('Would you like to include special characters?')
  
  var passLength = prompt('How many characters would you like your password to be?')
  
  if (Lowercase) {
    combined += lower
  }
  if (Uppercase) {
    combined += upper
  }
  if (Numbers) {
    combined += nums
  }
  if (Specials) {
    combined += specs
  }
  if (passLength < 8) {
    alert('Your password must be at least 8 characters.')
    passLength = prompt('How many characters would you like your password to be?')
  }
  if (passLength > 128) {
    alert('Your password must be less than 128 characters.')
    passLength = prompt('How many characters would you like your password to be?')
  }
  }

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  
  passwordText.value = password;
  
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
