/*
Write a JavaScript function to hide email addresses to protect from unauthorized user. 
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/

const protectUser = (input) => input.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2");
console.log(protectUser("robin_sing@example.com"));