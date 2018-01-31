/*jshint esversion: 6 */
let size = 4;
let isLimitEnabled = true;
let colors = [];
function create() {
  size = prompt("Size: ", 4);
  if (isLimitEnabled) {
    if (size >= 15) {alert("Please use a number smaller than 15"); create();}
  }
  createGame(size);
}

function random() {
  size = prompt("Size: ", 4);
  if (isLimitEnabled) {
    if (size >= 15) {alert("Please use a number smaller than 15"); create();}
  }
  randomize(size);
}

function createGame(size) {
  colors = [];
  document.getElementById("game").innerHTML = "<table id='table'></table>";
  for (let y = 0; y < size; y++) {
    let trY = "tr" + y;
    document.getElementById("table").innerHTML += `<tr id=${trY}></tr>`;
    for (let x = 0; x < size; x++) {
      let color = 255 - Math.floor(200/size/size)*(y*size + x);
      colors.push(color);
      document.getElementById(`${trY}`).innerHTML += `<td class="tile" style="background-color: rgb(${color}, 00, 00); user-select: none;" id="${x}-${y}" onclick="moveTile(${x}, ${y}); checkWin();">${y*size + x + 1}</td>`;
    }
  }
  set(size - 1, size - 1, "empty");
  get(size - 1, size - 1).innerHTML = "";
  get(size - 1, size - 1).style.backgroundColor = `rgb(255, 255, 255)`;
}

function randomize(size) {
  let numbers = [];
  colors = [];
  for (let i = 1; i <= size*size; i++) {
    numbers.push([i, 255 - Math.floor(200/size/size*i)]);
    colors.push(255 - Math.floor(200/size/size*(i-1)));
  }
  let t = 0;
  document.getElementById("game").innerHTML = "<table id='table'></table>";
  for (let y = 0; y < size; y++) {
    let trY = "tr" + y;
    document.getElementById("table").innerHTML += `<tr id=${trY}></tr>`;
    for (let x = 0; x < size; x++) {
      let number = Math.floor(Math.random()*(size*size - t));
      if (numbers[number][0] == size*size) {
        document.getElementById(`${trY}`).innerHTML += `<td class="tile" style="background-color: rgb(${numbers[number][1]}, 00, 00); user-select: none;" id="${x}-${y}" onclick="moveTile(${x}, ${y}); checkWin();">${numbers[number][0]}</td>`;
        set(x, y, "empty");
        get(x, y).style.backgroundColor = `rgb(255, 255, 255)`;
        get(x, y).innerHTML = "";
      } else {
        document.getElementById(`${trY}`).innerHTML += `<td class="tile" style="background-color: rgb(${numbers[number][1]}, 00, 00); user-select: none;" id="${x}-${y}" onclick="moveTile(${x}, ${y}); checkWin();">${numbers[number][0]}</td>`;
        numbers.splice(number, 1);
      }
      t++;
    }
  }
}

