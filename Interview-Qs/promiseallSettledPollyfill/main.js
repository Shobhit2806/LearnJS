const allSettled = function (promisesArray) {
  // to store results
  const results = [];
  let promisesCompleted = 0;
  return new Promise((resolve, reject) => {
    if(promisesArray.length==0){
      resolve([]);
    }
    promisesArray.forEach((promise, index) => {

      if (!(promise instanceof Promise)) {
        promise = Promise.resolve(promise);
      }

      // if promise passes
      promise
        .then((val) => {
          results[index] = { status: 'fulfilled' , value: val }
          promisesCompleted++;

          if (promisesCompleted == promisesArray.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          results[index] = { status: 'rejected' , reason: error }
          promisesCompleted++;
          if (promisesCompleted == promisesArray.length) {
             resolve(results);
          }
          
        });
    });
  });
};

// const a = new Promise (( resolve ) => setTimeout( () => { resolve( 3 ) }, 200 ));
// const b = new Promise (( resolve,reject ) => reject( 9 ));
// const c = new Promise (( resolve ) => resolve( 5 ));
// allSettled([a, b, c]).then(( val )=> { console .log(val)});

allSettled([Promise.resolve(4)]).then(( val )=> { console .log(val)});