// ****************************************************************//

// This polyfill maps each promise in the input array to a new promise that ALWAYS RESOLVES with an
// object containing status, value, or reason. The resulting array of promises is then handled using 
//the regular Promise.all method.
const allSettled = function (promisesArray) {
  
  const mappedPromises = promisesArray.map((promise) => {
    return promise
      .then((val) => {
        return {
          status: "fulfilled",
          val,
        };
      })
      .catch((err) => {
        return {
          status: "rejected",
          err,
        };
      });
  });

  return Promise.all(mappedPromises);
};

const a = new Promise((resolve) =>
  setTimeout(() => {
    resolve(30);
  }, 2000)
);
const b = new Promise((resolve, reject) => reject(9));
const c = new Promise((resolve) => resolve(5));
allSettled([a, b, c]).then((val) => {
  console.log(val);
});

// allSettled([Promise.resolve(4)]).then(( val )=> { console .log(val)});
