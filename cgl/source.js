/*jshint esversion: 6 */
let cv, ctx, board, h, w, interval, cellSize;

function newGame() {
  cv = document.getElementById('canvas');
  ctx = cv.getContext('2d');
  h = cv.height;
  w = cv.width;
  cellSize = 8;
  board = [];
  let mouseclick = null;
  for (let y=0; y<w/cellSize; y++) {
    board.push([]);
    for (let x=0; x<w/cellSize; x++) {
      board[y].push(0);
    }
  }

  cv.addEventListener('mousedown', e => {
    const x = Math.floor(e.clientX/cellSize)-1;
    const y = Math.floor(e.clientY/cellSize)-1;
    if (!board[y][x]) {
      mouseclick = 1;
    } else if (board[y][x] == 1) {
      mouseclick = 0;
    }
    console.log(x + " " + y);
  });

  cv.addEventListener('mouseup', e => {
    mouseclick = null;
  });

  cv.onmousemove = e => {
    if (mouseclick === null) return;
    const x = Math.floor(e.clientX/cellSize)-1;
    const y = Math.floor(e.clientY/cellSize)-1;
    if (mouseclick) {
      board[y][x] = 1;
      ctx.fillStyle = 'black';
    } else if (!mouseclick) {
      board[y][x] = 0;
      ctx.fillStyle = 'white';
    }
    ctx.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
  };

  window.addEventListener('keypress', e => {
    if (e.keyCode == 32) {
      startStop();
    }
  });
}

function updateCanvas() {
  let newBoard = JSON.parse(JSON.stringify(board));
  for (let y=1; y<board.length-1; y++) {
    for (let x=1; x<board[y].length-1; x++) {
      let cells = howMany(x, y, newBoard);
      if (newBoard[y][x] === 1) {
        board[y][x] = cells == 2 || cells == 3 ? 1 : 0;
      } else {
        board[y][x] = cells == 3 ? 1 : 0;
      }
      drawCanvas(y, x);
    }
  }
}

function drawCanvas(y, x) {
  if (board[y][x] === 1) {
    ctx.fillStyle = 'black';
  } else if (board[y][x] === 0) {
    ctx.fillStyle = 'white';
  }
  ctx.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
}

function startStop() {
  let button = document.getElementById('startStop');
  if (button.innerHTML == 'Stop') {
    button.innerHTML = 'Start';
    clearInterval(interval);
  } else if (button.innerHTML == 'Start') {
    button.innerHTML = 'Stop';
    interval = setInterval(updateCanvas, 5);
  }
}

function howMany(y, x, b) {
  let num = 0;
  let pos = [b[x+1][y],
             b[x-1][y],
             b[x][y+1],
             b[x][y-1],
             b[x-1][y-1],
             b[x-1][y+1],
             b[x+1][y-1],
             b[x+1][y+1]];
  for (let i=0; i<pos.length; i++) {
    if (pos[i]) {
      num++;
    }
  }
  return num;
}
