const container = document.querySelector('.items');
const cubes = document.querySelectorAll('.item');

cubes.forEach(cube => {
  cube.style.position = 'absolute';
  cube.style.cursor = 'grab';

  // Save initial positions so they can start in a grid
  const rect = cube.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const initialLeft = rect.left - containerRect.left;
  const initialTop = rect.top - containerRect.top;

  cube.style.left = `${initialLeft}px`;
  cube.style.top = `${initialTop}px`;

  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  // cube.addEventListener('mousedown', (e) => {
  //   isDragging = true;
  //   cube.style.cursor = 'grabbing';
  //   offsetX = e.clientX - cube.offsetLeft;
  //   offsetY = e.clientY - cube.offsetTop;

  //   document.addEventListener('mousemove', onMouseMove);
  //   document.addEventListener('mouseup', onMouseUp);
  // });
	cube.addEventListener('mousedown', (e) => {
  console.log('Mouse down on cube:', cube);
  isDragging = true;
  cube.style.cursor = 'grabbing';
  offsetX = e.clientX - cube.offsetLeft;
  offsetY = e.clientY - cube.offsetTop;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

  function onMouseMove(e) {
    if (!isDragging) return;
console.log('Dragging cube:', cube);
    const containerBounds = container.getBoundingClientRect();
    const cubeWidth = cube.offsetWidth;
    const cubeHeight = cube.offsetHeight;

    // Calculate new position
    let x = e.clientX - offsetX - containerBounds.left;
    let y = e.clientY - offsetY - containerBounds.top;

    // Boundary conditions
    x = Math.max(0, Math.min(container.clientWidth - cubeWidth, x));
    y = Math.max(0, Math.min(container.clientHeight - cubeHeight, y));

    cube.style.left = `${x}px`;
    cube.style.top = `${y}px`;
  }

  // function onMouseUp() {
  //   isDragging = false;
  //   cube.style.cursor = 'grab';
  //   document.removeEventListener('mousemove', onMouseMove);
  //   document.removeEventListener('mouseup', onMouseUp);
  // }
	function onMouseUp() {
  console.log('Mouse up on cube:', cube);
  isDragging = false;
  cube.style.cursor = 'grab';
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}
});
