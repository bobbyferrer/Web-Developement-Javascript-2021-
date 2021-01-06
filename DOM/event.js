// document.querySelector('.clear-tasks').addEventListener('click', function(){
//   console.log('Hello world');
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  // console.log('Clicked');
  let value;

  value = e;

  // Event target element
  value = e.target;
  value = e.target.id;
  value = e.target.className;
  value = e.target.classList;

  // Event type
  value = e.type;

  // Timestamp
  value = e.timeStamp;

  // Coords event relative to the window
  value = e.clientY;
  value = e.clientX;

  // Coords event relative to the element
  value = e.offsetY;
  value = e.offsetX;

  console.log(value);
}