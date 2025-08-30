const arr1 = ["a", "b", "c", "d"];
const arr2 = ["e", "f", "g", "e"];

// arr1.push(arr2); // will give array inside array

// console.log("merging two arrays into one :: ",arr1);

// console.log(arr1[4]);
// console.log(arr1[4][1]);

// the right way to add to arrays is to do concat()

// let concatArr = arr1.concat(arr2);
// console.log('two arrays are merged properaly :: ',concatArr);


// There is even much better way to add two or more arrays using spread operator :-

// let spreadArr = [...arr1, ...arr2]; // ... :: this dots are knows as spread Operator
// console.log(spreadArr);


// let another_array = [1,2,[3,4],5,6,[7,8,[0,10],11],12];

// console.log(another_array);

// console.log("flat out array :: ",another_array.flat(Infinity)); // this here is too flat out all the arrays inside another arrays 
// into one single arrays. all though its written infinity but we should wirte excate number of depth generally..


// console.log(Array.isArray('chandan')) // answer in boolean
// console.log(Array.from('chandan')); // convert string into array
// console.log(Array.from({name:'chandan'})); // can't convert object into array directly. instead give empty array.


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2, score3)); // convert into one single array

// array is completed for now....





