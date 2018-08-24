// This was my first try at a real js script
// so all I was really concerned with was
// for the code to actually work.

// I guess the init() function should be shortened 
// and split into other functions and
// the var should maybe be declared in
// something like a 'game' object but hey
// this works.


var numSquares=6;
var colors = []
var colorToGuess;
var colorDisplay = document.querySelector("#colorToGuess");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var restartButton = document.querySelector("#restartButton");
var modeButtons = document.querySelectorAll(".mode")


init();


function init() {
	//mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ? numSquares=3: numSquares=6;
			restart()
		});
	};
	
	restartButton.addEventListener("click", restart);
	// add click listeners to squares
	for (var i=0; i<squares.length; i++) {
		squares[i].addEventListener("click",function(){
			if (this.style.backgroundColor===colorToGuess) {
				messageDisplay.textContent="Correct!";
				changeColors(this.style.backgroundColor);
				restartButton.textContent="Play again?"
			} else {
				this.style.backgroundColor=document.body.style.backgroundColor;
				messageDisplay.textContent="TRY AGAIN"
			}
		});
	}

	restart();
}

function restart() {
	restartButton.textContent="New colors";
	colors = getRandomRGB(numSquares);
	colorToGuess = colors[randomColorIndex()];
	colorDisplay.textContent = colorToGuess;
	for (var i=0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		} else {
			squares[i].style.display = "none";
		}
	};
	h1.style.backgroundColor="rgb(51, 153, 255)";
	messageDisplay.textContent=""
}

function randomColor() {
	var r = Math.floor(Math.random()*256);          // Random between 0-255
	var g = Math.floor(Math.random()*256);          // Random between 0-255
	var b = Math.floor(Math.random()*256);          // Random between 0-255
	var rgb = "rgb(" + r + ", " + g + ", " + b +")";// Collect all to a string
	return rgb;
}

function getRandomRGB(number) {
	arr=[]
	for (var i=0; i<number; i++) {
		arr.push(randomColor())
	}
	return arr;  									//return arr
}

function randomColorIndex() {
	var i=Math.floor(Math.random()*colors.length);
	return i;
}

function changeColors(color) {
	h1.style.backgroundColor=color;
	for (var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor=color;
	}
}
