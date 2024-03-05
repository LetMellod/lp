const prompt = require ("prompt-sync")();

// Entrada do comprimento da aresta de um cubo
let n1 = Number(prompt("Digite o comprimento da aresta de um cubo: "));

// Processamento: calcular o volume
let volume = n1 * n1 * n1;

// Saída: exibir o resultado
console.log("O comprimento da aresta do cubo é "+ volume);