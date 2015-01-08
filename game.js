
var canvas = document.querySelector('canvas');
var timer = document.getElementById("timer");
var timeRemaining = 60;
var startWindow = document.getElementById("startWindow");
var startButton = document.getElementById("startButton");
var newGameWindow = document.getElementById("newGameWindow");
var newGameButton = document.getElementById("newGameButton");

var targetWidth;
var targetHeight;

var showScore = document.getElementById("score");
var score = 0;

var i = 0;

var generateRectangle = function(){

	targetWidth = Math.round((Math.random() * (900 - 420) + 420)/10) *10;
	targetHeight = Math.round((Math.random() * (500 - 220) + 220)/10) *10;

	canvas.style.width = targetWidth + "px";
	canvas.style.height =  targetHeight + "px";

	var rectangleColors = ["#19B5FE", "#1F3A93", "#9A12B3", "#663399", "#CF000F", "#2574A9", "#00B16A", "#96281B", "#F62459", "#D2527F", "#27AE60"]; 
	canvas.style.background = rectangleColors[i];
	i = (i+1)%10;
};

var game = function() {
	
	startWindow.style.display = "none";

	generateRectangle();

	showScore.style.display = "block";
	timer.style.display = "block";

	showScore.innerHTML = "Score: " + score;
	timer.innerHTML = "Time Remaining: " + timeRemaining + "s";


	window.onresize = function() {
		if((window.innerWidth < targetWidth + 4) && (window.innerWidth > targetWidth - 4)
			&& (window.innerHeight < targetHeight + 4) && (window.innerHeight > targetHeight - 4))
		{
			score++;
			showScore.innerHTML = "Score: " + score;
			generateRectangle();
		}
	};

	var displayTime = setInterval(function () {
    	timeRemaining--;
    	timer.innerHTML = "Time Remaining: " + timeRemaining + "s"; 

    	if(timeRemaining == 0){
    		clearInterval(displayTime);
    		
    		var wrapper = document.getElementById("wrapper");
    		wrapper.remove();

    		document.body.appendChild(newGameWindow);
    		document.getElementById("finalScore").innerHTML = "Your score: " + score;
    		newGameWindow.style.display = "block";
    	}
	}, 1000);
};

newGameButton.addEventListener("click", function(){
	window.location.reload();
});

startButton.addEventListener("click", game);


