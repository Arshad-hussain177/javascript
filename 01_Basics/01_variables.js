const accountId = 14452
let accountEmail = "arshad@javascript.com"
var accountPassword = "87965"
accountCity = "Vadodara"
let accountState;
// accountId = 2 // not allowed
//const keyword makes sure the value of the variable cannot be changed.
console.log(accountId);

accountEmail = "crazy@google.com"
accountPassword = "78557"
accountCity = "Hyderabad"

/*
Prefer Not to use var 
because of the issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
