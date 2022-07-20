// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    // your solution code here
    // lower casing input
    let lowercasedMessage = input.toLowerCase();
    let message = "";
    // error handling
    if(!shift||shift < -25||shift > 25 ) return false;
    if (encode === false){
      shift *= -1;
    }

    for(let i = 0; i < lowercasedMessage.length; i++){
      const codedMessage = lowercasedMessage.charCodeAt([i]);
      // adding char code with shift
      const shifted = codedMessage + shift;
      // checks for only letters to shift
    if ((/[a-zA-Z]/).test(input[i])) { 
      if (shifted > 122) {
      message += String.fromCharCode(shifted - 26);
      } else if (shifted < 97){
      message += String.fromCharCode(shifted + 26);
      } else {
      message += String.fromCharCode(shifted);
      }
     } else {
      message += String.fromCharCode(codedMessage);
     }
    }
    return message;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
