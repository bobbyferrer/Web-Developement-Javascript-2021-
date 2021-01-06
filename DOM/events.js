const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// DoubleClick
clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
clearBtn.addEventListener('mouseenter', runEvent);
// Mouseleave
clearBtn.addEventListener('mouseleave', runEvent);
// Mouseover
clearBtn.addEventListener('mouseover', runEvent);
// Mouseout
clearBtn.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);


function runEvent(e) {

  console.log(`Event Type: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}