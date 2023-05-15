// Handling Async via callback
// const user = ["shoes", "pants", "kurtas"];
// createOrder(cart, function (orderID) {
//   proceedToPayment(orderID);
// });

// Handling Async via promise
// const promise = createOrder(orderID);
// promise.then(function (orderID) {
//   proceedToPayment(orderID);
// });

// The fundamental difference bw 2 methods is in promise we are attaching the function
// to our promise object instead of passing it as an argument therefore we have
// control on our fn when we are using promises method for handling async operations.

// Understand Promise object in browser
const GITHUB_URL =  "https://api.github.com/users/mojombo"

const user2 = fetch(GITHUB_URL)
console.log(user2);