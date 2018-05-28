// Gets the audio and assigns the variable
var slowAudio = new Audio("assets/sounds/slowWalkers.mp3");

// Plays the audio when the main page button is clicked
$("#playButton").on("click", function() {
	slowAudio.play();
	// Fades the page contents out over the span of the song (approx 31.5 minutes)
	$("body").fadeOut(2010000);
	// Waits a set time and then currupts some page elements
	setTimeout(glitchElements, 1507500);
});

// Page Footer code
// Sets the current year as the copyright year in the page footer
var d = new Date();
var thisYear = d.getFullYear();
var yearSpan = document.getElementById("currentYear");
yearSpan.textContent = thisYear;

// Corrupts the band name at the top of the page and displays an alternative message underneath
function glitchElements(){
	var glitchCharacters = ["n", "e", "W", "g", "s", "T", "%", "$", "£", "<", "@", "#", ".", "?"];
	var imageHeader = document.querySelector(".display-4");
	var pageSubtitle = document.querySelector(".lead");
	var glitchedHeader = "";

	for(i=0; i<imageHeader.textContent.length; i++) {
		// 50/50 chance of a glitched character 
		if(Math.random()>=0.5) {
			glitchedHeader += glitchCharacters[Math.floor(Math.random()*glitchCharacters.length)];
		}
		else {
			glitchedHeader += imageHeader.textContent[i];
		}
	};

	imageHeader.textContent = glitchedHeader;
	pageSubtitle.textContent = "A series of catasrophic mistakes";
};