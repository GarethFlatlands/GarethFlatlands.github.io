// Gets the audio and assigns the variable
var slowAudio = new Audio("assets/sounds/theRest.mp3");

// Slows the audion down 1 ir normal, 0.5 is half etc
slowAudio.playbackRate = 0.5;

// Plays the audion when the main page button is clicked
$("#playButton").on("click", function() {
	slowAudio.play();
});