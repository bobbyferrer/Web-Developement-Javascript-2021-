// Object literal
// const person = {
//   name: 'bob'
// }

// console.log(person);

// Person constructor
// function Person() {
//   this.name = 'Bob'
// }

// const bob = new Person();

// console.log(bob);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const bob = new Person('Bob', 37);
// const francis = new Person('Fransis', 20);

// console.log(bob);
// console.log(francis);

// CONTRUCTOR AND THIS. KEYWORD
// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}


const bob = new Person('Bob', '5-13-1983');
const darwin = new Person('Darwin', '02/13/00');

console.log(bob.calculateAge());
console.log(darwin.calculateAge());