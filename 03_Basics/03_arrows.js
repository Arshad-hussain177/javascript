const user = {
    username:"Arshad",
    course_price : 100,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "MAX"
// user.welcomeMessage()

// console.log(this); // In a node environment this actually refers to an empty object
// whereas in a browser it is a window object


// function func(){
//     let username= "Arshad"
//     console.log(this.username); // here as this is used in a function so we could use it
// }
// func()

// const func = function(){
//     let username = "Arshad"
//     console.log(this.username);   
// }

const func = () => {
    let username = "Arshad"
    console.log(this);
    
}
func()

// const addTwo = (num1,num2) => {  //Basic arrow function
//     return num1+num2
// }

const addTwo = (num1,num2) =>  num1+num2  //Implicit return
console.log(addTwo(5,4));
