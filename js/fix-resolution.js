/*
render-fix.js
door Adriaan754
*/
var deviceWidth = $(window).width();
var deviceHeight = $(window).height();
var tooLow = 1120;
var tooHigh = 992;
var fixedBefore = false;

renderFix = function() {
  if (deviceWidth <= tooLow && deviceWidth >= tooHigh) {
    console.log("Weird deviceWidth, rendering error will happen");
    document.getElementById("logo-container").style.left = "-2.5em";
    console.log("Rendering error fixed")

  } else {
    console.log("Normal deviceWidth, the website will be fine");
  }
  console.log("pageWidth=" + deviceWidth);
  console.log("deviceHeight=" + deviceHeight)
};

$(renderFix);
$(window).resize(function() {
  location.reload(false);
});
