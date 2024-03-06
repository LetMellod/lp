const prompt = require ("prompt-sync")();

//Solicite ao usuário as coordenadas (x, y) de dois pontos no plano cartesiano
console.log("Para calcular as coordenadas de dois pontos em um plano cartesiano, responda abaixo:");
// let xa = Number(prompt("Qual a coordenada x do primeiro ponto? "));
// let ya = Number(prompt("Qual a coordenada y do primeiro ponto? "));
// let xb = Number(prompt("Qual a coordenada x do segundo ponto? "));
// let yb = Number(prompt("Qual a coordenada y do segundo ponto? "));

// Calcule a distância entre esses dois pontos
let resultado = Math.sqrt((xb - xa)**2 + (yb - ya)**2);

// Mostre o resultado
console.log("A distância entre x e y é de: " + resultado)
