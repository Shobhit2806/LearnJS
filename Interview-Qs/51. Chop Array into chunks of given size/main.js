const chop = (arr, size = arr.length) => {
  const temp = [...arr] 
  // OR
  // const temp = arr.slice();
 
  let output = [];
  let i = 0;
  while (i < arr.length) {
    output.push(temp.slice(i, i + size));
    i = i + size;
  }
  

  return output;
};

console.log(chop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));


// 1. Slice method
// 2. Array of Array in JS is just simple array and we can push array in it.
// 3. Learn about Objects , Deep Copy and Shallow Copy.