// function memoize(func) {
//   let res = {};

//   return function (...args) {
//     const argsIndex = JSON.stringify(args);
//     if (!res[argsIndex]) {
//       res[argsIndex] = func(...args);
//     }

//     return res[argsIndex];
//   };
// }

// const clumsysquare = memoize((num) => {
//   for (let i = 1; i <= 100000000; i++) {}

//   return num * 2;
// });

// console.time("First call");
// console.log(clumsysquare(9467));
// console.timeEnd("First call");

// // use the same value two times
// console.time("Second call");
// console.log(clumsysquare(9467));
// console.timeEnd("Second call");

let students = [
  { name: "Piyush", marks: 80 },
  { name: "Shobhit", marks: 69 },
  { name: "Jenny", marks: 35 },
  {
    name: "Rohit",
    marks: 55,
  },
];
// Return total marks for students whose marks greater than 60 after adding 20 marks have been added who score less than 60

const result = students.map((student) => {
  if (student.marks < 60) {
     student.marks += 20;
  }
  return student; 
}).filter((student)=>student.marks>60).reduce((acc,curr)=>{
  acc+=curr.marks;
  return acc;
},0);

console.log(result);
