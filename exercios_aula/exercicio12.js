const prompt = require ("prompt-sync")();

//Solicite ao usuário seu peso em quilogramas e altura em metros
console.log("Quer saber qual o seu IMC? Preencha abaixo e descubra.");
let a = Number(prompt("Qual é a sua altura (em metros)? "));
let p = Number(prompt("Qual é o seu peso (em kg)? "));

// Calcule o Índice de Massa Corporal (IMC) do usuário
let imc = p / (a * a);

// Mostre o resultado
console.log("Seu IMC é de: " + imc.toFixed(2));