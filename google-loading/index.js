let dots = document.querySelectorAll(".dot")

let delay  = 0.2;

const animate  = (el, delay) =>{
     gsap.to(
         el,
         {
             ease: Power1.easeInOut,
             translateY :-30 ,
             yoyo: true,   //if true , playback will animate back and forth on eah repeat 
             repeat: -1, // how many times the animation should repeat, -1 means infinite 
             duration: 1,
             delay: delay,
         }
     )
}

dots.forEach( dot =>{
    animate(dot, delay)
    delay += 0.25
})