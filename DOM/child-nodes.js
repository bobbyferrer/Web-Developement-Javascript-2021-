let value;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

value = listItem;
value = list;


// Get child nodes
value = list.childNodes;
value = list.childNodes[0];
value = list.childNodes[0].nodeName;
value = list.childNodes[0].nodeType;

// 1 - Element
// 2 - attribute (deprecated)
// 3 - text node
// 8 - Comment
// 9 - Document it self
// 10 - Doctype

// Get children element nodes

value = list.children;
value = list.children[0];
list.children[0].textContent = 'Hello World';


// Children of children
list.children[3].children[0].id = 'test-link';
value = list.children[3].children[0];

// First Child
value = list.firstChild;
value = list.firstElementChild;

// Last child
value = list.lastChild;
value = list.lastElementChild;

// count child elements
value = list.childElementCount;

// Get parent node
value = listItem.parentNode;
value = listItem.parentElement;
value = listItem.parentElement.parentElement;

// Get next sibling
value = listItem.nextSibling;
value = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
value = listItem.previousSibling;
value = listItem.previousElementSibling;



console.log(value);