const fetchWithTimeout = (url, duration) => {
  return new Promise(async (resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let timerid = null;

    timerid = setTimeout(() => {
      console.log("Aborted");
      controller.abort();
    }, duration);

    try {
      const data = await fetch(url, { signal });
      const result = await data.json();
      clearTimeout(timerid);
      resolve(result);
    } catch (err) {
      reject(err);
    }

  });
};

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 1000)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });
