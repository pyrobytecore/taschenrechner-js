# Taschenrechner Projekt

Dies ist ein einfacher **Taschenrechner**, den ich in HTML, CSS und JavaScript erstellt habe. 
Er kann Grundrechenarten (`+`, `-`, `*`, `/`), Prozentrechnung, Dezimalzahlen und Klammern ausführen. 

---

## Funktionen

- **Zahlen eingeben:** Klicke die Buttons 0–9. 
- **Dezimalzahlen:** Drücke `.` für Kommazahlen. 
- **Grundrechenarten:** `+`, `-`, `*`, `/`. 
- **Prozent:** `%` berechnet den Prozentsatz der aktuellen Zahl. 
- **Klammern:** `( )` öffnet und schließt eine Klammer, sodass Rechnungen innerhalb zuerst ausgeführt werden. 
- **Remove (←):** Löscht die letzte Eingabe oder hebt den letzten Operator auf. 
- **C (Reset):** Setzt alles zurück. 
- **= (Gleich):** Berechnet das Ergebnis. 

---

## Bedienung / Reihenfolge

### Beispiel 1: Normale Rechnung
1. Gib die erste Zahl ein (z.B. `7`). 
2. Drücke den Operator (z.B. `+`). 
3. Gib die zweite Zahl ein (z.B. `3`). 
4. Drücke `=` → Ergebnis: `10`. 

### Beispiel 2: Rechnung mit Klammern
1. Gib die erste Zahl ein (z.B. `2`). 
2. Drücke `( )` → die Klammer wird geöffnet. 
3. Gib die Zahl innerhalb der Klammer ein (z.B. `3`). 
4. Drücke den Operator innerhalb der Klammer (z.B. `+`). 
5. Gib die zweite Zahl innerhalb der Klammer ein (z.B. `4`). 
6. Drücke erneut `( )` oder einen Operator außerhalb der Klammer. 
7. Drücke `=` → zuerst wird die Klammer berechnet (`3 + 4 = 7`), dann die äußere Rechnung (`2 + 7 = 9`). 

---

## Tastenübersicht

| Button | Funktion |
|--------|---------|
| `0–9` | Zahl eingeben |
| `.` | Dezimalpunkt |
| `+` | Addition |
| `-` | Subtraktion |
| `*` | Multiplikation |
| `/` | Division |
| `%` | Prozentwert |
| `( )` | Klammern öffnen/schließen |
| `←` | Letzte Eingabe löschen |
| `C` | Alles zurücksetzen |
| `=` | Ergebnis berechnen |

---

## Hinweise

- Die Anzeige zeigt **immer die aktuelle Eingabe**. 
- Operatoren und Klammern werden automatisch berücksichtigt, wenn du `=` drückst. 
- Du kannst **verschachtelte Klammern** benutzen (z. B. `(2 + (3 * 4))`). 

---

## Technisches

- **HTML**: Struktur der Buttons und Anzeigen 
- **CSS**: Styling, Farben, Layout 
- **JavaScript**: Logik für Eingabe, Operatoren, Klammern und Berechnung 

---

## Beispiele

**Eingabe:** `2 + 3 * 4 =` → Ergebnis: `14` 
**Eingabe:** `(2 + 3) * 4 =` → Ergebnis: `20` 
**Eingabe:** `5 + (6 - 2) =` → Ergebnis: `9` 

---

**Autor:** Sami Pijou
