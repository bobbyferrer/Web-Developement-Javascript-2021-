// BUILD IN CONSTRUCTOR

// String
const name1 = 'Darwin';
const name2 = new String('Darwin');

console.log(typeof name1);


if(name2 === name1) {
  console.log('YES');
}else {
  console.log('No');
}

// Number
const number1 = 5;
const number2 = new Number(5);

console.log(typeof number2);


// Boolean
const bool1 = true;
const bool2 = new Boolean(true);


console.log(typeof bool2);


// Function
const getSum1 = function(x, y) {
  return x + y;
}
console.log(typeof getSum1(4,5));

const getSum2 = new Function('x', 'y', 'return 1+1');

console.log(typeof getSum2);


// Object 
const jc1 = {name: 'JC'};
const jc2 = new Object({name: 'JC2'});

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(typeof arr2);