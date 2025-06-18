// console.log(2>1);
// console.log(2 >= 1);
// console.log(2 < 1);

console.log("2" > 1);
console.log("02" > 1);



// The comparison operator <,>,<=.>= and the equality operator == works differently in javascript. 
// The comparison operator converts the null into number that is 0 
//The below code should be avoided
console.log(null>0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined>0);
console.log(undefined == 0);
console.log(undefined >= 0);

// ===(strict check) Not only checks the value but also its data type
console.log("2" ===2);
console.log("2" == 2);

