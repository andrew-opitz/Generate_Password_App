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
  while (passLength < 8 || passLength > 128) {
    alert('Your password must be between 8 and 128 characters.')
    passLength = prompt('How many characters would you like your password to be?')
  }
  
  var generatedPassword = ('')
  
  
  for (var count = 0; count < passLength; count++) {
    var random = Math.random()
    var index = Math.floor(random * combined.length)
    generatedPassword += combined[index]
  }
  return generatedPassword
  }
  

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
