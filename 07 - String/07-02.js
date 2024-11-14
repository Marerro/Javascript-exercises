/*
Write a JavaScript function to check whether a string is blank or not. 
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false
Click me to see the solution
*/

const blankOrnot = (string) => {
    if(string === "") {
        return "string is blank";
    } else {
        return "String is not blank"
    }
}
console.log(blankOrnot(""))
console.log(blankOrnot("Tekstukas"))