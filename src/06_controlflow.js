// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 29;
const ageMark = 29;

// Deklaration
let isJohnOlder, isJohnEqual; //isjohnyounger;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
// isJohnyounger = (ageJohn < ageMark)

//Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// // console.log("isJohnyounger: " + isJohnyounger)
// console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)



//if(true)
//if(false)
// if(isJohnOlder) // ohne semikolon wird die bedingung nur ausgeführt wenn  es zutrifft!
// {
//     console.log("john ist älter")  
// }
// if(isJohnEqual)
// {
//     console.log("john ist gleich alter")  
// }

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein
// //if true
// if (isJohnOlder)
// {
// console.log("John ist älter!");
// } 
// else 
// {
// console.log("John ist jünger!");
// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

// if (isJohnOlder)        // Ja- zweig            //das
// {
// console.log("John ist älter!");
// } 
// else if(isJohnEqual)                // alternative Zweige    //oder das
// {
// console.log("John ist gleich alt!");
// }
// else                  // gemeinsame alternative   //sonst das
// {
// console.log("John ist jünger!");
// }

/****** Fallunterscheidung / SWITCH|CASE 1 ******/


// const firstName = "Jane";
// let job;

// job = "driver";  // .. fährt TAXI! / UBER
// job = "diver"; // .. taucht im Rhein! 
// job = "artist"; // .. malt ein Bild!
// job = "pilot"; // .. macht etwas anderes! --> default
// job = "teacher"; // .. unterrichtet!
// job = "instructor"; // .. unterrichtet!

// switch (job) 
// {
//     case "driver":
//         console.log(firstName + " fährt TAXI!");
//         // break;    // wenn der erstefall zutrifft  unterbricht das break die nachfolgenden befehle 
//     case "diver":
//         console.log(firstName + " taucht im Rhein!");
//         break;
//     case "artist":
//         console.log(firstName + " malt ein Bild!");
//         break;
//     case "teacher":
//     case "instructor":
//         console.log(firstName + " unterrichtet!");
//         break;
//     default:
//         console.log("Jane macht etwas anderes!");
//         break;
// }


/********  Fallunterscheidung / SWITCH|CASE 2 *******/


const cond = false;
const value = 1;


switch (cond) {                             // falls die condition zutriff true or false werden dementsprechend verschiedenen cases ausgegeben
    case (value == 1):
        console.log ("Der Wert ist 1.");
        break;
    case (value == 2):
        console.log ("Der Wert ist 2.");
         break;
    default:
        console.log("Value hat einen anderen Wert")
        break;
}








