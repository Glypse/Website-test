//--------------------MOUSE--------------------

if (matchMedia('(pointer:fine)').matches) {
  // Device has a mouse

  //Create cursor divs

  document.addEventListener('DOMContentLoaded', function() {
    // Create the cursorGroup div
    var cursorGroupScript = document.createElement('div');
    cursorGroupScript.classList.add('cursorGroup');

    // Create the cursorCircle0 div
    var cursorCircle0Script = document.createElement('div');
    cursorCircle0Script.classList.add('cursorCircle', 'cursorCircle0');

    // Append cursorCircle0 to cursorGroup
    cursorGroupScript.appendChild(cursorCircle0Script);

    // Create 20 cursorCircleS divs and append them to cursorGroup
    for (var i = 1; i <= 80; i++) {
      var cursorCircleScript = document.createElement('div');
      cursorCircleScript.classList.add('cursorCircle');
      cursorGroupScript.appendChild(cursorCircleScript);
    }

    // Get the body element
    var body = document.body;

    // Insert cursorGroup as the first child of the body
    body.insertBefore(cursorGroupScript, body.firstChild);

    // Animate mouse
    var cursorSize = 24;
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
        cursorCircle.style.left = x - (cursorSize / 2) + "px";
        cursorCircle.style.top = y - (cursorSize / 2) + "px";
        cursorCircle.style.setProperty('--cursorSize', cursorSize + "px");

        cursorCircle.x = x;
        cursorCircle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.075;
        y += (nextCircle.y - y) * 0.075;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  });
}