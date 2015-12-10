var audioplayer = document.getElementById("audio_man");
$("#button_man").click(function() {
  if (audioplayer.paused) {
    $("#button_man").find("i").fadeOut(50, function() {
      $(this).remove;
    });
    $("#button_man").append("<i class='material-icons right'>volume_up</i>");
    audioplayer.play();
  } else {
    $("#button_man").find("i").fadeOut(50, function() {
      $(this).remove;
    });
    $("#button_man").append("<i class='material-icons right'>volume_mute</i>");
    audioplayer.pause();
  }
});

var audioplayer_vrouw = document.getElementById("audio_vrouw");
$("#button_vrouw").click(function() {
  if (audioplayer_vrouw.paused) {
    $("#button_vrouw").find("i").fadeOut(50, function() {
      $(this).remove;
    });
    $("#button_vrouw").append("<i class='material-icons right'>volume_up</i>");
    audioplayer_vrouw.play();
  } else {
    $("#button_vrouw").find("i").fadeOut(50, function() {
      $(this).remove;
    });
    $("#button_vrouw").append("<i class='material-icons right'>volume_mute</i>");
    audioplayer_vrouw.pause();
  }
});

$('#audio_vrouw').on('ended', function() {
  $("#button_vrouw").find("i").fadeOut(50, function() {
    $(this).remove;
  });
  $("#button_vrouw").append("<i class='material-icons right'>play_arrow</i>");
});

$('#audio_man').on('ended', function() {
  $("#button_man").find("i").fadeOut(50, function() {
    $(this).remove;
  });
  $("#button_man").append("<i class='material-icons right'>play_arrow</i>");
});
