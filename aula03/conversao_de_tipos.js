// Mude apenas abaixo dessa linha
let a = false; // undefined
let b = true; // undefined
let c; // undefined
// Mude apenas acima dessa linha

a = a + 1;
b = b + 5;
c = c + " String!";
console.log("a: '" + a + "' " + typeof(a));
console.log("b: '" + b + "' " + typeof(b));
console.log("c: '" + c + "' " + typeof(c));



// CONVERSÃO DE TIPOS
let numero = 10;
let texto = "20";

// Conversão de número para string
texto = String(numero); // "10"
console.log(texto = String(numero))

// Conversão de string para número
numero = Number(texto); // 10
console.log(numero = Number(texto))

// Conversão de real para inteiro
numero = parseInt(30.5); // 30
numero = parseInt("30.5"); // 30
console.log(numero = parseInt(30.5))

// Conversão de texto para real
numero = parseFloat("30.5"); // 30.5
numero = Number("30.5"); // 30.5
console.log(numero = parseFloat("30.5"))