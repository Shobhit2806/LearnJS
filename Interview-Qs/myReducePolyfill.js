// Array.prototype.myReducer = function (cb,initialValue) {
//     var accumulator = initialValue;
//     for (let i = 0; i < this.length; i++) {
//       accumulator = accumulator?cb(accumulator,this[i],i,this):this[i];
//     }
  
//     return accumulator
    
//   }
  
  
//   const nums = [1,2,3,4,5,6];
  
//   const res = nums.myReducer((acc,curr)=>{
//       return acc+curr;
//   },0)
  
//   console.log(res)
  
const users = [
	{ firstName: "Alok", lastName: "Raj", age: 23 },
	{ firstName: "Ashish", lastName: "Kumar", age: 29 },
	{ firstName: "Ankit", lastName: "Roy", age: 29 },
	{ firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];
const report = users.reduce((acc, curr) => {
	if(acc[curr.age]) {
		acc[curr.age] = ++acc[curr.age] ;
	} else {
		acc[curr.age] = 1;
	}
    return acc;
}, {})
console.log(report)