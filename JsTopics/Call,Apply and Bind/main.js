let nameOfPerson = {
  firstName: "Shobhit",
  lastName: "Garg",
};
let printName = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + homeTown + " , " + state
  );
};

printName.call(nameOfPerson, "Agra", "UttarPradesh");

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

//function borrowing
printName.call(name2, "Mumbai", "Maharashtra");
printName.apply(name2, ["Mumbai", "Maharashtra"]);

//bind method
let printMyName = printName.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName);
printMyName();