function checkWin() {
  /*let won = true;
  for (x=0; x<size; x++) {
    for (y=0; y<size; y++) {
      if (x==size-1 && y==size-1) {
        if (get(x, y).innerHTML!="") {
          won = false;
        }
      } else if (get(x, y).innerHTML != y*size + x + 1) {
        won = false;
      }
    }
  }
  if (won) {
    alert("Congratulations, you won!");
  }*/
}
function moveTile(x, y) {
  if (x === 0 && y === 0) {
    if (getType(x+1, y) == "empty") {
      moveRight(x, y);
    } else if (getType(x, y+1) == "empty") {
      moveDown(x, y);
    }
  } else if (x == size - 1 && y === 0) {
    if (getType(x-1, y) == "empty") {
      moveLeft(x, y);
    } else if (getType(x, y+1) == "empty") {
      moveDown(x, y);
    }
  } else if (x == size - 1 && y == size - 1) {
    if (getType(x-1, y) == "empty") {
      moveLeft(x, y);
    } else if (getType(x, y-1) == "empty") {
      moveUp(x, y);
    }
  } else if (x === 0 && y == size - 1) {
    if (getType(x+1, y) == "empty") {
      moveRight(x, y);
    } else if (getType(x, y-1) == "empty") {
      moveUp(x, y);
    }
  } else if (y === 0) {
    if (getType(x+1, y) == "empty") {
      moveRight(x, y);
    } else if (getType(x-1, y) == "empty") {
      moveLeft(x, y);
    } else if (getType(x, y+1) == "empty") {
      moveDown(x, y);
    }
  } else if (x == size-1) {
    if (getType(x, y+1) == "empty") {
      moveDown(x, y);
    } else if (getType(x, y-1) == "empty") {
      moveUp(x, y);
    } else if (getType(x-1, y) == "empty") {
      moveLeft(x, y);
    }
  } else if (y == size-1) {
    if (getType(x-1, y) == "empty") {
      moveLeft(x, y);
    } else if (getType(x+1, y) == "empty") {
      moveRight(x, y);
    } else if (getType(x, y-1) == "empty") {
      moveUp(x, y);
    }
  } else if (x === 0) {
    if (getType(x, y+1) == "empty") {
      moveDown(x, y);
    } else if (getType(x, y-1) == "empty") {
      moveUp(x, y);
    } else if (getType(x+1, y) == "empty") {
      moveRight(x, y);
    }
  } else {
    if (getType(x, y+1) == "empty") {
      moveDown(x, y);
    } else if (getType(x, y-1) == "empty") {
      moveUp(x, y);
    } else if (getType(x-1, y) == "empty") {
      moveLeft(x, y);
    } else if (getType(x+1, y) == "empty") {
      moveRight(x, y);
    }
  }
}

//miscellaneous
function moveUp (x, y) {
  let newTile = get(x, y-1);
  move(newTile, x, y, 'y-1');
}

function moveDown (x, y) {
  let newTile = get(x, y+1);
  move(newTile, x, y, 'y+1');
}

function moveLeft (x, y) {
  let newTile = get(x-1, y);
  move(newTile, x, y, 'x-1');
}

function moveRight (x, y) {
  let newTile = get(x+1, y);
  move(newTile, x, y, 'x+1');
}

function move(newTile, x, y, direction) {
  let tile = get(x, y);
  let number = tile.innerHTML;
  tile.style.transition = '0.1s';
  let time = tile.style.transition.split("");
  time.pop();
  time = parseFloat(time.join(""));

  switch (direction) {
    case 'x-1':
      tile.style.transform = 'translateX(-100%)';
      break;
    case 'y+1':
      tile.style.transform = 'translateY(100%)';
      break;
    case 'y-1':
      tile.style.transform = 'translateY(-100%)';
      break;
    case 'x+1':
      tile.style.transform = 'translateX( 100%)';
  }

  setTimeout(function() {
    newTile.setAttribute("class", "tile");
    tile.setAttribute("class", "empty");
    tile.style.transform = 'none';
    newTile.innerHTML = number;
    tile.style.backgroundColor = `rgb(${colors[number - 1]}, 0, 0)`;
    newTile.style.backgroundColor = `rgb(${colors[number - 1]}, 0, 0)`;
    tile.innerHTML = "";
    tile.style.backgroundColor = `rgb(255, 255, 255)`;
  }, time);
}
function get(x,y) {
  return document.getElementById(x + "-" + y);
}

function getType(x,y) {
  return get(x,y).getAttribute("class");
}

function set(x,y,value) {
  get(x,y).setAttribute("class", value);
}

function getStyle(x, y, value) {
  return $("#"+x+"-"+y).css(value);
}

function whiteBlack() {
  if (getStyle2('background-color') == "rgb(255, 255, 255)") {
    document.getElementById('body').style.backgroundColor = 'black';
  } else {
    document.getElementById('body').style.backgroundColor = 'white';
  }
}

function disableLimit() {
  isLimitEnabled = false;
}

window.onload = function() {
  randomize(4);
};
