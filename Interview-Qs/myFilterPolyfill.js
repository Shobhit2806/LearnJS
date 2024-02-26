// Filter function creates an array and store only those values which evaluates to true.

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      if(cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
  }
  
  
  const nums = [1,2,3,4,5,6];
  
  const OddArr = nums.myFilter((num,i,arr)=>{
    return num%2!=0;
  })
  
  console.log(OddArr)