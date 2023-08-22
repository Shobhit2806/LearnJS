const CALC = function () {
  console.log(this);
  this.total = 0;
  this.add = (val) => {
    this.total += val;
    return this;
  };
  this.subtract = (val) => {
    this.total -= val;
    return this;
  };
  this.multiply = (val) => {
    this.total *= val;
    return this;
  };
  this.divide = (val) => {
    this.total /= val;
    return this;
  };
  this.value = () => this.total;
};


const calculator = new CALC();
console.log(typeof calculator);
calculator.add( 10 ).subtract( 2 ).divide( 2 ).multiply( 5 );
console .log(calculator.total);


