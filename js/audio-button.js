var audioplayer = document.getElementById("audio_man");
$("#button_man").click(function(){
    if (audioplayer.paused) {
      $("#button_man").empty();
      $("#button_man").prepend("Voorlezen: Man<i class='material-icons right'>volume_up</i>");
       audioplayer.play();
    }
    else {
      $("#button_man").empty();
      $("#button_man").prepend("Voorlezen: Man<i class='material-icons right'>volume_mute</i>");
       audioplayer.pause();
    }
});

var audioplayer_vrouw = document.getElementById("audio_vrouw");
$("#button_vrouw").click(function(){
    if (audioplayer_vrouw.paused) {
      $("#button_vrouw").empty();
      $("#button_vrouw").prepend("Voorlezen: Vrouw<i class='material-icons right'>volume_up</i>");
       audioplayer_vrouw.play();
    }
    else {
      $("#button_vrouw").empty();
      $("#button_vrouw").prepend("Voorlezen: Vrouw<i class='material-icons right'>volume_mute</i>");
       audioplayer_vrouw.pause();
    }
})
