var numBoxes =6;
var colors = generateColors(numBoxes); // color variable has the full color table which be returned by generateColors function
var box = document.querySelectorAll(".box");
var colorWins = colorWins(); // definition of each turn winning color
var headercolor = document.getElementById("headercolor");
var message = document.getElementById("message");//otherwise command {var message = document.querySelector("#message");}
var newColors = document.getElementById("newColors");
var resetButton = document.querySelector("#resetButton");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//this function refers to easy game play mode where, number of boxes is 3...
//generates random colors through math.random 
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numBoxes = 3;
	colors = generateColors(numBoxes);
	var random = Math.floor(Math.random() * colors.length);
 	colorWins = colors[random];
	headercolor.textContent = colorWins;

	 for (var i = 0; i < 6 ; i++) {
		
		if (i<colors.length) {
	 		box[i].style.backgroundColor = colors[i];
	 	}else{
	 		box[i].style.display = "none";
	 	}
	}
});

//this function refers to hard game play mode where, number of boxes is 6...
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numBoxes = 6;
	colors = generateColors(numBoxes);
	var random = Math.floor(Math.random() * colors.length);
 	colorWins = colors[random];
 	console.log(colorWins);
	headercolor.textContent = colorWins;

	 for (var i = 0; i < colors.length ; i++) {
	 		box[i].style.backgroundColor = colors[i];
	 		box[i].style.display = "block";
	 	}
});

//through generate function which generates new colors, we can reset the color of boxes
//with a simple click into "New Colors" button
resetButton.addEventListener("click", function(){

	colors = generateColors(numBoxes);
	var random = Math.floor(Math.random() * colors.length);
 	colorWins = colors[random];
	headercolor.textContent = colorWins;
	console.log(colorWins);
	console.log(colors);
	 for (var i = 0; i < colors.length ; i++) {
	
	 box[i].style.backgroundColor = colors[i];
	 }
});

headercolor.textContent = colorWins; //change of header for color which searching for

//into for loop we checked if the color of clicked box is equal to winning color
//at the same time through .textContent we show up if player wins or has to continue searching
for (var i = 0; i < colors.length ; i++) {
	
	box[i].style.backgroundColor = colors[i];

	box[i].addEventListener("click",function(){
	var clickedBoxColor = this.style.backgroundColor;

	if(clickedBoxColor == colorWins){
		this.style.backgroundColor = colorWins;
		message.textContent = "Win";
		changeColors();
	}
	else{
		this.style.backgroundColor = '#232323';
		message.textContent = "Try Again";
	}

	});

}

//as i said, this function generates through math.random the rgb colors and returns the...
//...color table if we call it
function generateColors(num){
	var colors = [];
	for (var i = 0; i<num ; i++) {
		var r = Math.floor(Math.random()*256);          
		var g = Math.floor(Math.random()*256);      
		var b = Math.floor(Math.random()*256);
	 	colors.push('rgb(' + r + ', ' + g + ', ' + b + ')');
	}
	return colors;
}

//if player find the winning color, all boxes have this color and round ends
function changeColors(){
	for (var i = 0; i < colors.length ; i++) {
		box[i].style.backgroundColor = colorWins;
		}
}

//this function change every round the winning color
function colorWins(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}