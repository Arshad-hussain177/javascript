// Objects can be declared in 2 ways 
// i.e. as a literal or as a constructor
// singleton - unique of its type
// Object.create

//Object literals

const mySym = Symbol("key1")
const JsUser = {
    name:"Arshad",
    "Full name":"Arshad Hussain",
    age:21,
    [mySym]: "mykey1",
    location:"Vadodara",
    email:"arshad@common.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full name"]);
console.log(JsUser[mySym]);


JsUser.email = "arshad@uncommon.com"
// Object.freeze(JsUser)  //prevents from any changes in the object
JsUser.email = "arshadhussain@s.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["Full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

