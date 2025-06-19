const name = 'Arshad'
const age = 21

//console.log(name+age)

//String Interpolation:- To provide placeholders in order to display different values
console.log(`Hello my name is ${name} and my age is ${age}.`);


//Another way of String declaration
const gameName = new String('Arshadfc')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-7,4);
console.log(anotherString);

const Stringone = "    Arshad    "
console.log(Stringone);
console.log(Stringone.trim());

const url = "https://arshad.com/arshad%20hussain"
console.log(url.replace('%20',"_"));

console.log(url.includes('Arshad'));
