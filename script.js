// alle elemente in variablen gespeichert
const b1 = document.getElementById("zahl1");
const b2 = document.getElementById("zahl2");
const b3 = document.getElementById("zahl3");
const b4 = document.getElementById("zahl4");
const b5 = document.getElementById("zahl5");
const b6 = document.getElementById("zahl6");
const b7 = document.getElementById("zahl7");
const b8 = document.getElementById("zahl8");
const b9 = document.getElementById("zahl9");
const b0 = document.getElementById("zahl0");
const bK = document.getElementById("komma");
const bMi = document.getElementById("minus");
const bG = document.getElementById("geteilt");
const bP = document.getElementById("prozent");
const bKl = document.getElementById("klammer");
const bR = document.getElementById("remove");
const bRA = document.getElementById("remove-all");
const bM = document.getElementById("mal");
const bPl = document.getElementById("plus");
const bGl = document.getElementById("gleich");
const anzeige = document.getElementById("anzeige");

//variablen erstellt 
// die einen neuen wert zugewiesen bekommen können
let ergebnis;
let zweiteZahl = null; 
let aktuelleEingabe = "";
let gespeicherteZahl = null;
let operator = null;

//eine funktion die für 
// die buttons mit zahlen 
// die werden als string in 
// die variable aktuelleEingabe rein kommen
// und in der anzeige zuu sehen sein
function zahlDruecken (zahl){
   aktuelleEingabe += zahl;
   anzeige.innerText = aktuelleEingabe;
}

// wenn ein operator gecklickt wird dann wird 
// der string wird string von aktuelleEingabe 
// in eine Number umgewandelt 
// und in eine variable gepeichert damit man 
// damit rechnen kann dann wird der rechenOperator 
// in einer variable gespeichert
// und dann wird AktuelleEingabe leer gemacht
function operatorDruecken(op){
   gespeicherteZahl = Number(aktuelleEingabe)
   operator = op;
   aktuelleEingabe = "";
}

// es leert jede variable und 
// setzt die anzeige auf null
function removeAllDruecken(){
   aktuelleEingabe = "";
   gespeicherteZahl = null;
   operator = null;
   ergebnis = null;
   zweiteZahl = null;
   anzeige.innerText = "0";
}

//hier ist die funktion für das ergebnis
function gleich(){
   zweiteZahl = Number(aktuelleEingabe);
   
   if (operator === '+') {
      ergebnis = gespeicherteZahl + zweiteZahl;
   }else if (operator === '-'){
      ergebnis = gespeicherteZahl - zweiteZahl;
   }else if (operator === '*'){
      ergebnis = gespeicherteZahl * zweiteZahl;
   }else if (operator === '/'){
      ergebnis = gespeicherteZahl / zweiteZahl;
   }
   anzeige.innerText = String(ergebnis);
   
}