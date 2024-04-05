const prompt = require("prompt-sync")();
console.log("Insira sua nota para descobrir a classificação da mesma");
let nota = Number(prompt("Qual foi sua nota? "));

switch(nota){
    case 5:
        console.log(nota + " Sua classificação foi excelente, parabéns! 🎉");
        break;
    case 4:
        console.log(nota + " Sua classificação foi bom. 👍");
        break;
    case 3:
        console.log(nota + " Sua classificação foi médio, estude mais na próxima.");
        break;
    case 2:
        console.log(nota + " Sua classificação foi ruim. 😞");
        break;
    case 1:
        console.log(nota + " Sua classificação foi péssimo.😣");
        break;
    default:
		console.log(nota + " Nota inválida. Tente novamente.");
}