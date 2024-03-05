const prompt = require ("prompt-sync")();

// Entrada de duas informações: comprimento e a largura de um retângulo
let n1 = Number(prompt("Qual o comprimento do retângulo? "));
let n2 = Number(prompt("Qual a largura? "));

// Processamento: calcular e exibir a área do retângulo
let multiplicação = n1 * n2;

// Saída: exibir o resultado
console.log("A área do retângulo é "+ multiplicação);
