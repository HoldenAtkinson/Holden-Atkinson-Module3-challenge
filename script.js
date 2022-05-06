// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // get values of input fields.
  const numberOfCharactersInput = document.getElementById("characterAmountNumber").value
  const lowercaseSelect = document.querySelector("#includeLowercase").checked
  const uppercaseSelect = document.getElementById("includeUppercase").checked
  const symbolSelect = document.getElementById("includeSymbols").checked
  const numberSelect = document.getElementById("includeNumbers").checked
  const uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const numberArray = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]
  const symbolArray = ["!","@","#","%","?","&","!","@","#","%","?","&","!","@","#","%","?","&","!","@","#","%","?","&"]
  let password = ""
  let optionsArray = [] 
    if (lowercaseSelect){
      optionsArray = [...optionsArray,...lowercaseArray]
    }
   
    if (uppercaseSelect){
      optionsArray = [...optionsArray, ...uppercaseArray]
    }
    
    if (symbolSelect){
      optionsArray = [...optionsArray,...symbolArray]
    }
    
    if (numberSelect){
      optionsArray = [...optionsArray,...numberArray]
    }

    if (optionsArray.length == 0){
      var passwordText = document.querySelector("#password");
      passwordText.innerHTML = "Please select at least one checkbox."
    } else {
      for (var i=0; i<numberOfCharactersInput; i++){
        let randomNumber = Math.floor(Math.random()*optionsArray.length)
      
        password+=optionsArray[randomNumber]
      }
  
    
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
