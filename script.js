// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var PasswordLength = prompt("Choose password length. (8-128 Characters)")
  if (confirm("press a button!") {
      else {
        Text = "You selected an invalid option. Please choose between 8-128 characters."
      }
  })
  var PasswordLength = prompt(
    "Choose password characters. (lowercase, uppercase, numeric, and/or special characters)"
  );
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
