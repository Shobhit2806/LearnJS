const mergeObjects = (...args) =>{
    let target = {};
    let merger = (obj)=>{
        for(let prop in obj){
            if(obj.hasOwnProperty(prop)){
                target[prop] = obj[prop];
            }
            
        }
    }
    for(let i=0;i<args.length;i++){
        merger(args[i]);
    }

    return target;
}


// Deep Merge
const DeepmergeObjects = (...args) =>{
    let target = {};
    let merger = (obj)=>{
        for(let prop in obj){
            if(obj.hasOwnProperty(prop)){
                if(typeof obj[prop]==='object'){
                    target[prop] = DeepmergeObjects(target[prop],obj[prop]);
                }
                else{
                    target[prop] = obj[prop];
                }
               
            }
            
        }
    }
    for(let i=0;i<args.length;i++){
        merger(args[i]);
    }

    return target;
}

let obj1 = {
    name: 'prashant',
    age: 23,
    nature: {
      "helping": true,
      "shy": false
    }
  }
  
  let obj2 = {
    qualification: 'BSC CS',
    loves: 'Javascript',
    nature: {
      "angry": false,
      "shy": true
    }
  }
  let merged = mergeObjects(obj1, obj2);;
  let deepMerged = DeepmergeObjects(obj1,obj2);
  console.log(deepMerged)
  console.log(merged);