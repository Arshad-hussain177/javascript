//array
//Arrays contain elements of different types
//Javascript arrays are resizeable
// Javascript array-copy-operations create shallow copies(same reference point) 
// i.e. change at the one place causes a change in the original array.
const myArr = [0,1,2,3,4,5]
const myArr2 = new Array(10,12,20,54)
// console.log(myArr[2]);

// myArr.push(9);
// myArr.push(7)
// myArr.pop()

// myArr.unshift(8);
// myArr.shift();
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3))

// const newArr = myArr.join();
// console.log(myArr);
// console.lof(typeof newArr);

//slice, splice
//Slice returns a section of the original array and does not manipulate the original array 
// whereas splice the brings changes into the original array 
console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);






