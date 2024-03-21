const prompt = require("prompt-sync")();
let x = (prompt("Escreva um dia da semana (de segunda a domingo): "));

switch(x){
    case "domingo":
    case "Domingo":
    case "dom":
        console.log(x + " equivale a final de semana");
        break;
    case "segunda":
    case "Segunda":
    case "seg":
        console.log(x + " equivale a dia útil");
        break;
    case "terça":
    case "Terça":
    case "ter":
        console.log(x + " equivale a dia útil");
        break;
    case "quarta":
    case "Quarta":
    case "quar":
        console.log(x + " equivale a dia útil");
        break;
    case "quinta":
    case "Quinta":
    case "qui":
        console.log(x + " equivale a dia útil");
        break;
    case "sexta":
    case "Sexta":
    case "sex":
        console.log(x + " equivale a dia útil");
        break;
    case "sábado":
    case "Sábado":
    case "sáb":
        console.log(x + " equivale a final de semana");
        break;
    default:
		console.log(x + " não equivale a um dia válido");
}