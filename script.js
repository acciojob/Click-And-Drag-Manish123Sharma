// Your code here.
const container = document.querySelector('.items');
const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.style.position = 'absolute'; // allow free movement
  item.style.cursor = 'grab';

  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  item.addEventListener('mousedown', (e) => {
    isDragging = true;
    item.style.cursor = 'grabbing';

    const rect = item.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    // Bring dragged item to front
    item.style.zIndex = 1000;

    function onMouseMove(e) {
      if (!isDragging) return;

      let x = e.clientX - containerRect.left - offsetX;
      let y = e.clientY - containerRect.top - offsetY;

      // Boundaries
      x = Math.max(0, Math.min(x, container.clientWidth - item.offsetWidth));
      y = Math.max(0, Math.min(y, container.clientHeight - item.offsetHeight));

      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
    }

    function onMouseUp() {
      isDragging = false;
      item.style.cursor = 'grab';
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
});
