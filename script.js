// Select the light trail container
const lightTrail = document.querySelector('.light-trail');

// Add an event listener for mouse movement
document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.className = 'trail';
  trail.style.top = `${e.clientY}px`;
  trail.style.left = `${e.clientX}px`;
  document.body.appendChild(trail);

  // Remove the trail element after 500ms
  setTimeout(() => {
    trail.remove();
  }, 500);
});
