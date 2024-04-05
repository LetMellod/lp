const prompt = require("prompt-sync")();
console.log("Calculadora de IMC");
let p = Number(prompt("Qual é o seu peso? "));
let a = Number(prompt("Qual é a sua altura? "));

let imc = p / (a * a);

if(imc <= 18.5){
    console.log(" Abaixo do peso");
}
if (imc <= 25){
    console.log("Saudável");
}
else if(imc <= 30){
    console.log("Sobreeso");
}
if (imc <= 35){
    console.log("Obesidade grau 1");
}
if (imc <= 40){
    console.log("Obesidade grau 2");
}
else if(imc > 40){
    console.log("Obesidade grau 3");
}