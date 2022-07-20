// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // check if alphabet exist or length no 26
    if(!alphabet || alphabet.length !== 26) return false;
    let message = [];
    const regularAlphaString = "abcdefghijklmnopqrstuvwxyz";
    const regularAlphaArray = [...regularAlphaString];
    const lowerCasedInput = input.toLowerCase();
    // spreading input into an array for iteration
    const inputArray = [...lowerCasedInput];
    // spreading parameter alphabet into an array
    const codedAlpha = [...alphabet];
    // check for unique letter and get the length
    const checkUnique = codedAlpha.filter((letter, iterator, array) => array.indexOf(letter) == iterator).length;
    if (checkUnique !== 26) return false;

    if (encode){
      inputArray.forEach((letter) => {
        // if letter is a space; push space to result
        if (letter === " ") message.push(" ");
        // get the idx of the letter
        const characterIndex = regularAlphaString.indexOf(letter);
        // matching the idx in the coded array
        const codedChar = codedAlpha[characterIndex];
        message.push(codedChar);
      })
      return message.join("");
    } else {
      inputArray.forEach((letter) => {
        if (letter === " ") message.push(" ");
        // get the idx of the letter
        const codedIndex = codedAlpha.indexOf(letter);
        // matching the idx in the coded array
        const AlphaChar = regularAlphaArray[codedIndex];
        message.push(AlphaChar);
      })
      return message.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
