const deepFilter = (obj,filterFn) =>{
    for(let key in obj){
      const val = obj[key];
      if(typeof val === 'object'){
        deepFilter(val,filterFn);
      }else{
        if(filterFn(val)===false){
          delete obj[key];
        }
      }
      
      if(JSON.stringify(val)==='{}'){
        delete obj[key];
      } 
    }
  }
  
  const obj = {
    a: 1,
    b: {
      c: "Hello World",
      d: 2,
      e: {
       f: {
         g: -4,
        },
      },
      h: "Good Night Moon",
    },
  };
  
  const filter = (s) => typeof s === "string";
  deepFilter(obj,filter)
  console.log(obj);