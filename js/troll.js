var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'DLzxrzFCyOs',
    playerVars: {
      color: 'white',
      controls: 0,
      disablekb: 0,
      loop: 1,
      modestbranding: 1,
      showinfo: 0,
      autoplay: 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

var done = false;

function onPlayerReady(event) {
  event.target.playVideo();
  $(".video-container").animate({
    top: "-5000em"
  }, "slow");
  $("#row").prepend("<p class='header center grey-text text-darken-4 flow-text' id='rickroll-text'>You just got rickrolled!</p>");
  $("#rickroll-text").animate(function() {
    fontSize:'20em'
  }, "slow");
  done = true;
}


function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}
