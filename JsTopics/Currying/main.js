// Method 1
//Function Currying using Bind method

let multiply = function(x,y){
  console.log(x*y);
}
let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);



// Method 2
//Function Currying using Closures

let multiplyByClosures = function(x){
  return function(y){
    console.log(x*y);
  }
}


let multiplyByFour = multiplyByClosures(4)
multiplyByFour(5);
