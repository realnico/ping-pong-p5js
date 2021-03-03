// Creating objects for score
let scoreStyle = {
	col: '#858585',
	size: 40
};

let score1 = {
	point: 0,
	name: 'Player 1'
};

let score2 = {
	point: 0,
	name: 'Player 2'
};

function score() {
	// Change the style of the score
	textSize(scoreStyle.size);
	fill(scoreStyle.col);
	textFont('Trebuchet MS');

	// Drawing the score for each player
	text(score1.point, windowWidth / 2 + 50, 50);
	text(score2.point, windowWidth / 2 - 72.5, 50);

	// Drawing the name for each player
	textSize(20);
	text(score1.name, windowWidth / 2 + 600, 42.5);
	text(score2.name, windowWidth / 2 - 675, 42.5);
}
