const prompt = require ("prompt-sync")();

//Solicite ao usuário a distância total percorrida em km e a quantidade total de combustível gasto em litros
console.log("Para calcular o consumo médio de combustível, informe:");
let km = Number(prompt("Qual a distância percorrida (em km)? "));
let l = Number(prompt("Quanto de combustível foi gasto (em litros)? "));

// Calcule o consumo médio de combustível (km/l)
let consumo = km / l ;

// Mostre o resultado
console.log("o consumo médio de combustível é de: " + consumo);