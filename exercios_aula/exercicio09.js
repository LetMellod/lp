const prompt = require ("prompt-sync")();

//Solicite ao usuário principal montante inicial de dinheiro, a taxa de juros anual (em porcentagem) e o tempo (em anos)
console.log("Para calcular a taxa de juros simples, preencha a seguir:");
let C = Number(prompt("Qual o valor de dinheiro? "));
let i = Number(prompt("Qual a taxa de juros? "));
let t = Number(prompt("Qual será o tempo (somente número)? "));

// Calcule o montante de juros simples ganho
let J = C * i * t ;

// Mostre o resultado
console.log("O valor ganho é de: " + J);