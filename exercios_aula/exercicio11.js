const prompt = require ("prompt-sync")();

//Solicite ao usuário uma distância em quilômetros
console.log("Para converter quilômetros em milhas, preencha abaixo:");
let km = Number(prompt("Qual é a distancia em quilometros? "));

// Converter essa distância para milhas
let mi = km * 0.62137 ;

// Mostre o resultado
console.log(km + " em km, equivale a " + mi.toFixed(2) + " em milhas.");