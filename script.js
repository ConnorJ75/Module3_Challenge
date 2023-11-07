
// Assignment code here
function generatePassword(){
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~';
  //Getting password criteria
  var haveLowercase = confirm("Would you like lowercase letters in your password?");
  var haveUppercase = confirm("Would you like uppercase letters in your password?");
  var haveNumbers = confirm("Would you like numbers in your password?");
  var haveSpecials = confirm("Would you like special characters in your password?");
  if (!(haveLowercase || haveUppercase || haveNumbers || haveSpecials)){
    return generatePassword();
  }
  //Getting password length (8-128 characters)
  var passLength = prompt("How many characters would you like your password to be? (8-128)");
  while (passLength < 8 || passLength > 128){
    passLength = prompt("How many characters would you like your password to be? (8-128)");
  }
  //Putting possible characters into a single string
  var allChars = "";
  var password = "";
  let startIndex = 0;
  if (haveLowercase){ allChars += lowercaseLetters;
    password += lowercaseLetters[getRandomNumber(lowercaseLetters.length-1)];
    startIndex++;}
  if (haveUppercase){ allChars += uppercaseLetters;
    password += uppercaseLetters[getRandomNumber(uppercaseLetters.length-1)];
    startIndex++;}
  if (haveNumbers){ allChars += numbers;
    password += numbers[getRandomNumber(numbers.length-1)];
    startIndex++;}
  if (haveSpecials){ allChars += specialChars;
    password += specialChars[getRandomNumber(specialChars.length-1)];
    startIndex++;}
  //Generating password based on preferences
  for (i = startIndex; i<passLength; i++){
    password += allChars[getRandomNumber(allChars.length)];
  }
  return password;
}

function getRandomNumber(limit){
  return Math.floor(Math.random() * limit);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


