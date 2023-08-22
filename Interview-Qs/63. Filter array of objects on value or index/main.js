const filterObject = (arr, filter) => {
  // If filter is value
  if (typeof filter === "string") {
    for (const obj of arr) {
      for (const [key, value] of Object.entries(obj)) {
        if (value === filter) {
          return obj;
        }
      }
    }
  } else if (filter in arr) {
    return arr[filter];
  } else {
    return undefined;
  }
};

const arr = [
  { name: "Amir", id: "1" },
  { name: "Samlan", id: "2" },
  { name: "Shahrukh", id: "0" },
];

console.log(filterObject(arr, 0)); // { name: "Amir", id: "1" }
console.log(filterObject(arr, "Amir")); // { name: "Amir", id: "1" }
console.log(filterObject(arr, "0")); // { name: "Shahrukh", id: "0" }
