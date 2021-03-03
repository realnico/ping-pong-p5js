function endScreen1() {
	//Remove and add-back canvas
	noCanvas();
	createCanvas(1400, 700);
	translate(width / 2, height / 2);
	
	// Winning text
	textSize(135);
	strokeWeight(3);
	fill('#46eb34');
	text(score1.name + ' won!', -425, -60);
	textSize(35);
	fill('#00ff95');
	text('Congratulations!', -145, 30);
	noLoop();
}

function endScreen2() {
	//Remove and add-back canvas
	noCanvas();
	createCanvas(1400, 700);
	translate(width / 2, height / 2);

	// Winning text
	textSize(135);
	strokeWeight(3);
	fill('#46eb34');
	text(score2.name + ' won!', -425, -60);
	textSize(35);
	fill('#00ff95');
	text('Congratulations!', -145, 30);
	noLoop();
}
