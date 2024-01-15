
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// funktionsaufruf  / call

// Funktionsrumpf / Funkiosdeklaration

// test();
// function test()  //
// {
//  console.log("HI");   
// }



/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

//  ausgabeNamen();     // call
// //Funktion

function ausgabeNamen() {  
    //interne Variable | what happens in Vegas stays in Vegas     scope =   ist ein bereich der geschlossen ist und dort die funktion beinhaltet 
let firstName = "Nadim";
    console.log(firstName);
}

// // console.log(firstName);

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN
// Argumente sind daten für ein parameter


// ausgabeNamen2("Nadim"); // Argument call
// ausgabeNamen2("Max"); // Argument call

// function ausgabeNamen2(firstName)  // Parameter
// {  
//     console.log("hallo " + firstName);
// }

// const prompt = require('prompt-sync')({sigint: true});

// ausgabeNamenParams(prompt ("firstName: "), prompt ("familyName: "))
// function ausgabeNamenParams(firstName,familyName)  
// {  
//     console.log("Hallo " + firstName +" " + familyName);
// }
/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenSRP("Max","Mütze");

// function ausgabeNamenSRP(firstName, familyName) {  // Parameter

//     // 1. Funktionalität: string composing
//     const GAP = " ";
//     let outputStr = "Hallo, " + firstName + GAP + familyName + "!"

//     // 2. Funktionalität: string output
//     console.log(outputStr);
// }

/***** Funktionen 03a *****/

//****Funktionalität : string output  */

output(getString("Max", "Mütze"));

function getString(firstName, familyName) {
 const GAP = " ";
 let outputStr = "Hallo, " + firstName + GAP + familyName + "!" 
 return outputStr;   //ausgabe der daten   // Return = exit aus dem scope
 console.log("HI") // Return bricht funkion ab alles nachfolgende wird nicht mehr beachtet
}




// output("hi")
// output(2)
// output(true)
function output(outputData)
{
    console.log(outputData);
}

