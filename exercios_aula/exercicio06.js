const prompt = require ("prompt-sync")();

//Solicite ao usuário o raio de uma esfera
let raio = Number(prompt("Digite o raio de uma esfera: "));

const pi = 3.14;
//calcular e informar o raio de uma esfera
let volume = 4 * pi * raio * raio * raio / 3 ;

//informar saída
console.log("O raio de uma esfera é "+ volume);