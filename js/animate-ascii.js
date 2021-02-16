
//initial thing that appears on screen//
let ascii_0 = document.getElementById("animation_0");

//grabs anything with this class//
let ascii_animations = document.getElementsByClassName("ascii_animation ascii_landing");

//Animation of planes 
let plane_animation = document.getElementById("plane_animation");

let blink_speed = 1000;

let count = 0;
let add = 1;

let t = setInterval(function() {
  
count = count + add;
ascii_0.innerHTML = ascii_animations[count].innerHTML;
console.log("Count : " + count +"---"+ ascii_animations[count]);

  if (count == ascii_animations.length-1){
    add = -1;
    plane_animation.classList.add('horizTranslate');
  }
  else if(count==0 ){
    add = 1;
   // plane_animation.classList.remove('horizTranslate');
  }
}, blink_speed);



