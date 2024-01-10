
/*Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthyearjohn = 2000;
const birthyearmark = 1990;

//  berechnung Alter
let date = new Date(); // Systemfunktion Datum abrufen  
let year = date.getFullYear;  // Daten Liefern lassen
ageJohn = year - birthyearjohn;
ageMark = year - birthyearmark;

//Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

console.log("Datum: " + date);