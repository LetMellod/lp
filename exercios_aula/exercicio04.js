const prompt = require ("prompt-sync")();

// Entrada do valor do raio de um círculo
let n1 = Number(prompt("Digite o valor do raio de um círculo: "));

let pi = 3.14;
// Processamento: calcular a área
let area = pi * (n1 * 2);

// Processamento: calcular a circunferência
let circunferencia = 2 * pi * n1;

// Saída: exibir o resultado
console.log("A área é "+ area);
console.log("A circunferência é "+ circunferencia);