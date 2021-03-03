// Creating a object containing the data for the first racket
let rack1 = {
	// Position x and y
	posX: 25,
	posY: 250,
	// Size of width and height
	w: 30,
	h: 175,
	// Speed of x and y
	speedX: 5,
	speedY: 5,
	// Color
	col: '#8D99AE'
};

function racket1() {
	// Draw player2 racket on the canvas
	noStroke();
	fill(rack1.col);
	rect(rack1.posX, rack1.posY, rack1.w, rack1.h);

	// Create movement using keystrokes: w and y
	if (keyIsDown(87)) {
		rack1.posY = rack1.posY - rack1.speedY;
	}
	if (keyIsDown(83)) {
		rack1.posY = rack1.posY + rack1.speedY;
	}

	// Creating bounderies for the racket
	if (rack1.posY >= 50) {
		rack1.posY -= 5;
	}

	if (rack1.posY <= 650 - rack1.h) {
		rack1.posY += 5;
	}
}
