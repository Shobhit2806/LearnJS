const asyncSeriesExecuter = async function (promises) {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
};

const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 1000 * i);
  });
};
const promises = [
  asyncTask(3),
  asyncTask(5),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];
asyncSeriesExecuter(promises);
