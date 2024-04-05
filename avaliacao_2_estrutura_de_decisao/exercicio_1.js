const prompt = require("prompt-sync")();
console.log("Insira um número de 1 ao 7 para descobrir o correspondente em dias da semana.");
let x = Number(prompt("Digite um número: "));

switch(x){
    case 1:
        console.log(x + " equivale a Domingo");
        break;
    case 2:
        console.log(x + " equivale a Segunda");
        break;
    case 3:
        console.log(x + " equivale a Terça");
        break;
    case 4:
        console.log(x + " equivale a Quarta");
        break;
    case 5:
        console.log(x + " equivale a Quinta");
        break;
    case 6:
        console.log(x + " equivale a Sexta");
        break;
    case 7:
        console.log(x + " equivale a Sábado");
        break;
    default:
		console.log(x + " Número inválido, não representa um dia da semana.");
}