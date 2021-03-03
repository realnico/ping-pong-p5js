// Creating variables
let bgColor = '#EDF2F4';
var y;

// Setting up the canvas
function setup() {
	createCanvas(1400, 700);
	frameRate(50);
	ellipseMode(RADIUS);
}

function draw() {
	// Adding the background color
	background(bgColor);
	let y = 0;

	// Adding functions: rackets, gameball and score
	racket2();
	racket1();
	gameball();
	score();

	// Drawing a mid-lane
	fill('#8D99AE');
	noStroke();
	while (y <= height) {
		ellipse(700, y, 5, 5);
		y = y + 20;
	}

	// Creating end screen
	stroke(0);
	if (score1.point === 7) {
		endScreen1();
	} else if (score2.point === 7) {
		endScreen2();
	}

	// Print the balls x and y-position in the console
	print(console.log(ball.posX, ball.posY));
}
