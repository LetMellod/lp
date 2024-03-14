const prompt = require("prompt-sync")();
console.log("Para calcular a área de um trapézio, informe os valores que são pedidos:");

const B = Number(prompt("Informe o valor da basa maior (B): "));
const b = Number(prompt("Informe o valor da base menor (b): "));
const h = Number(prompt("Informe o valor da altura (h): "));

const area = ((B * b) * h) / 2;

console.log("- A àrea total do trapézio é de " + area + "cm².");
