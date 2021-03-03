// Creating a object containing the data for the first racket
let rack2 = {
	// Position x and y
	posX: 1350,
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

function racket2() {
	// Draw player2 racket on the canvas
	noStroke();
	fill(rack2.col);
	rect(rack2.posX, rack2.posY, rack2.w, rack2.h);

	// Create movement using keystrokes: UP and DOWN
	if (keyIsDown(UP_ARROW)) {
		rack2.posY = rack2.posY - rack2.speedY;
	}
	if (keyIsDown(DOWN_ARROW)) {
		rack2.posY = rack2.posY + rack2.speedY;
	}

	// Creating bounderies for the racket
	if (rack2.posY >= 50) {
		rack2.posY -= 5;
	}

	if (rack2.posY <= 650 - rack2.h) {
		rack2.posY += 5;
	}
}
