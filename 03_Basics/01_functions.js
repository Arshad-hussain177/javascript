// function addTwoNumbers(number1,number2){  //The inputs to be taken defined during the function definition is known as parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){  //The inputs to be taken defined during the function definition is known as parameters
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}
const result = addTwoNumbers(5,7);// The inputs passes during the function call is known as arguments

// console.log("Result: ",result);

function loginUserMessage(username="Arshad"){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Bhavesh"))

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,300,400,700));

const user = {
    username:"Arshad",
    age:21
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

handleObject(user);

const myNewArray = [211,541,687,364]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
