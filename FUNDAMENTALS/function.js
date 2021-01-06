// FUNCTION DECLARATION

function greet(firstName = 'JC', lastName = 'Dayauon') {
   if(typeof firstName === 'undefined') {
     firstName = 'JC';
   }
   if(typeof lasstName === 'undefined') {
     lastName = 'Dayauon';
   }

   console.log('Hello');
   return `Hello ${firstName} ${lastName}`;
}

console.log(greet());

// Function Expressions
const square = function(x) {
  return x * x;
}

console.log(square(19));

// Immidiatley Invokable Function Expressions - IIFEs

(function(name) {
  console.log(`Name ${name}`)
})('Bob');


// Property methods
const todo = {
  add: function() {
    console.log('Add todo');
  },
  edit: function(id) {
  console.log(`Edit todo ${id}`);
  }
}

todo.delete = function() {
  console.log('Delete todo...');
}

todo.add();
todo.edit();
todo.delete();