// Immediately Invoked Function Expressions

(function func(){
    // named IIFE
    console.log(`DB CONNNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Arshad");
// ()() The first parenthesis is for the function definition and the second one for execution
// IIFE are the function which are immediately executed inorder to prevent the effect/pollution of global scope variables
// We need to explicitly make use of ';' in order to end the function execution
