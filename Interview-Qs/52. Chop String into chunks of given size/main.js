const chop = (arr, size = arr.length) => {
  const temp = [...arr] 
  console.log(temp);
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

console.log(chop("javascript", 3));

