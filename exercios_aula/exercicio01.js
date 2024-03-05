const prompt = require ("prompt-sync")();

//Entrada de dados do usuário: dois números
let n1 = Number(prompt("Introduza um número: "));
let n2 = Number(prompt("Introduza mais um número: "));


// Processamento: somar
let soma = n1 + n2;

// Saída: exibir a soma
console.log("O resultado é "+ soma);