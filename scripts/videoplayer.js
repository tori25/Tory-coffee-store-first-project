function initializeVideoPlayerControls() {
//attach functionality to video buttons
    var video = document.getElementById("videoplayer");


    function playVideo(evt) {

        button = evt.target;
        if (video.paused) {
            //start play the content
            video.play();
            //change the context of the button to pause
            button.textContent = "Pause";
        } else {
            video.pause();
            button.textContent = "Play";
        }
    }
//make possible to seek in the video - jumping forward or backward a couple of seconds
    function seek(numberOfSeconds) {
        try {
            //verify if the video is at the start
            if (numberOfSeconds == 0) {
                video.currentTime = numberOfSeconds;
            }
            else {
                video.currentTime += numberOfSeconds;
            }

        } catch (err) {
            displayError("Something went wrong...");
        }
    }

    //event handlers on the buttons
    document.getElementById("playButton").addEventListener("click", playVideo, false);

    document.getElementById("backButton").addEventListener("click", function () {
        seek(-5);
    }, false);

    document.getElementById("forwardButton").addEventListener("click", function () {
        seek(5);
    }, false);

    document.getElementById("slowerButton").addEventListener("click", function () {
        video.playbackRate -= .25;
    }, false);
    document.getElementById("fasterButton").addEventListener("click", function () {
        video.playbackRate += .25;
    }, false);
    document.getElementById("muteButton").addEventListener("click", function (s) {
       //check if the video is currently mutted
        if (video.muted) {
            video.muted = false;
        } else {
            video.muted = true;
        }
    }, false);

    video.addEventListener("error", function (err) {
        errMessage(err);
    }, true);

    function displayError(error) {
        document.getElementById("errorDiv").textContent = error;
    }
}