const cart = ["shoes", "kurtas", "shirts"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    //proceedToCard(orderId);
  })
  .then(console.log)
  .catch(function (err) {
    console.log(err.message);
  });
console.log(promise);

// Creating a promise. Producer side

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "1234"; // lets say this comes from db

    if (orderId) {
      //resolve(orderId)
      setTimeout(function () {
        resolve(orderId);
      }, 3000);
    }
  });

  return pr;
}

function validateCart(cartID) {
  return true;
}
