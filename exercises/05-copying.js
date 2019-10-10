/**
 * Change the value of email property within an object.
 * You should use the spread operator to deep copy the original object.
 * @param {Object} user
 * e.g. { id: 1234, username: "lolcatz1", email: "lolcatz1@gmail.com" }
 * @param {string} newEmail e.g. "purr@gmail.com"
 *
 * @returns a deep copy of the *user*, with the email property changed.
 *
 * @example
 * const newUser = changeEmail(
 *    { id: 1234, username: "lolcatz1", email: "lolcatz1@gmail.com" },
 *    "purrfect@gmail.com"
 * );
 * console.log(newUser); // { id: 1234, username: "lolcatz1", email: "purr@gmail.com" }
 *
 * user.email = "icanhascheeseburger@yahoo.com"; // This should not change newUser
 */


const changeEmail = (user, newEmail) => {
  // Spread Operator 'shallow copies' the object and adds new email without changing the original object
  return {...user, email: newEmail};
};

const user = {
  id: 1234,
  username: "lolcatz1",
  email: "lolcatz1@gmail.com"
};

const newUser = changeEmail(user, "purrfect@gmail.com");

console.log(newUser); // Email did change
console.log(user.email); // Did not change



/**
 * Add a new item to a shopping cart. You should deep copy any array and objects.
 * @param {Array} shoppingCart an array of objects
 * e.g. [{ name: "TV - 20ft", price: 1000000 }]
 * @param {*} newItem an object to add to the shopping cart array
 * e.g. { name: "Popcorn", price: 5 }
 *
 * @returns the *shoppingCart* array, with the object *newItem* added to it.
 * Both *shoppingCart* and *newItem* should be deep copied.
 *
 * @example
 * const shoppingCart = [{ name: "TV - 20ft", price: 1000000 }];
 * const newItem = { name: "Popcorn", price: 5 };
 * const newShoppingCart = addToCart(shoppingCart, newItem);
 * console.log(newShoppingCart); // [{ name: "TV - 20ft", price: 1000000 }, { name: "Popcorn", price: 5 }]
 *
 * shoppingCart[0].price = 9000000; // This should not change newShoppingCart
 * newItem.price = 10; // This should not change newItem
 */

var _ = require('lodash');
const addToCart = (shoppingCart, newItem) => {
  // This sets up the deep copy for shopping cart
  // let deepCopyShoppingCart = JSON.parse(JSON.stringify(shoppingCart));
  // console.log(deepCopyShoppingCart);

  // Using Lodashes cloneDeep method instead of the hacky JSON.parse way...
  let deepCopyShoppingCart = _.cloneDeep(shoppingCart);

  // This sets up a shallow copy for newItem
  let shallowNewItem = {...newItem};
  // console.log(shallowNewItem);
  
  // Combines the two into a new constant variable
  const deepCopyShoppingCartNewItem = [...deepCopyShoppingCart, shallowNewItem];
  // console.log(deepCopyShoppingCart);

  // Changes price in shopping cart, but does not change in deepCopyShoppingCart
  shoppingCart[0].price = 9000000;
  // This does not change the newItem price
  newItem.price = 10;

  return deepCopyShoppingCartNewItem;
};

const shoppingCart = [{ name: "TV - 20ft", price: 1000000 }];
const newItem = { name: "Popcorn", price: 5 };
const newShoppingCart = addToCart(shoppingCart, newItem);

console.log(shoppingCart);
console.log(newShoppingCart);


module.exports = {
  changeEmail,
  addToCart
};
