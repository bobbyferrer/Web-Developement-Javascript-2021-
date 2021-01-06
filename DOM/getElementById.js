// document.getElementById();


//  console.log(document.getElementById('task-title'));



//  const taskTitle = document.getElementById('task-title');

//  taskTitle.style.background = 'cyan';
//  taskTitle.style.color = '#000';
//  taskTitle.style.padding = '10px';
// //  taskTitle.style.display = 'none';

// taskTitle.textContent = 'Hello';
// taskTitle.innerText = 'My Task';
// taskTitle.innerHTML = '<h1 style="color: red">Task List</h1>';


// document.querySelector();

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';


document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'cyan';
document.querySelector('li:nth-child(2)').style.color = 'purple';
document.querySelector('li:nth-child(2)').textContent = 'Hello world';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = 'cyan';
