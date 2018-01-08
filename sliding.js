/*jshint esversion: 6 */
//create game
let size = 4;
function create() {
  size = prompt("Size: ", 4);
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

function randomize() {
  let i = 0;
  function rand() {
    setTimeout(function () {
      let q = Math.floor(Math.random() * 4);
      let empty = document.getElementsByClassName("empty")[0];
      let rect = empty.getBoundingClientRect();
      let center = [rect.top+30, rect.left+30];

      if (q == 0) {click(center[0]-60, center[1]);}
      else if (q == 1) {click(center[0]+60, center[1]);}
      else if (q == 2) {click(center[0], center[1]-60);}
      else if (q == 3) {click(center[0], center[1]+60);}

      i++;
      if (i < 750) {rand();}
    }, 1);
  }
  rand();
}

function moveTile(x, y) {
  if (x == 0 && y == 0) {
    if (getType(x+1, y) == "empty") {
      moveRight(x, y);
    } else if (getType(x, y+1) == "empty") {
      moveDown(x, y);
    }
  } else if (x == size - 1 && y == 0) {
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
  } else if (x == 0 && y == size - 1) {
    if (getType(x+1, y) == "empty") {
      moveRight(x, y);
    } else if (getType(x, y-1) == "empty") {
      moveUp(x, y);
    }
  } else if (y == 0) {
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
  } else if (x == 0) {
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

function get2(x) {
  return document.getElementById(x);
}

function whiteBlack() {
  if (getStyle2('background-color') == "rgb(255, 255, 255)") {
    document.getElementById('body').style.backgroundColor = 'black';
  } else {
    document.getElementById('body').style.backgroundColor = 'white';
  }
}

function click(x,y){
    var ev = document.createEvent("MouseEvent");
    var el = document.elementFromPoint(x,y);
    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        x, y, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    el.dispatchEvent(ev);
}

window.onload = createGame(4);
