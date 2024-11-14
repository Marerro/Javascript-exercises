/*
Write a JavaScript function to parameterize a string. 
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
*/

const stringParameterize = (input) => input.split(" ").join("-");
     console.log(stringParameterize("Robin Singh From USA"));