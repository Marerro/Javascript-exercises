/*
Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, 
and lower case letters to upper case. 
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
*/

const string = (swapcase) => {
    const tString = swapcase.split("").map(char => {
    if(char === char.toUpperCase()) {
        return char.toLowerCase();
    } else { 
        return char.toUpperCase();
    }
  })
  .join("");

  return tString;
}

console.log(string("AaBbc"));
