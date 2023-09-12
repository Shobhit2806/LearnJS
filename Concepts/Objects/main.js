// What is Objects in JS

// In JavaScript, an object is a fundamental data type that represents a collection of key-value pairs, where each key is a string (or a symbol in some cases), and each value can be of any data type, including other objects.

// const user = {
//   name: "Shobhit",
//   age: 24,
//   fullName: {
//     firstName: "Shobhit",
//     lastName: "Garg",
//   },
// };

// user.name = "Garg";

// let key = "name";

// console.log(user[key]);

// let arr3 = [34, 45, 67, 109];
// console.log(Math.max(...arr3));

// console.log(arr3);

// const { name } = user;

// const { name: myName } = { name: "Lydia" };


// const { fullName: firstName } = user;
// console.log(firstName);

// console.log(myName);

// const value = {number:10};
// console.log(value);
// let x = {...value};
// x.number = 20
// console.log(x.number, value.number);

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
      street: 'North 1st street',
      city: 'San Jose',
      state: 'CA',
      country: 'USA'
  }
};


let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Jane';// disconnected

copiedPerson.address.street = 'Amphitheatre Parkway';// connected
copiedPerson.address.city = 'Mountain View';// connected
console.log(person);