(function(window, document) {
  "use strict";

  var now = new Date();
  var hours = now.getHours();

  if (hours > 22 || hours < 3) {
    document.write('<link rel="stylesheet" href="/css/colors-night.css">');
  } else if (hours > 4 && hours < 9) {
    document.write('<link rel="stylesheet" href="/css/colors-morning.css">');
  } else if (hours > 8 && hours < 18) {
    document.write('<link rel="stylesheet" href="/css/colors-day.css">');
  } else if (hours > 17 && hours < 20) {
    document.write('<link rel="stylesheet" href="/css/colors-evening.css">');
  } else if (hours > 19 && hours < 22) {
    document.write('<link rel="stylesheet" href="/css/colors-night.css">');
  } else {
    document.write('<html style="background-color: orangered; color: white;">');
  }
})(window, document);
