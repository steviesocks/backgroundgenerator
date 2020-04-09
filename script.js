// defining variables

var h3 = document.querySelector("h3");
var color1 = document.querySelectorAll("input")[0];
var color2 = document.querySelectorAll("input")[1];
// var body = document.getElementById("gradient");
var body = document.querySelector("body");
var direction = "right";
var button = document.querySelector(".direction");
var right = document.getElementById("first");
var left = document.getElementById("last");
var randomBtn = document.querySelector(".button");
var backgroundColor = 
		"linear-gradient(to "
		+ direction
		+ ", " 
		+ color1.value  
		+ ", " 
		+ color2.value 
		+ ")";
var randomHex = "#ffffff";

h3.textContent = "background: " + backgroundColor +";";

// function declarations

function changeBackground() {
	var backgroundColor = 
		"linear-gradient(to "
		+ direction
		+ ", " 
		+ color1.value  
		+ ", " 
		+ color2.value 
		+ ")";
	body.style.background = backgroundColor;
	h3.textContent = "background: " + backgroundColor + ";";
}

function swapDirection() {
	console.log("clicked");
	if (direction === "right") {
		direction = "left";
	} else {
		direction = "right";
	}
	right.classList.toggle("swap");
	left.classList.toggle("swap");
	changeBackground();
}

// randomize function copied from: https://www.paulirish.com/2009/random-hex-color-code-snippets/

function colorPicker() {
	return '#'+Math.floor(Math.random()*16777216).toString(16);
}

function randomize() {
	color1.value = colorPicker();
	color2.value = colorPicker();
	changeBackground();
}


// function colorPicker() {
// 	randomHex = '#'+Math.floor(Math.random()*16777216).toString(16);
// }

// function randomize() {
// 	colorPicker();
// 	console.log(randomHex);
// 	color1.value = randomHex;
// 	colorPicker();
// 	color2.value = randomHex;
// 	changeBackground();
// }

// copyCSS function copied from: https://alligator.io/js/copying-to-clipboard/

function copyCSS() {
	const selection = window.getSelection();
	const range = document.createRange();
	range.selectNodeContents(h3);
	selection.removeAllRanges();
	selection.addRange(range);
	
	try {
	  document.execCommand('copy');
	  selection.removeAllRanges();

	  const original = h3.textContent;
	  h3.textContent = 'Copied!';
	  h3.classList.add('success');

	  setTimeout(() => {
	    h3.textContent = original;
	    h3.classList.remove('success');
 		 }, 1200);
	} catch(e) {
	const errorMsg = document.querySelector('.error-msg');
	errorMsg.classList.add('show');

	setTimeout(() => {
	    errorMsg.classList.remove('show');
		}, 1200);
	}
}

//event listeners
color1.addEventListener("input", changeBackground)

color2.addEventListener("input", changeBackground)

button.addEventListener("click", swapDirection)

randomBtn.addEventListener("click", randomize)

h3.addEventListener("click", copyCSS)