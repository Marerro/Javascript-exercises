/*
Write a JavaScript function to remove specified number of characters from a string. 
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
*/

const removeString = (input) => input.slice(0,4);
console.log(removeString("Robin Singh"));