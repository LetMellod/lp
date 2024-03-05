const prompt = require ("prompt-sync")();

// Entrada de dois números pelo usuário
let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite outro número: "));

// Processamento: calcular e mostrar a média desses dois números
let media = (n1 + n2) / 2;

// Saída: exibir o resultado
console.log("A média é "+ media);