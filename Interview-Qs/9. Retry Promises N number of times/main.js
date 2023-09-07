//delay func
const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

const retryWithDelay = (
  fn,
  retries = 3,
  delay = 50,
  finalErr = "Retry failed"
) => {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    // fn() is a async fn so it will return a promise
    const callFunc = () => {
      fn()
        .then(resolve)
        .catch((error) => {
          if (attempts < retries) {
            setTimeout(() => {
              callFunc();
            }, delay);

            // wait(delay)
            //   .then(() => callFunc())
            //   .catch((err) => reject(err));

            attempts++;
          } else {
            reject(finalErr);
          }
        });
    };
    callFunc();
  });
};

// Test function
const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error("Not yet");
    }
  };
};

// Test the code
const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log("success");
  await retryWithDelay(getTestFunc(), 3);
  console.log("will fail before getting here");
};

// Print the result
test().catch(console.error);
