// Create some arrays
const numbers = [43, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'pear'];
const mixed = [22, 'Hello', true, undefined, null, {a: 1, b: 2}];



let value;

// Get array length

// value = numbers.length;
// // Check if is array
// value = Array.isArray(numbers);
// // Get single value
// value = numbers[3];
// value = numbers[0];

// Insert into array
// numbers[0] = 100;
// // Find index of value
// value = numbers.indexOf(36);

// // MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off fron end
// numbers.pop();
// // Take off from front
// numbers.shift();

// // // Splice value
numbers.splice(0, 3);

// // Reverse
// numbers.reverse();

// // Concatenate array
// value = numbers.concat(numbers2);

// Sorting arrays
value = fruit.sort();
value = numbers.sort();

// Use the compare function
value = numbers.sort(function(x, y) {
  return x - y;
});
// Reverse sort
value = numbers.sort(function(x, y) {
  return y - x;
});

// Find 
function over50(num) {
  return num > 50;
}

value = numbers.find(over50);


console.log(value);