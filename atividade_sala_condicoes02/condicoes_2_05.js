const prompt = require("prompt-sync")();
console.log("Para descobrir se o número é positivo, negativou ou igual a zero, digite um número qualquer:");

const numero = Number(prompt("Digite um número:"));
if (numero > 0) { // num > 0
 console.log("Número " + numero + " é positivo");
}
else { // num <= 0
 if (numero == 0) { // num == 0
 console.log("Número " + numero + " é igual a zero");
 } else // num < 0
 console.log("Numero " + numero + " é negativo");
}
