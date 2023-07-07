var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var number = "0123456789".split("")
var special = "!@#$%^&*()_+".split("")

function generatePassword() {
  var beforeReady = []
  var afterReady = ""
  var passwordLength = prompt("How long would you like your password to be? (8-128)")
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8-128 charcters. Please restart")
    generatePassword()
  } else {
    if(confirm("Do you want uppercase in your password?")) {
      // "My name is ".concat("Justice") => "My name is Justice"
      beforeReady = beforeReady.concat(uppercase)
    }
    if(confirm("Do you want lowercase in your password?")) {
      beforeReady = beforeReady.concat(lowercase)
    }
    if(confirm("Do you want numebrs in your password?")) {
      beforeReady = beforeReady.concat(number)
    }
    if(confirm("Do you want special characters in your password?")) {
      beforeReady = beforeReady.concat(special) 
    }
    if(beforeReady.length === 0) {
      alert("you must choose atleast one type of character to create a password. Pleae retry")
      generatePassword()
    } else {
      for(var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * beforeReady.length)
        afterReady += beforeReady[randomIndex]
      }
    }
    return afterReady
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
