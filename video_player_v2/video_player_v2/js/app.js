 //Variables foe each button
var videoContainer = document.getElementById('videoContainer');
var videoOverlay = document.getElementById('overlay');
var videoControls = document.getElementById('video-controls');
var playpause = document.getElementById('playpause');
var replay = document.getElementById('replay');
var video = document.getElementById('video');
var mute = document.getElementById('mute');
var vidFwdThirtySec = document.getElementById('vidFwdThirtySec');
var volumeslider = document.getElementById('volumeslider');
var progress = document.getElementById('progress');
var progressBar = document.getElementById('progress-bar');
var videoTime = document.getElementById('video-time');
var currentTimeText = document.getElementById('curTimeText');
var durationTimeText = document.getElementById('durTimeText');
var otherButtons = document.getElementById('otherBtns');
var fullscreen = document.getElementById('fs');
   

window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(e) {
    switch (e.keyCode) {
    case 37://Left arrow key
        video.currentTime -= 2;
        break;
    case 39://Up arrow
        video.currentTime += 2;
        break;
    case 107://Add (+) key
        volumeslider.value = 100;
        video.volume = 100;
        break;
    case 109://Subtract (-) key
        volumeslider.value = 0;
        video.volume = 0;
        break;
    }
}

//IIF
(function () {
    //Turn off default controls
    video.controls = false;
    $("#video").bind("ended", function () {
        video.currentTime = 0;
        progress.value = 0;
        playpause.setAttribute('data-state', 'pause');
        $("#otherBtns").css("display", "flex");
        video.pause();
    });
    $("#accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
    currentTimeText.innerHTML = "0:00";
    durationTimeText.innerHTML = "0:00";
    
    //Turn on custom cotrols
    videoControls.setAttribute('data-state', 'visible');
    
    var subtitles = document.getElementById('subtitles');
    for (var i = 0; i < video.textTracks.length; i++) {
        video.textTracks[i].mode = 'hidden';
    }
   
    // Creates and returns a menu item for the subtitles language menu
    var subtitlesMenuButtons = [];
    var createMenuItem = function(id, lang, label) {
        var listItem = document.createElement('li');
        var button = listItem.appendChild(document.createElement('button'));
        button.setAttribute('id', id);
        button.className = 'subtitles-button';
        if (lang.length > 0) button.setAttribute('lang', lang);
        button.value = label;
        button.setAttribute('data-state', 'inactive');
        button.appendChild(document.createTextNode(label));
        button.addEventListener('click', function(e) {
            //Setting all the buttons to inactive
            subtitlesMenuButtons.map(function(v, i, a) {
                subtitlesMenuButtons[i].setAttribute('data-state', 'inactive');
        });
        //Find the language to activate
        var lang = this.getAttribute('lang');
        for (i = 0; i < video.textTracks.length; i++) {
            //For the subtitles-off button the first condition will never match so all will subtitles be turned off
            if (video.textTracks[i].language == lang) {
                video.textTracks[i].mode = 'showing';
                this.setAttribute('data-state', 'active');
            }
            else {
                video.textTracks[i].mode = 'hidden';
            }
        }
        subtitlesMenu.style.display = 'none';
    });
    subtitlesMenuButtons.push(button);
    return listItem;    
    };
     //Building a caption menu
   
    if (video.textTracks) {
       var df = document.createDocumentFragment();
       var subtitlesMenu = df.appendChild(document.createElement('ul'));
       subtitlesMenu.className = 'subtitles-menu';
       subtitlesMenu.appendChild(createMenuItem('subtitles-off', '', 'Off'));
       for (var i = 0; i < video.textTracks.length; i++) {
          subtitlesMenu.appendChild(createMenuItem('subtitles-' + video.textTracks[i].language, video.textTracks[i].language, video.textTracks[i].label));
       }
       videoContainer.appendChild(subtitlesMenu);
    }
    
    subtitles.addEventListener('click', function(e) {
        if (subtitlesMenu) {
            subtitlesMenu.style.display = (subtitlesMenu.style.display == 'block' ? 'none' : 'block');
        }
    });
})();

//Hide video controls on mouse out
var hoverFunction = function() {
    videoContainer.onmouseout = function(){
        otherButtons.style.display = 'flex';
        otherButtons.style.opacity = '0';
        videoTime.style.opacity = '0';
        videoOverlay.style.opacity = '0';
    };
    videoContainer.onmouseover = function(){
        otherButtons.style.display = 'flex';
        otherButtons.style.opacity = '1';
        videoTime.style.opacity = '1';
        videoOverlay.style.opacity = '.45';
    };
};


//Functions for basic buttons
var vidplay = function () {
        if (video.paused) {
            video.play();
            playpause.setAttribute('data-state', 'play');
            videoControls.onmouseout = hoverFunction;
            videoContainer.onmouseout = hoverFunction;
        } else {
            video.pause();
            playpause.setAttribute('data-state', 'pause');
            videoControls.onmouseout = function(){
            otherButtons.style.display = 'flex'; 
    };
            videoContainer.onmouseout = function(){
            otherButtons.style.display = 'flex';    
    };
        } 
    };
var replayVideo = function () {
            
			video.currentTime = 0;
            playpause.setAttribute('data-state', 'pause');
            video.pause();
};

var muteSound = function() {
    video.muted = !video.muted;
    if(video.muted) {
       volumeslider.value = 0;
        mute.setAttribute('data-state', 'mute');
    } if(!video.muted) {
       volumeslider.value = 100;
        mute.setAttribute('data-state', 'unmute');
    }
};

var setVolume = function() {
    var seekto = volumeslider.value / 100;
    video.volume = seekto;
};
var fwdThirtySec = function() {
  video.currentTime += 10;  
};
var seekTimeUpdate = function() {
    var newTime = video.currentTime * (100 / video.duration);
    seekslider.value = newTime;
};
var progressFunction = function() {
    progress.setAttribute('max', video.duration);
};
var progressBarFunction = function() {
    progress.value = video.currentTime;
    progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100);
    var curmins = Math.floor(video.currentTime / 60);
    var cursecs = Math.floor(video.currentTime - curmins * 60);
    var durmins = Math.floor(video.duration / 60);
    var dursecs = Math.floor(video.duration - durmins * 60);
    if(cursecs <= 10) {
        cursecs = "0" + cursecs;
    }
    if(dursecs <= 10) {
        dursecs = "0" + dursecs;
    }
    currentTimeText.innerHTML = curmins + ":" + cursecs;
    durationTimeText.innerHTML = durmins + ":" + dursecs;
};
//FINALLY!!!! Because this is inside two elements with a position of realative!
var progressBarVidSeek = function(e) {
    var pos = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft + this.offsetParent.offsetParent.offsetLeft)) / this.offsetWidth;
    video.currentTime =  pos * video.duration;
};
var ccFunction = function() {
    var track = document.getElementById("track-1");
    track.addEventListener("cuechange", function() {
        var myTrack = this.track;
        var myCues = myTrack.activeCues;
        if(myCues.length > 0) {
            var txtWrapper = document.getElementById("display");
            txtWrapper.replaceChild((myCues[0].getCueAsHTML()), txtWrapper.firstChild);
        }
    },false);
    console.log('its working');
};
var myFullscreenFunction = function() {
    var elem = document.getElementById("video");
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        }
    };
