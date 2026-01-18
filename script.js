// ================================
// BUTTONS AUS DEM HTML HOLEN
// ================================
const anzeige = document.getElementById("anzeige");
const klammerAnzeige = document.getElementById("klammerAnzeige");
const operatorAnzeige = document.getElementById("operatorAnzeige");

// ================================
// VARIABLEN FÜR DEN RECHENZUSTAND
// ================================
let aktuelleEingabe = ""; // Was der Benutzer aktuell tippt
let gespeicherteZahl = null; // Erste Zahl (außerhalb Klammer)
let zweiteZahl = null; // Zweite Zahl (für normale Rechnung)
let dritteZahl = null; // Zweite Zahl innerhalb Klammer
let operator = null; // Operator außerhalb Klammer
let klammer = false; // Ob Klammer aktiv ist
let inKlammerOperator = null; // Operator innerhalb Klammer
let klammerZahl = null; // Erste Zahl in der Klammer
let ergebnis = null;

// ================================
// ZAHLEN EINGEBEN
// ================================
function zahlDruecken(zahl) {
 aktuelleEingabe += zahl;
 aktualisiereAnzeige();
}

// ================================
// KOMMA (DEZIMALZAHL)
// ================================
function kommaDruecken() {
 if (!aktuelleEingabe.includes('.')) {
 aktuelleEingabe = aktuelleEingabe === '' ? '0.' : aktuelleEingabe + '.';
 aktualisiereAnzeige();
 }
}

// ================================
// OPERATOR DRÜCKEN (+ - * / %)
// ================================
function operatorDruecken(op) {
 if (!klammer) {
 // normale Rechnung
 if (aktuelleEingabe !== "") {
 gespeicherteZahl = Number(aktuelleEingabe);
 aktuelleEingabe = "";
 }
 operator = op;
 } else {
 // innerhalb Klammer
 if (aktuelleEingabe !== "") {
 klammerZahl = Number(aktuelleEingabe);
 aktuelleEingabe = "";
 }
 inKlammerOperator = op;
 }
 aktualisiereAnzeige();
}

// ================================
// KLAMMER DRÜCKEN
// ================================
function klammerDruecken() {
 klammer = true;
 klammerZahl = Number(aktuelleEingabe) || 0;
 aktuelleEingabe = "";
 aktualisiereAnzeige();
}

// ================================
// REMOVE (LETZTES ZEICHEN)
// ================================
function removeDruecken() {
 if (aktuelleEingabe !== "") {
 // Lösche das letzte Zeichen der Eingabe
 aktuelleEingabe = aktuelleEingabe.slice(0, -1);
 } else if (klammer && inKlammerOperator !== null) {
 // Operator innerhalb Klammer zurücksetzen
 inKlammerOperator = null;
 } else if (!klammer && operator !== null) {
 // Operator außerhalb Klammer zurücksetzen
 operator = null;
 } else if (klammer) {
 // Klammer zurücksetzen
 klammer = false;
 klammerZahl = null;
 }
 aktualisiereAnzeige();
}

// ================================
// REMOVE ALL (RESET)
// ================================
function removeAllDruecken() {
 aktuelleEingabe = "";
 gespeicherteZahl = null;
 zweiteZahl = null;
 dritteZahl = null;
 operator = null;
 klammer = false;
 klammerZahl = null;
 inKlammerOperator = null;
 ergebnis = null;
 aktualisiereAnzeige();
}

// ================================
// GLEICH BERECHNUNG
// ================================
function gleich() {
 if (klammer) {
 // Klammerberechnung zuerst
 if (aktuelleEingabe !== "") {
 dritteZahl = Number(aktuelleEingabe);
 }
 if (inKlammerOperator && klammerZahl !== null && dritteZahl !== null) {
 switch (inKlammerOperator) {
 case '+': klammerZahl = klammerZahl + dritteZahl; break;
 case '-': klammerZahl = klammerZahl - dritteZahl; break;
 case '*': klammerZahl = klammerZahl * dritteZahl; break;
 case '/': klammerZahl = klammerZahl / dritteZahl; break;
 }
 }
 // Äußere Rechnung
 if (operator && gespeicherteZahl !== null) {
 switch (operator) {
 case '+': ergebnis = gespeicherteZahl + klammerZahl; break;
 case '-': ergebnis = gespeicherteZahl - klammerZahl; break;
 case '*': ergebnis = gespeicherteZahl * klammerZahl; break;
 case '/': ergebnis = gespeicherteZahl / klammerZahl; break;
 case '%': ergebnis = gespeicherteZahl / 100 * klammerZahl; break;
 }
 } else {
 ergebnis = klammerZahl;
 }
 } else {
 // Normale Rechnung ohne Klammer
 if (aktuelleEingabe !== "") zweiteZahl = Number(aktuelleEingabe);
 if (operator && gespeicherteZahl !== null && zweiteZahl !== null) {
 switch (operator) {
 case '+': ergebnis = gespeicherteZahl + zweiteZahl; break;
 case '-': ergebnis = gespeicherteZahl - zweiteZahl; break;
 case '*': ergebnis = gespeicherteZahl * zweiteZahl; break;
 case '/': ergebnis = gespeicherteZahl / zweiteZahl; break;
 case '%': ergebnis = gespeicherteZahl / 100 * zweiteZahl; break;
 }
 } else {
 ergebnis = zweiteZahl || gespeicherteZahl;
 }
 }

 // Anzeige aktualisieren und Zustand zurücksetzen
 anzeige.innerText = ergebnis;
 aktuelleEingabe = "";
 gespeicherteZahl = ergebnis;
 operator = null;
 klammer = false;
 klammerZahl = null;
 inKlammerOperator = null;
}

// ================================
// ANZEIGE AKTUALISIEREN
// ================================
function aktualisiereAnzeige() {
 anzeige.innerText = aktuelleEingabe || "0";
 klammerAnzeige.innerText = klammer ? "()" : "";
 operatorAnzeige.innerText = operator || inKlammerOperator || "";
}
