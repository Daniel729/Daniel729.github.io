/*jshint esversion: 6 */
window.onload = function() {
  get("body").style.height = window.innerHeight;
  get("body").style.width = window.innerWidth;
};

function medie() {
  let note = get("note").value.split(" ");
  let teza = parseInt(get("teza").value);
  if (note == null) get("medie").innerHTML = "EROARE";
  if (teza >  10 || teza < 1) {get("medie").innerHTML = "Teza este prea mare sau prea mica"; return;}
  let medie1 = 0;
  for (let i=0; i<note.length; i++) {
    if (note[i] > 10 || note[i] < 1) {get("medie").innerHTML = `A ${i+1} nota este prea mare sau prea mica`; return;}
    medie1+=parseInt(note[i]);
  }
  medie1 = medie1/note.length;
  if (!isNaN(teza)) {
    let medie = (medie1*3 + teza)/4;
    if (isNaN(medie)) {get("medie").innerHTML = "EROARE";}
    else {
    get("medie").innerHTML = "Media ta este : " + (medie.toPrecision(3));
    }
  } else {
    get("medie").innerHTML = "Media ta este : " + (medie1.toPrecision(3));
  }
}

function ptSerban() {
  get("body").style.backgroundImage = "url(tiger.jpg)";
  get("body").style.backgroundSize = 'cover';
}
function get(x) {
  return document.getElementById(x);
}
