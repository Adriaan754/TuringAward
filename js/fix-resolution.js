var deviceWidth = $(window).width();
var deviceHeight = $(window).height();
var tooHigh = 767;
var tooLow = 1119;

$(function() {
  if (deviceWidth < tooLow) {
    if (deviceHeight > tooHigh) {
      console.log("Weird deviceWidth, rendering error will happen");
      document.getElementById("logo-container").style.left = "-2.5em";
      console.log("Rendering error fixed")
    }
  } else {
    console.log("Normal deviceWidth, the website will be fine");
  }
  console.log("pageWidth=" + deviceWidth);
  console.log("deviceHeight=" + deviceHeight)
});
