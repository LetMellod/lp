const prompt = require ("prompt-sync")();

//Solicite ao usuário a velocidade média esperada em km/h e a distância total da viagem em km
console.log("Para calcular a duração estimada de uma viagem, nos diga:");
let d = Number(prompt("Qual será a distância (em km)? "));
let v = Number(prompt("Qual será a velocidade (em km/h)? "));

// Calcule a duração estimada da viagem em horas e minutos
let resultado = d / v;

// Mostre o resultado
console.log("A duração estimada é de: " + resultado);