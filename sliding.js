/*jshint esversion: 6 */
let size = 4;

function create() {
  size = prompt("Size: ", 4);
  if (size >= 15) {alert("Please use a number smaller than 15"); create();}
  createGame(size);
}

function createGame(size) {
  document.getElementById("game").innerHTML = "<table id='table'></table>";
  for (let y = 0; y < size; y++) {
    let trY = "tr" + y;
    document.getElementById("table").innerHTML += `<tr id=${trY}></tr>`;
    for (let x = 0; x < size; x++) {
      let color = 255 - Math.floor(200/size/size)*(y*size + x + 1);
      document.getElementById(`${trY}`).innerHTML += `<td class="tile" style="background-color: rgb(${color}, 00, 00); user-select: none;" id="${x}-${y}" onclick="moveTile(${x}, ${y})">${y*size + x + 1}</td>`;
    }
  }
  set(size - 1, size - 1, "empty");
  get(size - 1, size - 1).innerHTML = "";
}

function randomize(size) {
  size = prompt("Size: ", 4);
  if (size >= 15) {alert("Please use a number smaller than 15"); randomize();}
  let numbers = [];
  for (i = 1; i <= size*size; i++) {numbers.push([i, 255 - Math.floor(200/size/size*i)]);}
  let colorx;
  let t = 0;
  document.getElementById("game").innerHTML = "<table id='table'></table>";
  for (let y = 0; y < size; y++) {
    let trY = "tr" + y;
    document.getElementById("table").innerHTML += `<tr id=${trY}></tr>`;
    for (let x = 0; x < size; x++) {
      let number = Math.floor(Math.random()*(size*size - t));
      if (numbers[number][0] == size*size) {
        document.getElementById(`${trY}`).innerHTML += `<td class="tile" style="background-color: rgb(${numbers[number][1]}, 00, 00); user-select: none;" id="${x}-${y}" onclick="moveTile(${x}, ${y})">${numbers[number][0]}</td>`;
        set(x, y, "empty");
        get(x, y).innerHTML = "";
      } else {
        document.getElementById(`${trY}`).innerHTML += `<td class="tile" style="background-color: rgb(${numbers[number][1]}, 00, 00); user-select: none;" id="${x}-${y}" onclick="moveTile(${x}, ${y})">${numbers[number][0]}</td>`;
        numbers.splice(number, 1);
      }
      t++;
    }
  }
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
function ranUp(x, y) {
  let newTile = get(x, y);
  let Tile = get(x, y-1);
  let number = tile.innerHTML;
  newTile.style.backgroundColor = getStyle(x, y-1, "background-color");
  newTile.innerHTML = number;
  tile.innerHTML = "";
  set(x, y-1, "empty");
  set(x, y, "tile");
}
function moveUp (x, y) {
  let tile = get(x, y);
  let newTile = get(x, y-1);
  let number = tile.innerHTML;
  newTile.style.backgroundColor = getStyle(x, y, "background-color");
  newTile.innerHTML = number;
  tile.innerHTML = "";
  set(x, y, "empty");
  set(x, y-1, "tile");
}

function moveDown (x, y) {
  let tile = get(x, y);
  let newTile = get(x, y+1);
  let number = tile.innerHTML;
  newTile.style.backgroundColor = getStyle(x, y, "background-color");
  newTile.innerHTML = number;
  tile.innerHTML = "";
  set(x, y, "empty");
  set(x, y+1, "tile");
}

function moveLeft (x, y) {
  let tile = get(x, y);
  let newTile = get(x-1, y);
  let number = tile.innerHTML;
  newTile.style.backgroundColor = getStyle(x, y, "background-color");
  newTile.innerHTML = number;
  tile.innerHTML = "";
  set(x, y, "empty");
  set(x-1, y, "tile");
}

function moveRight (x, y) {
  let tile = get(x, y);
  let newTile = get(x+1, y);
  let number = tile.innerHTML;
  newTile.style.backgroundColor = getStyle(x, y, "background-color");
  newTile.innerHTML = number;
  tile.innerHTML = "";
  set(x, y, "empty");
  set(x+1, y, "tile");
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

function getStyle2(value) {
  return $("#body").css(value);
}

function whiteBlack() {
  if (getStyle2('background-color') == "rgb(255, 255, 255)") {
    document.getElementById('body').style.backgroundColor = 'black';
  } else {
    document.getElementById('body').style.backgroundColor = 'white';
  }
}

window.onload = function() {
  createGame(4);
};
