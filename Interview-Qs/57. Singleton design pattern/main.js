const SingletonDesignPattern = () => {
  let instance = null;
  const createInstance = () => {
    return {
      name: "Shobhit",
      score: Math.floor(Math.random() * 10),
    };
  };

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
};

let singletonObj = SingletonDesignPattern();

const instance1 = singletonObj.getInstance();
const instance2 = singletonObj.getInstance();
const instance3 = singletonObj.getInstance();

console.log(instance1, instance2, instance3);

// IIFE Implementation

// In summary, using an IIFE in the context of the Singleton pattern helps 
// to encapsulate logic, prevent global scope pollution, and provide controlled 
// access to the single instance. It's a common practice that aligns well with the 
// principles of modular and maintainable code.

// const SingletonDesignPattern = (() => {
//   let instance = null;
//   const createInstance = () => {
//     return {
//       name: "Shobhit",
//       score: Math.floor(Math.random() * 10),
//     };
//   };

//   return {
//     getInstance: function () {
//       if (!instance) {
//         instance = createInstance();
//       }
//       return instance;
//     },
//   };
// })();

// // let singletonObj = SingletonDesignPattern();

// const instance1 = SingletonDesignPattern.getInstance();
// const instance2 = SingletonDesignPattern.getInstance();
// const instance3 = SingletonDesignPattern.getInstance();

// console.log(instance1, instance2, instance3);



