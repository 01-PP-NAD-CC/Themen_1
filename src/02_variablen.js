
//  Zeilenkommentar

/*
    Block-Kommentar
*/

/***** Variablen 01 *******/

// console.log("Hi!"); // Ausgabe
// console.log(Hi); // Ausgabe

/* Deklaration + Wertzuweisung I */

// let firstName; // Deklaration (Definition)
// console.log(firstName); // Ausgabe
// firstName = "Max"; // Wertzuweisung | assignment
// console.log(firstName); // Ausgabe
// let familyName = "Mütze"; // Deklaration + Wertzuweisung
// console.log("Hi, ich bin " + firstName + " " + familyName +"!");

/*  
    Wertzuweisung II + Datentypen 
    JS ist ein untypisierte Sprache!
*/

// let test; // Deklaration
// console.log("Datentyp: " + typeof test); // datentyp wird angezeigt
// console.log("Inhalt: " + test); // inhalt wird angezeigt 
// console.log("-------------");     // Trennstrich 
// test = "hello"; // Datentyp string
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("-------------");
// test = 2; // Datentyp number
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("-------------");
// test = true; //Datentyp boolean  ( ein boolescher Wert False or true )
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/* Variablen vs. Konstanten in JS */

// Variable
let test;  // Variable : Deklaration   eine Variable lässt sich imme im nachhinein überschreiben
test = "hi"; // Wertzuweisung (Initialisierung)
test = "hello"; // Überschreiben
console.log("Inhalt: " + test); // Ausgabe

//Konstante
const test2 = "Hi!";  // Deklaration + Wertzuweisung gemeinsam !
test2 = "Hello!"; // Laufzeitfehler !! ein versuch es zu überschreiben  eine konstante Variable kann nicht erneut überschrieben werde
console.log("Inhalt: " + test2); // Ausgabe

