//initial thing that appears on screen//
let ascii_0 = document.getElementById("animation_0");

//grabs anything with this class//
let ascii_animations = document.getElementsByClassName("ascii_animation ascii_landing");

let blink_speed = 1100;

let count = 0;
let add = 1;
let t = setInterval(function() {
  
count = count + add;
ascii_0.innerHTML = ascii_animations[count].innerHTML;
console.log("Count : " + count +"---"+ ascii_animations[count]);

  if (count == ascii_animations.length-1 || count==0 ){
    console.log("Flip Direction");
    add *= -1;
  }
}, blink_speed);


  