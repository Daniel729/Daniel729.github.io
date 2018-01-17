/*jshint esversion: 6 */
window.onload = function() {
  get("body").style.height = window.innerHeight;
  get("body").style.width = window.innerWidth;
};
function medie() {
  let note = get("note").value.split(" ");
  if (note == null) get("medie").innerHTML = "EROARE";
  let teza = get("teza").value;
  let medie1 = 0;
  for (let i=0; i<note.length; i++) {
    if (note[i] > 10) {get("medie").innerHTML = "Numere prea mari!!";}
    medie1+=parseInt(note[i]);
  }
  medie1 = medie1/note.length;
  if (teza != "") {
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
