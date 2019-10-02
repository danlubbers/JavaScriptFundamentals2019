/***
 *
 * * Javascript Arrays
 *   The first item in the array should be a "string"
 *   The second item in the array should be a function
 *   The third item in the array should be an array
 *   @example
 *   typeof [0] // "string"
 *   typeof [1] // "function"
 *   Array.isArray([2])  // "array"
 *
 *
 *  */

function createAnArray() {
  return ['string', () => 'I am a Function', [1, 2, 3]];
}


console.log(createAnArray());

/***
 *   The function will accept two arguments: the string and the target.
 *   Uppercase the target word in the string.
 *   If the target exceeds the length of the string, return undefined.
 *
 *
 *   hint
 *   use the Split method
 *
 *   @example
 *   uppercaseTargetWord("first second third", 2) // returns "first SECOND third"
 *   uppercaseTargetWord("Javascript is cool", 3) // returns "Javascript is COOL"
 *   uppercaseTargetWord("Javascript is not cool", 5) // returns undefined
 *
 *
 *
 *  */

function uppercaseTargetWord(str, target) {
  let splitWords = str.split(' ');
  if (target > splitWords.length) return undefined;

  let targetWordUpperCase = splitWords[target - 1].toUpperCase();  
  let targetWord = splitWords[target - 1];

  return str.replace(targetWord, targetWordUpperCase);
}

console.log(uppercaseTargetWord("first second third", 2));
console.log(uppercaseTargetWord("Javascript is cool", 3));
console.log(uppercaseTargetWord("Javascript is not cool", 5));


module.exports = {
  createAnArray,
  uppercaseTargetWord
};
