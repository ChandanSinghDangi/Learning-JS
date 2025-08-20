
const accountId = 12345;
let username = 'chandan';
var userCity = 'haldwani'
userGmail = 'user@gmail.com' // not a good at all to initlize the variable


// accountId = 1; // not allowed with const
// username = 'hello'; // let value can be changed...
// userCity = 'Bhimtal';
userGmail = 'userNew@gmail.com';


// console.log(accountId);
// console.log(username);


// this is shotcut to print all the variables in one console...
// console.table([username, userCity, userGmail]);


/* 

Prefer not to use var. because of issue in block scope and functional scope

*/

if(true) {
    userCity = 'New York'
    username = 'chandan@gmail.com'
    var newName = 'chandan';
    let age = 10;
    // console.log(userCity);
    // console.log(username);
    
    
}

// newName = 'kanchan';
// console.log(newName);

// age = 12;
console.log(age);


