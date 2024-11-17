const items = [
  { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
  { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
  { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
  { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
  { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
  { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
  { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
  { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
];

const cart = [
  { name: "Vintage Leather Wallet", price: 45.0 },
  { name: "Stainless Steel Water Bottle", price: 25.0 },
  { name: "Noise-Cancelling Headphones", price: 120.0 },
  { name: "Organic Cotton T-Shirt", price: 30.0 },
  { name: "Wireless Charging Pad", price: 18.0 }
];

// ------------------ Complete the functions written below ------------------------------ //

function logItemNames() {
  //TODO: use the .forEach() method to log out the name of each item
  items.forEach((element) => console.log(element.name));
}

logItemNames();

/**
 * @param {number} id
 * @returns {{id: number, name: string, price: number, category: string, inventory: number}} item
 */
function findItemById(id) {
  // TODO: Use the .find() method to return the item who's id matches the passed in id
  const returnId = items.find((item) => item.id === id); 
  console.log(returnId);
}

findItemById((3));

/**
 * @returns {items[]} Returns a new array with capitalized names
 */
function capitalizeNames() {
  // TODO:  Use the .map() and possibly .slice() methods and return a new items array with the item names capitalized
  // DO NOT MUTATE THE ORIGINAL ARRAY IN YOU LOGIC
  const namesCapitalize = items.map((item) => {
  const name = item.name;
  return name.toUpperCase();
})
  console.log(namesCapitalize);
}

capitalizeNames();

/**
 * @returns {number} the sum of all inventory items
 */

function calculateTotalInventory() {
  // TODO Use the .reduce() method to return the total number of items in inventory

  const inventoryPrice = items.reduce((acc, item) => {
    return acc + item.inventory;
  }, 0);
  console.log(inventoryPrice);
  return inventoryPrice;
}
calculateTotalInventory();

/**
 * @returns {number} the total price of all inventory items combined
 */
function calculateAllInventoryPrice() {
  // TODO Use the .reduce() method to return the total price of all the items in inventory

  const inventoryPrice = items.reduce((acc, item) => {
    return acc + item.price;
  }, 0); // 0 Pradinė reikšmė, tai reiškia, kad acc (accumulator) pradedamas nuo 0.
    console.log(inventoryPrice);
    return inventoryPrice;
}

calculateAllInventoryPrice();

/**
 * @param {string} name
 * @returns {number} the price of the item passed in
 */
function getItemPriceByName(param) {
  // TODO: Use your knowledge of objects and arrays to get the price of the item passed in
  const findItem = items.find(item => item.name === param)
  return findItem ? findItem.price : undefined;
}

console.log(getItemPriceByName("milk"));

/**
 * @param {categoryId} id of category to find
 * @returns {items[]} array of all items which belong to the given category
 */
function filterItemsByCategoryId(categoryId) {
  // TODO: use the .filter() method to filter out all items which don't belong the passed in category
  const filterItem = items.filter(item => item.categoryId != categoryId)
  return filterItem;
}

console.log(filterItemsByCategoryId(1))

function logCartItems() {
  // TODO: Loop through your cart and use the indexes to log the names of all items in your cart
  for (i = 0; i < cart.length; i++) {
   console.log(cart[i].name);
  } 
}

console.log(logCartItems());

/**
 * @returns { number } returns the total price of items in your cart
 */
function calculateTotalCartPrice() {
  // TODO: Loop through your cart and return the total price of all items in your cart
  const sum = 0;
  for (i = 0; i < cart.length; i++) {
    return cart[i].price + sum;
  }
}

console.log(calculateTotalCartPrice());

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

// const ids = prompt(
//   "enter numbers separated by commas for the ids of the items you want to add to your cart", "1, 3, 5");
// // Split the string of numbers into an array of strings.
// const idArr = ids.split(", ");

// idArr.forEach((id) => cart.push(id));
// console.log(`The names of all the items are: `);
// logItemNames();
// const itemId = prompt("enter the id of an item you are trying to find", "1");
// console.log(
//   `The item with id ${itemId} is  ${JSON.stringify(
//     findItemById(+itemId),
//     null,
//     2
//   )}`
// );
// console.log(
//   "We can map over an array and return a new array with the names capitalized like so: ",
//   capitalizeNames()
// );
// console.log(
//   "The total inventory of all grocery items is: ",
//   calculateTotalInventory()
// );
// console.log(
//   "The total price of all items in inventory is: ",
//   calculateAllInventoryPrice()
// );

// const itemToFind = prompt(
//   "Enter the name of an item to find the price of",
//   "apple"
// );
// console.log(`The price of ${itemToFind} is: `, getItemPriceByName(itemToFind));

// const categoryId = prompt(
//   "Enter a number between 1-4 to filter only items with that categoryId",
//   2
// );
// console.log(
//   `The items in category ${categoryId} are: `,
//   filterItemsByCategoryId(+categoryId)
// );

// console.log("Cart items: ");
// logCartItems();

// console.log(
//   `The total price of the items in your cart is: `,
//   calculateTotalCartPrice()
// );
