function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise.then(resolve).catch(reject);
    }
  });
}

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "Promise 1"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "Promise 2"));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 300, "Rejected"));

promiseRace([promise1, promise2, promise3])
  .then(result => console.log("Resolved:", result))
  .catch(error => console.error("Rejected:", error));
