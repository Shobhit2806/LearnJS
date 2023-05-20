const myPromiseAny = function (promisesArray) {
  let promisesRejected = 0;
  const promisesError = [];
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise, index) => {
      // if promise passes
      promise
        .then((val) => {
          resolve(val);
        })
        .catch((error) => {
          promisesError[promisesRejected] = error;
          promisesRejected++;
          if (promisesRejected == promisesArray.length) {
            reject(promisesError);
          }
        });
    });
  });
};


const test1 = new Promise ( function ( resolve, reject ) {
setTimeout(reject, 500 , 'one' );
});
const test2 = new Promise ( function ( resolve, reject ) {
setTimeout(reject, 600 , 'two' );
});
const test3 = new Promise ( function ( resolve, reject ) {
setTimeout(reject, 200 , 'three' );
});
myPromiseAny([test1, test2, test3]).then( function ( value ) {
// first and third fails, 2nd resolves
console .log(value);
}).catch( function ( err ){
console .log(err);
});