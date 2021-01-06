// document.getElementsByClassName();

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[2]);
// items[2].style.color = 'red';
// items[3].textContent = 'Hello world';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName();
//  let lis =  document.getElementsByTagName('li');
//  console.log(lis);
// //  console.log(lis[0]);
// //  lis[0].style.color = 'purple';
// //  lis[1].textContent = 'purple';

// //  Convert HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index) {
//   console.log(li);
//   li.textContent = `${index}: Hey There`;
// });
// console.log(lis);

// document.querySelectorAll()

const items = document.querySelectorAll('ul.collection li.collection-item');

console.log(items);

items.forEach(function(item, index) {
  item.textContent = `${index}: Hello world`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li) {
   li.style.background = 'purple';
   li.style.color = '#fff';
});

for(let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#ccc';
}