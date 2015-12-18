$("#troll_button").css("text-decoration","none");
$("#troll_button").click(function(event) {
  event.preventDefault();
  console.log("Event Type: " + event.type);
  window.location.href = "rickroll.html"
});
