const prompt = require("prompt-sync")();
let x = Number(prompt("Introduza um número: "));

switch(x) {
	case 1:
		console.log("x = 1");
		break; // interrompe a execução do switch
	case 2:
		console.log("x = 2");
		break;
	case 3:
		console.log("x = 3");
		break;
	default:
		console.log(" não é igual a 1, 2 ou 3");
}