// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.querySelector('#task-title');
// Get Parent
const cardAction = document.querySelector('.card-action');

// REPLACE
cardAction.replaceChild(newHeading, oldHeading);

// Remove list item
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[3].remove();

// Remove child element
list.removeChild(lis[2]);

// Classes & Attr
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let value;

// Classes
value = link.className;
value = link.classList;
value = link.classList[1];
link.classList.add('test');
link.classList.remove('test');

// Attributes
value = link.getAttribute('href');
// value = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
value = link.hasAttribute('title');
value = link;

console.log(link);