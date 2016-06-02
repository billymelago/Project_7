
var videoPlayerUI = {
    // Defining transcript elements
		transcriptContainer: $('.transcript'),
		ph01: $('.ph01'),
		ph02: $('.ph02'),
		ph03: $('.ph03'),
		ph04: $('.ph04'),
		ph05: $('.ph05'),
		ph06: $('.ph06'),
		ph07: $('.ph07'),
		ph08: $('.ph08'),
		ph09: $('.ph09'),
		ph10: $('.ph10'),
		ph11: $('.ph11'),
		ph12: $('.ph12'),
		ph13: $('.ph13'),
		ph14: $('.ph14'),
		ph15: $('.ph15'),
		ph16: $('.ph16'),

// Function to hilight current phrase on timeupdate event
        transcriptHighlight: function () {
            var myVideo = document.getElementById('video');
            $(myVideo).on('timeupdate', function () {
				var currTime = myVideo.currentTime;
				if (currTime > 0 && currTime < 4 ) {
				    videoPlayerUI.ph01.css('color', 'white');
                    videoPlayerUI.ph01.css('font-size', '1.25em');
				} else {
				    videoPlayerUI.ph01.css('color', 'mediumpurple');
                    videoPlayerUI.ph01.css('font-size', '1em');
				}
				if (currTime > 4 && currTime < 7.5 ) {
				    videoPlayerUI.ph02.css('color', 'white');
                    videoPlayerUI.ph02.css('font-size', '1.25em');
				} else {
				    videoPlayerUI.ph02.css('color', 'mediumpurple');
                    videoPlayerUI.ph02.css('font-size', '1em');
				}
				if (currTime > 7.5 && currTime < 11.2 ) {
				    videoPlayerUI.ph03.css('color', 'white');
                    videoPlayerUI.ph03.css('font-size', '1.25em');
				} else {
				    videoPlayerUI.ph03.css('color', 'mediumpurple');
                    videoPlayerUI.ph03.css('font-size', '1em');
				}
				if (currTime > 11.2 && currTime < 14 ) {
				    videoPlayerUI.ph04.css('color', 'white');
                    videoPlayerUI.ph04.css('font-size', '1.25em');
				} else {
				    videoPlayerUI.ph04.css('color', 'mediumpurple');
                    videoPlayerUI.ph04.css('font-size', '1em');
				}
				if (currTime > 14 && currTime < 18 ) {
				    videoPlayerUI.ph05.css('color', 'white');
                    videoPlayerUI.ph05.css('font-size', '1.25em');
				} else {
				    videoPlayerUI.ph05.css('color', 'mediumpurple');
                    videoPlayerUI.ph05.css('font-size', '1em');
				}
				if (currTime > 18 && currTime < 22.4 ) {
				    videoPlayerUI.ph06.css('color', 'white');
                    videoPlayerUI.ph06.css('font-size', '1.25em');
				} else {
				    videoPlayerUI.ph06.css('color', 'mediumpurple');
                    videoPlayerUI.ph06.css('font-size', '1em');
				}
				if (currTime > 22.4 && currTime < 26.9 ) {
				    videoPlayerUI.ph07.css('color', 'white');
                    videoPlayerUI.ph07.css('font-size', '1.25em');
				} else {
				    videoPlayerUI.ph07.css('color', 'mediumpurple');
                    videoPlayerUI.ph07.css('font-size', '1em');
                }
                if (currTime > 26.9 && currTime < 31 ) {
                    videoPlayerUI.ph08.css('color', 'white');
                    videoPlayerUI.ph08.css('font-size', '1.25em');
                } else {
                    videoPlayerUI.ph08.css('color', 'mediumpurple');
                    videoPlayerUI.ph08.css('font-size', '1em');
                }
                if (currTime > 32.1 && currTime < 34.7 ) {
                    videoPlayerUI.ph09.css('color', 'white');
                    videoPlayerUI.ph09.css('font-size', '1.25em');
                } else {
                    videoPlayerUI.ph09.css('color', 'mediumpurple');
                    videoPlayerUI.ph09.css('font-size', '1em');
                }
                if (currTime > 34.7 && currTime < 39.5 ) {
                    videoPlayerUI.ph10.css('color', 'white');
                    videoPlayerUI.ph10.css('font-size', '1.25em');
                } else {
                    videoPlayerUI.ph10.css('color', 'mediumpurple');
                    videoPlayerUI.ph10.css('font-size', '1em');
                }
                if (currTime > 39.5 && currTime < 41.2 ) {
                    videoPlayerUI.ph11.css('color', 'white');
                    videoPlayerUI.ph11.css('font-size', '1.25em');
                } else {
                    videoPlayerUI.ph11.css('color', 'mediumpurple');
                    videoPlayerUI.ph11.css('font-size', '1em');
                }
                if (currTime > 42.3 && currTime < 46.3 ) {
                    videoPlayerUI.ph12.css('color', 'white');
                    videoPlayerUI.ph12.css('font-size', '1.25em');
                } else {
                    videoPlayerUI.ph12.css('color', 'mediumpurple');
                    videoPlayerUI.ph12.css('font-size', '1em');
                }
                if (currTime > 46.3 && currTime < 49.3 ) {
                    videoPlayerUI.ph13.css('color', 'white');
                    videoPlayerUI.ph13.css('font-size', '1.25em');
                } else {
                    videoPlayerUI.ph13.css('color', 'mediumpurple');
                    videoPlayerUI.ph13.css('font-size', '1em');
                }
                if (currTime > 49.3 && currTime < 53.7 ) {
                    videoPlayerUI.ph14.css('color', 'white');
                    videoPlayerUI.ph14.css('font-size', '1.25em');
                } else {
                    videoPlayerUI.ph14.css('color', 'mediumpurple');
                    videoPlayerUI.ph14.css('font-size', '1em');
                }
                if (currTime > 53.8 && currTime < 57.8 ) {
                    videoPlayerUI.ph15.css('color', 'white');
                    videoPlayerUI.ph15.css('font-size', '1.25em');
                } else {
                    videoPlayerUI.ph15.css('color', 'mediumpurple');
                    videoPlayerUI.ph15.css('font-size', '1em');
                }
                if (currTime > 57.8 && currTime < 59 ) {
                    videoPlayerUI.ph16.css('color', 'white');
                    videoPlayerUI.ph16.css('font-size', '1.25em');
                } else {
                    videoPlayerUI.ph16.css('color', 'mediumpurple');
                    videoPlayerUI.ph16.css('font-size', '1em');
                }
            });
				
},

			// Function to allow clicking on a phrase to set video current time respectively
        transcriptClick: function() {
             var myVideo = document.getElementById('video');
            videoPlayerUI.ph01.click(function() {
                myVideo.currentTime = 0;
                myVideo.play();
            });
            videoPlayerUI.ph02.click(function() {
                myVideo.currentTime = 4;
                myVideo.play();
            });
            videoPlayerUI.ph03.click(function() {
                myVideo.currentTime = 7.5;
                myVideo.play();
            });
            videoPlayerUI.ph04.click(function() {
                myVideo.currentTime = 11.2;
                myVideo.play();
            });
            videoPlayerUI.ph05.click(function() {
                myVideo.currentTime = 14;
                myVideo.play();
            });
            videoPlayerUI.ph06.click(function() {
                myVideo.currentTime = 18;
                myVideo.play();
            });
            videoPlayerUI.ph07.click(function() {
                myVideo.currentTime = 22.4;
                myVideo.play();
            });
            videoPlayerUI.ph08.click(function() {
                myVideo.currentTime = 26.9;
                myVideo.play();
            });
            videoPlayerUI.ph09.click(function() {
                myVideo.currentTime = 32.1;
                myVideo.play();
            });
            videoPlayerUI.ph10.click(function() {
                myVideo.currentTime = 34.7;
                myVideo.play();
            });
            videoPlayerUI.ph11.click(function() {
                myVideo.currentTime = 39.5;
                myVideo.play();
            });
            videoPlayerUI.ph12.click(function() {
                myVideo.currentTime = 42.3;
                myVideo.play();
            });
            videoPlayerUI.ph13.click(function() {
                myVideo.currentTime = 46.3;
                myVideo.play();
            });
            videoPlayerUI.ph14.click(function() {
                myVideo.currentTime = 49.3;
                myVideo.play();
            });
            videoPlayerUI.ph15.click(function() {
                myVideo.currentTime = 53.8;
                myVideo.play();
            });
            videoPlayerUI.ph16.click(function() {
                myVideo.currentTime = 57.8;
                myVideo.play();
            });
        },
                    // Function to load controls
        loadControls: function() {
                videoPlayerUI.transcriptHighlight();
                videoPlayerUI.transcriptClick();
        }
};

setInterval(function(t) {
	videoPlayerUI.loadControls();
}, 1000);

