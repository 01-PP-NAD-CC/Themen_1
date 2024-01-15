

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : check
3. Fkt. Grundrechenarten : check
4. Ausgabe in Konsole : check
*/
const ERROR_STR_DIV = "nicht Teilbar";
const ERROR_STR_GEN = "ERROR";
const prompt = require('prompt-sync')({sigint: true});

startApp();
function startApp() {
	output(calculator(getNum1(),getNum2(),getop()));	
}
function getNum1() {
	return parseInt (prompt("Zahl1?: "));
}
function getNum2() {
	return parseInt (prompt("Zahl2?: "));
}
function getop() {
	return prompt("OP?: ");
}
// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));


function calculator(a,b,op) {
		switch (op) {
				case "+":          				// add
						return add(a,b);         
				case "-":          				// sub
						return subtract(a,b);  
				case "*":          				// mul
						return  multiply(a,b);
				case "/":          				// div
				case ":":          				// div
						return  divide(a,b);      
				default:               			//ERROR
						return ERROR_STR_GEN;	
		}
}


// module: division a / b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(3,0));

//function divide(a, b) {   return b !== 0 ? a / b : ERROR_STR_DIV ; }  //Ternäre Version
function divide(a,b) {

	if (b == 0) {
		return ERROR_STR_DIV;  // Ausnahme

	}

	if (b !== 0) {  //b ungleich 0 
		return a / b;  // reguläres Verhalten 
	} else {
		return ERROR_STR_DIV;  // Ausnahme
	}
}

// module: multiply a - b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return a * b;
}


// module: subtraction a - b |  test:
// output(subtract(3,2))
// output(subtract(3,-2))
// output(subtract(3,0))

function subtract(a,b) {
	return a - b ;
}


// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));

function add(a,b) {
	return a + b;
}


// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
