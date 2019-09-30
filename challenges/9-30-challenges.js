/***
 *
 * ** Using the modulus operator determine if the argument is an even or odd number
 *   if the number is odd return the word 'Odd'
 *   if the number is even return the word 'Even'
 *   @example
 *   isOdd  // 'Odd'
 *   isEven // 'Even'
 *
 *  */

function isEvenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(isEvenOrOdd(2));
console.log(isEvenOrOdd(3));



/****
 *  Create a function that returns a function.
 *  The returned function when invoked should say "Second Function"
 *  @example
 *  functionMaker()() // "Second Function"
 *
 */
function functionMaker() {
    return function() {
      return 'Second Function';
    };
}
let closure = functionMaker();
console.log(closure());
console.log(functionMaker()());


/***
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 *  @example
 *  confirmEnding("Jamal", "l") // true
 *  confirmEnding("Matina", "a") // true
 *  confirmEnding("stacy", "l") // false
 *  confirmEnding("andrea", "a") // true
 *  confirmEnding("Clifford", "ord"); // true
 *
 */

function confirmEnding(str, target) {
  let length = target.length;
  console.log(length);
  // substr: If "start" is less than 0, it will start extraction from index position 0:
  return str.substr(-length) === target;

  // Easier way to get the answer
  // return str.endsWith(target);
}

console.log(confirmEnding("Jamal", "l")); // true
console.log(confirmEnding("Matina", "a")); // true
console.log(confirmEnding("stacy", "l")); // false
console.log(confirmEnding("andrea", "a")); // true
console.log(confirmEnding("Clifford", "ord")); // true


module.exports = {
  isEvenOrOdd,
  functionMaker,
  confirmEnding
};
