/*jshint esversion: 6 */

let cv = document.getElementById('canvas');
let ctx = cv.getContext('2d');
let size;
let player;
let board;

function newBoard() {
  size = ctx.width;
  player = 1;
  board =["", "", "", "", "", "", "", "", ""];
  cv.style.height = '400px';
  cv.style.width = '400px';
  cv.height = 400;
  cv.width = 400;
  update();
}

function update() {
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.fillStyle = 'grey';
  ctx.fillRect(cv.width/3, 0, cv.width/40, cv.height);
  ctx.fillRect(cv.width/3*2, 0, cv.width/40, cv.height);
  ctx.fillRect(0, cv.height/3, cv.width, cv.height/40);
  ctx.fillRect(0, cv.height/3*2, cv.width, cv.height/40);
  ctx.font = cv.width/3 + "px sans serif";
  for (x=0; x<3; x++) {
    for (y=0; y<3; y++) {
      let width;
      if (x == 0) width = 20;
      else if (x == 1) width = cv.width/3 + 22;
      else width = cv.width/3*2 + 18;
      if (board[x + y*3] == "O") {
        ctx.fillStyle = "red";
        ctx.fillText("O", width, cv.height/3 * (y+1) - 10);
      } else if (board[x + y*3] == "X") {
        ctx.fillStyle = "blue";
        ctx.fillText("X", width, cv.height/3 * (y+1) - 10);
      }
    }
  }
  checkWin();
}

function draw(x, y) {
  if (board[x+y*3] === "") {
    if (player == 0) {
      board[x + y*3] = "O";
      player = 1;
    }
    else {
      board[x + y*3] = "X";
      player = 0;
    }
  }
  update();
}

function checkWin() {
  ctx.fillStyle = "purple";
  if (board[0] == board[1] && board[1] == board[2] && win(0,1,2)) {
    ctx.fillRect(0, cv.height/6, cv.width, 10);
  } else if (board[3] == board[4] && board[4] == board[5] && win(3,4,5)) {
    ctx.fillRect(0, cv.height/6*3, cv.width, 10);
  } else if (board[6] == board[7] && board[7] == board[8] && win(6,7,8)) {
    ctx.fillRect(0, cv.height/6*5, cv.width, 10);
  } else if (board[0] == board[3] && board[3] == board[6] && win(0,3,6)) {
    ctx.fillRect(cv.width/6, 0, 10, cv.height);
  } else if (board[1] == board[4] && board[4] == board[7] && win(1,4,7)) {
    ctx.fillRect(cv.width/6*3, 0, 10, cv.height);
  } else if (board[2] == board[5] && board[5] == board[8] && win(2,5,8)) {
    ctx.fillRect(cv.width/6*5, 0, 10, cv.height);
  } else if (board[0] == board[4] && board[4] == board[8] && win(0,4,8)) {
    ctx.rotate(45*Math.PI/180);
    ctx.fillRect(0, 0, Math.SQRT2*cv.width, 10);
  } else if (board[2] == board[4] && board[4] == board[6] && win(2,4,6)) {
    ctx.translate(cv.width, 0);
    ctx.rotate(135*Math.PI/180);
    ctx.fillRect(0, 0, Math.SQRT2*cv.width, 10);
  }
  ctx.rotate(0);
}

function win(x, y, z) {
  return board[x] != "" && board[y] != "" && board[z] != "";
}

cv.addEventListener('click', (e)=> {
  const pos = {
    x: e.clientX,
    y: e.clientY
  };
  if (pos.y < cv.height/3) {
    if (pos.x < cv.width/3) {
      draw(0, 0);
    } else if (pos.x >= cv.width/3 && pos.x <= cv.width/3*2) {
      draw(1, 0);
    } else {
      draw(2, 0);
    }
  } else if (pos.y >= cv.height/3 && pos.y <= cv.height/3*2) {
    if (pos.x < cv.width/3) {
      draw(0, 1);
    } else if (pos.x >= cv.width/3 && pos.x <= cv.width/3*2) {
      draw(1, 1);
    } else {
      draw(2, 1);
    }
  } else {
    if (pos.x < cv.width/3) {
      draw(0, 2);
    } else if (pos.x >= cv.width/3 && pos.x <= cv.width/3*2) {
      draw(1, 2);
    } else {
      draw(2, 2);
    }
  }
});
