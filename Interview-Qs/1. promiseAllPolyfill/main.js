const myPromiseAll = function (promisesArray) {
  // to store results
  const results = [];
  let promisesCompleted = 0;
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise, index) => {
      // if promise passes
      promise
        .then((val) => {
          results[index] = val;
          promisesCompleted++;

          if (promisesCompleted == promisesArray.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
const promisesArray = [task(1000), task(5000), task(3000)];

myPromiseAll(promisesArray)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
