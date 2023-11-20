// Run this in browser console......

window.localStorageWithExpiry = {
  setItem: (key, value, expiryTime) => {
    let result = {
      value,
      expiryTime: Date.now() + expiryTime,
    };
    localStorage.setItem(key, JSON.stringify(result));
  },
  getItem: (key) => {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    if (Date.now() >= data.expiryTime) {
      localStorage.removeItem(key);
      return null;
    }
    return data.value;
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};

localStorageWithExpiry.setItem("myName", "Shobhit", 2000);

console.log(localStorageWithExpiry.getItem("myName"));

setTimeout(() => {
    console.log(localStorageWithExpiry.getItem("myName"));
}, 2100);
