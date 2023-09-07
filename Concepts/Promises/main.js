// Imagine you want to get a toy from a toy vending machine, but sometimes it takes a little while for the toy to come out. You don't want to wait there all day, so you ask your parent for help.

//Your parent says, "I'll go and check the vending machine for you. I promise that I will either bring you the toy when it comes out, or I will tell you if something goes wrong."

//Now, you can go play with your friends or do other things while your parent keeps an eye on the vending machine. You don't have to wait there, and you know your parent will let you know what happens.

// Promises - It is an object which represensts an eventual completion or failure of an asyn operation.

// addtocart --> update the cart --> proceestoPayment --> complete transaction

const addToCart = (item, cb) => {
  setTimeout(() => {
    cb(item + " is added to Cart");
  }, 1000);
};

const proceedToPayment = (item, cb) => {
  setTimeout(() => {
    cb("Proceed to Payment of " + item);
  }, 500);
};

const completeTxn = (name, cb) => {
  setTimeout(() => {
    cb(name + " your txn is completed");
  }, 30);
};

// Call Back Hell and Inversion Of Control
const message = addToCart("1 Item", function (data) {
  console.log(data);
  proceedToPayment("1 Item", function (data) {
    console.log(data);
    completeTxn("Shobhit", function (data) {
      console.log(data);
      completeTxn("Shobhit", function (data) {
        console.log(data);
        completeTxn("Shobhit", function (data) {
          console.log(data);
          completeTxn("Shobhit", function (data) {
            console.log(data);
          });
        });
      });
    });
  });
});

// PROMISES

const isPurchased = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("Purchased the item");
    else reject(new Error("Cancelled Txn"));
  }, 1000);
});

isPurchased.then((res) => console.log(res)).catch((err) => console.log(err));

console.log(isPurchased);

// Implement above eg of Order placing with Promises and Promise Chaining

const addToCartPr = (item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item + " is added to Cart");
    }, 1000);
  });
};

const proceedToPaymentPr = (item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Proceed to Payment of " + item);
    }, 500);
  });
};

const completeTxnPr = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name + " your txn is completed");
    }, 0);
  });
};

addToCartPr("1 item")
  .then((res) => {
    console.log(res);
    return proceedToPaymentPr("1 Item");
  })
  .then((res) => {
    console.log(res);
    return completeTxnPr("Shobhit");
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Using async/await

const result = async () => {
  try {
    const res1 = await addToCartPr("1 Item");
    const res2 = await proceedToPaymentPr("1 item");
    const res3 = await completeTxnPr("Shobhit");
    console.log({ res1, res2, res3 });
  } catch (error) {
    console.log("Promise failed", error);
  }
};
result();
