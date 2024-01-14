// MOUSE

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
  
// LENIS Smooth Scroll

const lenis = new Lenis({
duration: 1,
easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

lenis.on('scroll', (e) => {
console.log(e)
})

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//Refresh on window resize
// Should do a better fix by implementing the responsive text with splitype

window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});

// TEXT ANIMATION

const text = new SplitType('.splitMe', { types: 'lines, words' })

gsap.to('.word', {
    y: 0,
    stagger: 0.025,
    delay: 0,
    duration: 0,
})

/*
var words = gsap.utils.toArray('.word');

words.forEach((word) => {
  
  gsap.to(word, {
    y: 0,
    stagger: 0.025,
    delay: 0,
    duration: 0,
    scrollTrigger: {
        trigger: word,
        start: 'top 85%',
        end: 'bottom 15%',
        scrub: false,
        markers: true,
    }
});
  
})
*/