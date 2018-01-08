/*jshint esversion: 6 */
/*function randomize() {
  for (i=0; i < 1000; i++) {
    let q = Math.floor(Math.random() * 4);
    let empty = document.getElementsByClassName("empty")[0];
    let x = empty.id.split("")[0];
    let y = empty.id.split("")[2];

    if (x == 0 && y == 0) {
      if (q === 0) {
        ranRight(x, y);
      } else if (q == 1) {
        ranDown (x, y);
      }}
    /*} else if (x == size - 1 && y === 0) {
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
}


//miscellaneous
function ranUp(x, y) {
  let newTile = get(x, y);
  let tile = get(x, y-1);
  let number = tile.innerHTML;
  newTile.style.backgroundColor = getStyle(x, y-1, "background-color");
  newTile.innerHTML = number;
  tile.innerHTML = "";
  set(x, y-1, "empty");
  set(x, y, "tile");
}

function ranLeft (x, y) {
  let newTile = get(x, y);
  let tile = get(x-1, y);
  let number = tile.innerHTML;
  newTile.style.backgroundColor = getStyle(x-1, y, "background-color");
  newTile.innerHTML = number;
  tile.innerHTML = "";
  set(x-1, y, "empty");
  set(x, y, "tile");
}

function ranDown (x, y) {
  let newTile = get(x, y);
  let tile = get(x, y+1);
  let number = tile.innerHTML;
  newTile.style.backgroundColor = getStyle(x, y+1, "background-color");
  newTile.innerHTML = number;
  tile.innerHTML = "";
  set(x, y+1, "empty");
  set(x, y, "tile");
}

function ranRight (x, y) {
  let newTile = get(x, y);
  let tile = get(x+1, y);
  let number = tile.innerHTML;
  newTile.style.backgroundColor = getStyle(x+1, y, "background-color");
  newTile.innerHTML = number;
  tile.innerHTML = "";
  set(x+1, y, "empty");
  set(x, y, "tile");
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
*/
