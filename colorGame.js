const square = document.querySelectorAll('.square');
const rgb = document.querySelector('#rgb');
const msg = document.querySelector('#msg');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const mode = document.querySelectorAll('.mode');

let numSquares = 6;
// this method generates random colors
let colors = generateRandomColors(numSquares); // gives colors(used to be hardcoded rgb)
let pickedColor = pickColor(); // picked color is randomized
rgb.innerHTML = pickedColor; // the span will now have the random rgb


init();

function init(){ // mode button eventlistener
	modeButton();
	squareinit();
 reset();
}

function modeButton(){
	for(let i = 0; i < mode.length; i++){
	mode[i].addEventListener('click', function(){ // easy is [0] hard is [1]
		mode[0].classList.remove('selected');
		mode[1].classList.remove('selected');
		this.classList.add('selected'); // no need for the . in selected
		// how many squares to show 
		this.innerHTML === 'EASY' ? numSquares = 3: numSquares = 6; // same as if statement
		reset();
		});
	}

}
function squareinit(){
	for(let i = 0; i < square.length; i++){ // iterate through the loop
	// square[i].style.backgroundColor = colors[i]; // adds color to squares
	square[i].addEventListener('click', function(){ // must be inside for loop
		let clickedColor = this.style.backgroundColor; // clicked color is the square's background color
		if (pickedColor === clickedColor) { // if they match
			resetButton.innerHTML = 'Play Again';
			msg.innerHTML = 'Correct!';
			changeColor();
		}else{
			this.style.backgroundColor = '#232323';
			msg.innerHTML = 'NOPE!';
			}
		});
	}
}


function changeColor(){ // changes the css color to the winning color
	for(let i = 0; i < square.length; i++){
			square[i].style.backgroundColor = pickedColor;
			h1.style.backgroundColor = pickedColor;
			h1.style.color = 'white';
			msg.style.color = pickedColor;
		}
}
function pickColor(){ // returns random number
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){ // 
	// make an array
	let arr = [];
	// add random nums to an array
	for(let i = 0; i < num; i++){
	// get random color and push into array	
	arr.push(randomColor()); // we gotta push it into the array
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a red from 0 - 255
	let red = Math.floor(Math.random() * 256); // 256 because it rounds down
	// pick a green from 0 - 255
	let green = Math.floor(Math.random() * 256);
	// pick a blue from 0 - 255
	let blue = Math.floor(Math.random() * 256);
	// generating one random color
	return 'rgb(' + red + ', ' + green + ', ' + blue +')'; // gotta have space because css automatically gives spaces for rgb codes

}

function reset(){
	// add new color
	colors = generateRandomColors(numSquares);
	// pick new random number from array
	pickedColor = pickColor();
	// change the rgb display to match picked color
	rgb.innerHTML = pickedColor;
	// change color of squares
	for(let i = 0; i < square.length; i++){ // iterate through the loop
		if(colors[i]){
			square[i].style.display = 'block'; // this will reveal the hidden squares
			square[i].style.backgroundColor = colors[i];
		}else{
			square[i].style.display = 'none';
		}
	}
	// change the bar's color to match too
	// clickedColor = this.style.backgroundColor;
	// if(pickedColor === clickedColor){
	//h1.style.backgroundColor = '#232323';
	// }
	msg.innerHTML = '';
	resetButton.innerHTML = 'NEW COLORs'; /* the s is capatalized from our css */
}

resetButton.addEventListener('click', function(){
	reset();
});


// we are going to make the buttons more efficent because they look similar
// easy.addEventListener('click', function(){
// 	easy.classList.add('selected'); // adds the highlist
// 	hard.classList.remove('selected'); // removes hard's highlight
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares); // when clicked we get new colors but with 3
// 	pickedColor = pickColor();
// 	msg.innerHTML = '';
// 	rgb.innerHTML = pickedColor;
// 	for(let i = 0; i < square.length; i++){
// 		if(colors[i]){
// 		square[i].style.backgroundColor = colors[i];
// 		}else{
// 			square[i].style.display = 'none';
// 		}
// 	}

// });

// hard.addEventListener('click', function(){
// 	easy.classList.remove('selected');
// 	hard.classList.add('selected');
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares); // when clicked we get new colors but with 3
// 	pickedColor = pickColor();
// 	msg.innerHTML = '';
// 	rgb.innerHTML = pickedColor;
// 	for(let i = 0; i < square.length; i++){
// 		square[i].style.backgroundColor = colors[i];
// 		square[i].style.display = 'block';
// 	}

// })
