const prompt = require ("prompt-sync")();

//Solicite ao usuário principal o comprimento dos três lados de um triângulo
console.log("Para calcular o perímetro de um triângulo, preencha abaixo:");
let a = Number(prompt("Qual o primeiro valor? "));
let b = Number(prompt("Qual o segundo valor? "));
let c = Number(prompt("Qual o terceiro valor? "));

// Calcule o perímetro do triângulo
let perimetro = a + b + c ;

// Mostre o resultado
console.log("O perímetro do triângulo, é: " + perimetro);