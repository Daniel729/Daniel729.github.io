/*jshint esversion: 6 */

let cv, ctx, h, w, body, mainY, mainX, timerJump, squares, numberTriangles, universalTimer, move, touch;

window.onload = function() {
  newGame();
  setInterval(updateCanvas, 15);
};
function newGame() {
  cv = document.getElementById('canvas');
  ctx = cv.getContext('2d');
  body = document.getElementById('body');
  cv.width = window.innerWidth - 18;
  h = cv.height;
  w = cv.width;
  mainY = 315;
  mainX = 275;
  timerJump = 0;
  squares = [];
  numberTriangles = 120;
  universalTimer = 0;
  move = false;
  touch = true;
  cv.addEventListener('click', function() {
    if (timerJump == 0) {
      move = true;
    }
  });
  body.addEventListener('keydown', e => {
    if (e.keyCode == 32 && timerJump == 0) {
      move = true;
    }
  });
}

function updateCanvas() {
  ctx.clearRect(0, 0, w, h);
  if (move && timerJump <= 50) {
    mainY-=4;
    timerJump++;
  } else if (timerJump > 0) {
    mainY+=4;
    timerJump--;
  }
  if (timerJump == 50) move = false;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 375 , w, 25);
  ctx.fillStyle = 'yellow';
  ctx.fillRect(mainX, mainY, 60, 60);
  if (universalTimer%numberTriangles == 0) squares.push([true, 0]);
  for (i=0; i<squares.length; i++) {
    ctx.fillStyle = 'red';
    /*ctx.beginPath();
    ctx.moveTo(w - squares[i][1], 375);
    ctx.lineTo(w - squares[i][1] + 45, 300);
    ctx.lineTo(w - squares[i][1] + 90, 375);
    ctx.fill();*/
    ctx.fillRect(w-squares[i][1], 300, 75, 75);
    squares[i][1]+=4;
    if (squares[0][1] >= w + 90) {
      squares.shift();
    }
    if (touch && touching(i)) {
      alert('You lost!');
      newGame();
    }
  }
  universalTimer++;
  document.getElementById('test').innerHTML = squares;
}

function touching(y) {
  return mainX < w - squares[y][1] + 75 && mainX + 60  > w - squares[y][1] && mainY < 300 + 90 && mainY + 60 > 300;
}
function moveSquare() {
  updateCanvas();
}
