const prompt = require("prompt-sync")();
let x = Number(prompt("Qual foi a sua nota? "));

if(x >= 5) {
	console.log("Aluno aprovado!! 🎉");
} else {
	console.log("Aluno reprovado!! 😣 ");
}