/*jshint esversion: 6 */
function medie() {
  let note = getNote();
  let teza = getTeza();
  if (note == null) get("medie").innerHTML = "EROARE";
  if (teza >  10 || teza < 1) {
    get("medie").innerHTML = "Teza este prea mare sau prea mica";
    return;
  }

  let medie1 = 0;
  for (let i=0; i<note.length; i++) {
    if (note[i] > 10 || note[i] < 1) {
      get("medie").innerHTML = `A ${i+1} nota este prea mare sau prea mica`;
      return;
     }
    medie1+=parseInt(note[i]);
  }
  medie1 = medie1/note.length;
  if (!isNaN(teza)) {
    let medie = (medie1*3 + teza)/4;
    if (isNaN(medie)) {get("medie").innerHTML = "EROARE";}
    else {
      get("medie").innerHTML = "Media ta este : " + (medie.toPrecision(3));
    }
    let higher = false;
    let noteNoi = [0];
    let medieNoua;
    while (!higher) {
      if (noteNoi[noteNoi.length-1] == 10) {
        noteNoi.push(0);
      } else {
        noteNoi[noteNoi.length-1]++;
      }
      higher = newMedie(noteNoi, medie);
    }
    get('notenoi').innerHTML = 'Ti-ar mai trebui urmatoarele note ca sa ai media ' + newMedie(noteNoi, medie, true).toPrecision(3) + ': ' + noteNoi.toString().replace(/[,]/gi, ', ');
  } else {
    get("medie").innerHTML = "Media ta este : " + (medie1.toPrecision(3));
  }
}

function newMedie(x, medie0, value = false) {
  let note = getNote();
  let teza = getTeza();
  let medie1 = 0;
  for (i=0; i<x.length; i++) {
    note.push(x[i]);
  }

  for (i=0; i<note.length; i++) {
    medie1 += parseInt(note[i]);
  }

  let medienew;
  if (isNaN(teza)) {
    medienew = medie1/note.length;
  } else {
    medienew = (medie1/note.length*3 + teza)/4;
  }

  if (!value) {
    if (medienew >= findHigher(medie0)) {
      return true;
    } else {
      return false;
    }
  } else if (value) {
    return medienew;
  }
}

function get(x) {
  return document.getElementById(x);
}

function findHigher(medie) {
  medie = medie.toString().split('.');
  if (medie == 10) {
    return 10;
  } else {
    return parseFloat((parseFloat('0.'+medie[1]) >= 0.5 ? parseInt(medie[0]) + 1 : medie[0]) + '.' + 50);
  }
}

function getNote() {
  let note = get('note').value;
  if (note.match(' ')) {
    return note.split(' ');
  } else if (note.match(', ')) {
    return note.split(', ');
  } else {
    note = note.split('');
    for (i=0; i<note.length-1; i++) {
      if ('' + note[i] + note[i+1] == 10) {
        note.splice(i, 2, 10);
      }
    }
    return note;
  }
}

function getTeza() {
  return parseInt(get('teza').value);
}