function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
//Another user defined function — setFullscreenData() — is also called, which simply sets the value of a data-fullscreen attribute on the videoContainer (this makes use of data-states).
var setFullscreenData = function(state) {
   videoContainer.setAttribute('data-fullscreen', !!state);
};
//This is used simply to set some basic CSS to improve the styling of the custom controls when they are in fullscreen (see the sample code for further details). When a video goes into fullscreen mode, it usually displays a message indicating that the user can press the Esc key to exit fullscreen mode, so the code also needs to listen for relevant events in order to call the setFullscreenData() function to ensure the control styling is correct:
document.addEventListener('fullscreenchange', function(e) {
   setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
});
document.addEventListener('webkitfullscreenchange', function() {
   setFullscreenData(!!document.webkitIsFullScreen);
});
document.addEventListener('mozfullscreenchange', function() {
   setFullscreenData(!!document.mozFullScreen);
});
document.addEventListener('msfullscreenchange', function() {
   setFullscreenData(!!document.msFullscreenElement);
});



//These happen when the user clicks on one off the custom media buttons

playpause.onclick = vidplay;
replay.onclick = replayVideo;
mute.onclick = muteSound;
volumeslider.onclick = setVolume;
video.ontimeupdate = seekTimeUpdate;
video.onloadedmetadata = progressFunction;
video.ontimeupdate = progressBarFunction;
progress.onclick = progressBarVidSeek;
vidFwdThirtySec.onclick = fwdThirtySec;
fullscreen.onclick = myFullscreenFunction;
videoOverlay.onclick = vidplay;
//videoContainer.onmouseout = hoverFunction;

//This adds fullscreen mode if user clicks 'enter'
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);

