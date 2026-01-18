// ================================
// BUTTONS AUS DEM HTML HOLEN
// ================================

// Zahlen-Buttons
const b1 = document.getElementById("zahl1");
const b2 = document.getElementById("zahl2");
const b3 = document.getElementById("zahl3");
const b5 = document.getElementById("zahl5");
const b6 = document.getElementById("zahl6");
const b7 = document.getElementById("zahl7");
const b8 = document.getElementById("zahl8");
const b9 = document.getElementById("zahl9");
const b0 = document.getElementById("zahl0");

// Operator-Buttons
const bK = document.getElementById("komma");
const bMi = document.getElementById("minus");
const bG = document.getElementById("geteilt");
const bP = document.getElementById("prozent");
const bKl = document.getElementById("klammer");
const bM = document.getElementById("mal");
const bPl = document.getElementById("plus");
const bGl = document.getElementById("gleich");

// Entfernen-Buttons
const bR = document.getElementById("remove");
const bRA = document.getElementById("remove-all");

// Anzeigen
const anzeige = document.getElementById("anzeige");
const klammerAnzeige = document.getElementById("klammerAnzeige");
const operatorAnzeige = document.getElementById("operatorAnzeige");


// ================================
// VARIABLEN FÜR DEN RECHENZUSTAND
// ================================

// Ergebnis der Rechnung
let ergebnis;

// Aktuelle Zahl, die der Benutzer eingibt (als String)
let aktuelleEingabe = "";

// Gespeicherte erste Zahl
let gespeicherteZahl = null;

// Zweite Zahl nach Operator
let zweiteZahl = null;

// Dritte Zahl (für Klammern)
let dritteZahl = null;

// Aktueller Operator (+, -, *, /)
let operator = null;

// Status, ob eine Klammer aktiv ist
let klammer = null;

// Zwischenspeicher für Klammerzustand
let speicher = null;
let zwischenSpeicher = null;

// Operator innerhalb der Klammer
let inKlammerOperator = null;


// ================================
// ZAHLEN EINGEBEN
// ================================

// Fügt die gedrückte Zahl zur aktuellen Eingabe hinzu
function zahlDruecken(zahl) {
 aktuelleEingabe += zahl;
 anzeige.innerText = aktuelleEingabe;
}


// ================================
// OPERATOR DRÜCKEN (+ - * /)
// ================================

function operatorDruecken(op) {

 // Normaler Rechenfall ohne Klammern
 if (klammer === null && zwischenSpeicher === null) {
 gespeicherteZahl = Number(aktuelleEingabe);
 operator = op;
 aktuelleEingabe = "";
 anzeige.innerText = aktuelleEingabe;

 // Operator innerhalb einer Klammer
 } else if (klammer === '()') {
 aktuelleEingabe = "";
 zwischenSpeicher = klammer;
 klammer = null;
 inKlammerOperator = op;
 anzeige.innerText = aktuelleEingabe;

 // Operator nach abgeschlossener Klammer
 } else if (zwischenSpeicher === '()') {
 zweiteZahl = Number(aktuelleEingabe);
 aktuelleEingabe = "";
 operator = op;
 speicher = zwischenSpeicher;
 zwischenSpeicher = null;
 anzeige.innerText = aktuelleEingabe;
 }
}


// ================================
// KOMMA (DEZIMALZAHL)
// ================================

function kommaDruecken() {
 // Verhindert mehrere Punkte
 if (!aktuelleEingabe.includes('.')) {
 if (aktuelleEingabe === '') {
 aktuelleEingabe = '0.';
 } else {
 aktuelleEingabe += '.';
 }
 anzeige.innerText = aktuelleEingabe;
 }
}


// ================================
// ALLES LÖSCHEN (RESET)
// ================================

function removeAllDruecken() {
 aktuelleEingabe = "";
 gespeicherteZahl = null;
 zweiteZahl = null;
 dritteZahl = null;
 operator = null;
 klammer = null;
 speicher = null;
 zwischenSpeicher = null;
 inKlammerOperator = null;
 ergebnis = null;

 anzeige.innerText = "0";
}


// ================================
// KLAMMER DRÜCKEN
// ================================

function klammerDruecken() {
 klammer = '()';
 gespeicherteZahl = Number(aktuelleEingabe);
 anzeige.innerText = aktuelleEingabe;
}


// ================================
// REMOVE (EIN SCHRITT ZURÜCK)
// ================================

function removeDruecken() {

 // Entfernt das letzte Zeichen
 function loeschen() {
 aktuelleEingabe = aktuelleEingabe.slice(0, -1);
 }

 // Operator rückgängig machen
 if (aktuelleEingabe === "" && operator !== null && zweiteZahl === null) {
 operator = null;
 aktuelleEingabe = String(gespeicherteZahl);

 // Klammer rückgängig machen
 } else if (gespeicherteZahl !== null && klammer === '()') {
 klammer = null;
 aktuelleEingabe = String(gespeicherteZahl);

 // Zeichen löschen
 } else if (aktuelleEingabe !== "") {
 loeschen();
 }

 anzeige.innerText = aktuelleEingabe || "0";
}


// ================================
// GLEICH (=) BERECHNUNG
// ================================

function gleich() {

 // Bestimmt zweite oder dritte Zahl
 if (speicher === null) {
 zweiteZahl = Number(aktuelleEingabe);
 } else {
 dritteZahl = Number(aktuelleEingabe);
 }

 // Rechnung mit Klammern
 if (inKlammerOperator !== null) {
 if (inKlammerOperator === '+') {
 ergebnis = gespeicherteZahl + zweiteZahl;
 } else if (inKlammerOperator === '-') {
 ergebnis = gespeicherteZahl - zweiteZahl;
 } else if (inKlammerOperator === '*') {
 ergebnis = gespeicherteZahl * zweiteZahl;
 } else if (inKlammerOperator === '/') {
 ergebnis = gespeicherteZahl / zweiteZahl;
 }

 // Normale Rechnung
 } else {
 if (operator === '+') ergebnis = gespeicherteZahl + zweiteZahl;
 if (operator === '-') ergebnis = gespeicherteZahl - zweiteZahl;
 if (operator === '*') ergebnis = gespeicherteZahl * zweiteZahl;
 if (operator === '/') ergebnis = gespeicherteZahl / zweiteZahl;
 if (operator === '%') ergebnis = zweiteZahl / 100 * gespeicherteZahl;
 }

 // Ergebnis anzeigen & Zustand zurücksetzen
 anzeige.innerText = String(ergebnis);
 aktuelleEingabe = "";
 gespeicherteZahl = ergebnis;
 operator = null;
}
