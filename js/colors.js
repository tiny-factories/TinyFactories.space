(function(window, document) {
  "use strict";

  var now = new Date();
  var hours = now.getHours();

  if (hours >= 23 || hours <= 3) {
    //hazy blue
    document.write('<link rel="stylesheet" href="/css/colors-night.css">');
  } else if (hours >= 4 && hours <= 10) {
    //carrot orange
    document.write('<link rel="stylesheet" href="/css/colors-morning.css">');
  } else if (hours >= 11 && hours < 17) {
    //hazy green
    document.write('<link rel="stylesheet" href="/css/colors-day.css">');
  } else if (hours >= 18 && hours <= 22) {
    //cotton purple
    document.write('<link rel="stylesheet" href="/css/colors-evening.css">');
  }  else {
    document.write('<link rel="stylesheet" href="/css/colors-day.css">');
  }
})(window, document);
