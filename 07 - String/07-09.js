/*
Write a JavaScript function to capitalize the first letter of each word in a string. 
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
*/

const capitalizeWord = (input) => input.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log(capitalizeWord("js string exercises"));