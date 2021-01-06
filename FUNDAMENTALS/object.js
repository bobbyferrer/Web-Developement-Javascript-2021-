const person = {
  firstName: 'JC',
  lastName: 'Dayauon',
  age: 29,
  email: 'js@gmail.com',
  hobbies: ['Coding', 'Music'],
  address: {
    city: 'Caloocan',
    street: 'Pearl'
  },
  getBirthYear: function() {
    return 2020 - this.age;
  }

};

// let value;

// value = person;

// value = person.firstName;
// value = person.age;
// value = person.hobbies[1];
// value = person.address.city;
// value = person.address.street;
// value = person.getBirthYear();

// console.log(value);

const people = [{name: 'JC', age: 29}, {name: 'Carl', age: 21}, {name: 'Darwin', age: 20}];

for(let i = 0; i < people.length; i++){
   console.log(people[i].age);
   console.log(people[i].name);
}