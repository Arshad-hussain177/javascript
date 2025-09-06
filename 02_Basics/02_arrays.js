const marvel_heros = ["spiderman","Ironman","thor"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Arshad"));
console.log(Array.from("Arshad"));
console.log(Array.from({name:"Arshad"}));//Interesting

let scr1 = 100;
let scr2 = 200;
let scr3  =300;
console.log(Array.of(scr1,scr2,scr3));
