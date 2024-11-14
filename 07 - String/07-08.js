/*
Write a JavaScript function to capitalize the first letter of a string. 
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
*/

const capitalizeLetter = (value) => value.charAt(0).toUpperCase() + value.slice(1);
console.log(capitalizeLetter("js string exercises"));