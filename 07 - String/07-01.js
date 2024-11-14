/*
 Write a JavaScript function to check whether an `input` is a string or not. 
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false
*/


const stringOrNo = (input) => {
    if(typeof input === "string") {
        return "Taip, tai yra string";
    } else {
        return "Tai nera string"
    }
}
console.log(stringOrNo("Tekstas"));
console.log(stringOrNo([1,2,3]));

