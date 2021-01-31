
let ascii_0 = document.getElementById("animation_0");
//base--animation---//
let ascii_1 = document.getElementById("animation_1");
let ascii_2 = document.getElementById("animation_2");
let ascii_3 = document.getElementById("animation_3");
let ascii_4 = document.getElementById("animation_4");
let ascii_5 = document.getElementById("animation_5");
let ascii_6 = document.getElementById("animation_6");
let ascii_7 = document.getElementById("animation_7");




let blink_speed = 1100;
let wordObjects = [ascii_0,ascii_1,ascii_2,ascii_3,ascii_4,ascii_5,ascii_6,ascii_7,ascii_7,ascii_6,ascii_5,ascii_4,ascii_3,ascii_2,ascii_1];


//ascii_0.innerHTML = wordObjects[2].innerHTML;



let count = 0;
let t = setInterval(function() {
  
count++;
console.log(count);
ascii_0.innerHTML = wordObjects[count].innerHTML;


  if (count == 14){
    console.log("!!!!Reset!!!!");
    count = -1;
  }
}, blink_speed);




// console.log("Count : " + count +"---"+ wordObjects[count]);
  