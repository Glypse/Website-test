//--------------------MOUSE--------------------

if (matchMedia('(pointer:fine)').matches) {
  // Device has a mouse
  var cursorSize = 24;
  const hover = document.querySelectorAll('a');

  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".cursorCircle");

  circles.forEach(function (cursorCircle, index) {
    cursorCircle.x = 0;
    cursorCircle.y = 0;
  });

  window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
    
  });

  function animateCircles() {
    
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (cursorCircle, index) {
      cursorCircle.style.left = x - (cursorSize/2) + "px";
      cursorCircle.style.top = y - (cursorSize/2) + "px";
      cursorCircle.style.setProperty('--cursorSize', cursorSize + "px");
      
      cursorCircle.style.scale = (circles.length - index) / circles.length;
      
      cursorCircle.x = x;
      cursorCircle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.1;
      y += (nextCircle.y - y) * 0.1;
    });
  
    requestAnimationFrame(animateCircles);
  }

  animateCircles();
} else {
  // Device doesn't have a mouse
  var cursorSize = 0;
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".cursorCircle");
  function animateCircles() {
    circles.forEach(function (cursorCircle, index) {
      cursorCircle.style.setProperty('--cursorSize', cursorSize + "px");
    });
  }
  animateCircles();
}