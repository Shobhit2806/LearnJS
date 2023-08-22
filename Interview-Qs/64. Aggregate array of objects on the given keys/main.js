// const aggregate = (endorsements, on, who) => {
//   const output = [];
//   for (const endorsement of endorsements) {
//     const onValue = endorsement[on];
//     const whoValue = endorsement[who];
//     const onKey = on;
//     const whoKey = who;

//     let flag = 1;
//     for (const obj of output) {

//       if (obj[onKey] === onValue) {
//         obj[whoKey].push(whoValue);
//         flag = 0;
//       }
//     }
//     if (flag) {
//       let currObj = {};
//       currObj[onKey] = onValue;
//       currObj[whoKey] = [whoValue];
//       output.push(currObj);
//     }
//   }
//   return output;
// };


// The reason I initially suggested using the reduce() function is that it
//provides a functional approach to solving the problem

// Functional programming concepts like reduce() can lead to more concise
//and potentially more maintainable code. Additionally, the reduce() function
//provides a clear separation between
//the reduction logic and the resulting data structure.

// ANOTHER WAY

const aggregate = (arr, on, who) => {
  // using reduce() method to aggregate
  const agg = arr.reduce((a, b) => {
    // get the value of both the keys
    const onValue = b[on];
    const whoValue = b[who];
    // if there is already a key present
    // merge its value
    if (a[onValue]) {
      a[onValue] = {
        [on]: onValue,
        [who]: [...a[onValue][who], whoValue],
      };
    }
    // create a new entry on the key
    else {
      a[onValue] = {
        [on]: onValue,
        [who]: [whoValue],
      };
    }
    // return the aggregation
    return a;
  }, {});
  // return only values after aggregation
  return Object.values(agg);
};



const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];
console.log(aggregate(endorsements, "user", "skill"));