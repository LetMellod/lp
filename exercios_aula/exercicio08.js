const prompt = require ("prompt-sync")();

//Solicite ao usuário uma temperatura em graus Celsius
console.log("Converta graus Celsius em Fahrenheit");
let C = Number(prompt("Digite uma temperatura em Celsius: "));

// Converter essa temperatura para Fahrenheit
let f = C * 1.8 + 32 ;

// Mostre o resultado
console.log(C + " graus celsuis é o mesmo que " + f + " graus em Fahrenheit");
