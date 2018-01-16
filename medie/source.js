/*jshint esversion: 6 */
window.onload = nou();

function nou() {
  let note = prompt("Note: ");
  if (note == null) button();
  note = note.split(" ");
  let teza = parseInt(note.pop());
  let medie1 = 0;
  for (let i=0; i<note.length; i++) {
    if (note[i] > 10) {alert("Numere prea mari!!"); dinNou(); return;}
    medie1+=parseInt(note[i]);
  }
  medie1 = medie1/note.length;
  let medie = (medie1*3 + teza)/4;
  if (isNaN(medie)) {alert("Eroare!!"); dinNou(); return;}
  else {
    alert("Media ta este : " + (medie.toPrecision(3)));
    dinNou();
  }
}

function dinNou() {
  if (confirm("Incerci din nou?")) nou();
  else {button();}
}

function button() {
  document.getElementById("body").innerHTML = "<script src='source.js'></script>\n<button type='button' onclick='nou()'>Sigur nu?</button>";
}
