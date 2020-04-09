// defining variables

var h3 = document.querySelector("h3");
var color1 = document.querySelectorAll("input")[0];
var color2 = document.querySelectorAll("input")[1];
// var body = document.getElementById("gradient");
var body = document.querySelector("body");

// 

function changeBackground() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value  
		+ ", " 
		+ color2.value 
		+ ")";
	h3.textContent = 
		"background: linear-gradient(to right, "
		+ color1.value 
		+ ", " 
		+ color2.value
		+ ");";
}



// listener events
color1.addEventListener("input", changeBackground)

color2.addEventListener("input", changeBackground)
