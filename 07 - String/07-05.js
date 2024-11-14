/*
 Write a JavaScript function to convert a string in abbreviated form. 
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/

const convertString = (input) => input.slice(0, 7) + "."; 
console.log(convertString("Robin Singh"));