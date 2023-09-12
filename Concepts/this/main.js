var length = 4;
function callback() {
  console.log(this.length);
}

const obj = {
  lenght: 5,
  method() {
    arguments[0]();
  },
};

obj.method(callback, 2, 3);
