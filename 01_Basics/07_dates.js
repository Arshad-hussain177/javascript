let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

//let myCreatedDate = new Date(2025,11,25);
let myCreatedDate = new Date("2025-05-27");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp  = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));



