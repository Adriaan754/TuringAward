/*
render-fix.js
door Adriaan754
*/
var deviceWidth = $(window).width();
var deviceHeight = $(window).height();
var tooLow = 1120;
var tooHigh = 992;
var fixedBefore = false;

renderFix = function renderFix(){
  if (deviceWidth <= tooLow && deviceWidth >= tooHigh) {
    console.log("Weird deviceWidth, rendering error will happen");
    $("#logo-container").css("left","-2.5em");
    console.log("Rendering error fixed");


  } else {
    console.log("Normal deviceWidth, the website will be fine");
  }
  $("#logo-container").css("top",".25em");
  console.log("pageWidth=" + deviceWidth);
  console.log("deviceHeight=" + deviceHeight);
};

$(renderFix);
$(window).resize(
  renderFix());
