// Creating a object for the ball´s data
let ball = {
  // Position for x and y
  posX: 500,
  posY: 300,
  // Speed x and y
  speedX: 10,
  speedY: 9.5,
  // Direction x and y
  dirX: 1,
  dirY: 1,
  // Radius and color
  rad: 25,
  col: "#ff006e",
};

function gameball() {
  // Drawing the ball
  fill(ball.col);
  ellipse(ball.posX, ball.posY, ball.rad, ball.rad);

  // Updating the postion of the ball
  ball.posX = ball.posX + ball.speedX * ball.dirX;
  ball.posY = ball.posY + ball.speedY * ball.dirY;

  // Creating the boundries of the canvas, and making the ball bounce
  if (ball.posY > height - ball.rad || ball.posY < ball.rad) {
    ball.dirY *= -1;
  }

  // Adding score1 if the ball hits player2 side
  if (ball.posX + ball.rad >= 1400) {
    ball.posX -= 500;
    ball.posY -= 300;
    ball.dirX *= -1;
    score2.point++;
  }

  // Adding score2 if the ball hits player1 side
  if (ball.posX === 50 - ball.rad || ball.posX <= ball.rad) {
    ball.posX += 500;
    ball.posY += 300;
    ball.dirX *= -1;
    score1.point++;
  }

  // Bouncing when touching the Racket 1 & 2 and score
  if (
    ball.posX + ball.rad > rack1.posX &&
    ball.posX < rack1.posX + rack1.w + ball.rad &&
    ball.posY - ball.rad >= rack1.posY
  ) {
    ball.dirX *= -1;
    ball.dirY *= -1;
  }

  if (
    ball.posX + ball.rad > rack2.posX &&
    ball.posY + ball.rad > rack2.posY &&
    ball.posY - ball.rad < rack2.posY + rack2.h
  ) {
    ball.dirX *= -1;
    ball.dirY *= -1;
  }
}
