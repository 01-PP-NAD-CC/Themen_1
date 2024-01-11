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
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
// console.log("isJohnyounger: " + isJohnyounger)
console.log("------------------");

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

if (isJohnOlder)        // Ja- zweig            //das
{
console.log("John ist älter!");
} 
else if(isJohnEqual)                // alternative Zweige    //oder das
{
console.log("John ist gleich alt!");
}
else                  // gemeinsame alternative   //sonst das
{
console.log("John ist jünger!");
}









