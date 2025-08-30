// console.log('this is array');


// Arrays can be either similar data types or mixed :-

// simple literals to create array:-
// let arr1 = [0, 2, 3, 4, 5]; // similar number data type
// let arr2 = [1, 2, 3, true, 'chandan']; // mixed datatype array
// console.log('arr1 :: ',arr1);
// console.log('arr2 :: ', arr2);
// console.log( 'arr1 typeof :: ',typeof arr1);


// another way to create array:-

// let newArr = new Array(1,2,3,4,5);
// console.log(newArr);
// console.log("newArr tyepof :: ",typeof newArr);



// Arrays Methods:-

let newArray = [0, 1, 2, 3, 4, 5];

// newArray.push(6); // add new element at the end of array
// console.log(newArray); 

// newArray.pop(); // remove the last element from array
// console.log(newArray); 

// newArray.unshift(9); // new element at the starting of array
// console.log(newArray);

// newArray.shift(); // remove element at the starting of array
// console.log(newArray);

// console.log(newArray.includes(5)); // answer in boolean...
// console.log(newArray.includes(9));

// console.log(newArray.indexOf(5)); // give the element index from array
// console.log(newArray.indexOf(6)); // gives -1 for non-existing value in array

// let Arr = newArray.join();
// console.log(newArray); // typeof is object
// console.log(Arr); // typeof is String



// Two very important methods in array (Slice and Splice):-


// let sliceArr = newArray.slice(0,3); // gives new array after slicing the array with given 
// number 0 index to 3 index. then third index is not included. and the remaning array is removed.
// console.log(sliceArr);
// slice don't effect the original array

let spliceArr = newArray.splice(0,3); // add the last index also like 3rd index in this case.
// Unlike slice there is more to it.
console.log(spliceArr);
console.log(newArray);

// splice changes the original array structure 






















