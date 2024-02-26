// Array.map polyfill should have these two functionalities.

// The map() function should take an callback function as an argument.
// Current element, its index, and the context should be passed as an argument to the callback function.



Array.prototype.myMap = function(cb){
    let output = [];

    for(let i=0;i<this.length;i++){
        if(this.indexOf(this[i])>-1){
            output.push(cb(this[i],i,this));
        }
        
    }
    return output;
}

const arr=[1,2,3,4,5];
const multiplyByTwo = arr.myMap((nums,idx,arr)=>{
    console.log(idx,arr)
    return nums*2
});

console.log(multiplyByTwo)