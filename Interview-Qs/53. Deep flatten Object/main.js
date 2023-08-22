function flattenObject(obj, parent) {
  const fianlObj = {};
  const generateFlatObjects = (obj, parent) => {
    for (let key in obj) {
      const newParent = parent + key;
      const value = obj[key];

      if (typeof value === "object") {
        generateFlatObjects(value, newParent + ".");
      } else {
        fianlObj[newParent] = value;
      }
    }
  };
  generateFlatObjects(obj, parent);
  return fianlObj;
}

const nested = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

console.log(flattenObject(nested, ""));


// https://www.youtube.com/watch?v=s53pTpFw-94