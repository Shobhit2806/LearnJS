// https://www.youtube.com/watch?v=3jKvw-iZOXk


// An event can have multiple callbacks associated with it to keep track of all cb we are using listerners object
Array.prototype.listeners = {};

Array.prototype.addListener = function (eventName, callback) {
  if (!this.listeners[eventName]) {
    this.listeners[eventName] = [];
  }
  this.listeners[eventName].push(callback);
};

Array.prototype.pushWithEvent = function (eventName, values) {
  this.push(...values);
  this.triggerEvent(eventName, values);
};

Array.prototype.popWithEvent = function (eventName) {
  const value = this.pop();
  this.triggerEvent(eventName, value);
};

Array.prototype.triggerEvent = function (eventName, value) {
  if (this.listeners[eventName]) {
    this.listeners[eventName].forEach((callback) => {
      callback(eventName, value, this);
    });
  }
};

const arr = [];
arr.addListener("add", (eventName, items, array) => {
  console.log("items were added", items);
});
arr.addListener("remove", (eventName, item, array) => {
  console.log(item, " was removed");
});
arr.pushWithEvent("add", [4, 5]);
arr.popWithEvent("remove");

