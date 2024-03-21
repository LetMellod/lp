const prompt = require("prompt-sync")();

let x = Number(prompt("Digite um número: "));
let y = Number(prompt("Digite outro número: "));
let z = Number(prompt("Digite mais um número: "));

let maior = x;

if(y > maior){
    maior = y
}
if (z > maior){
    maior = z
}
console.log("o maior número é o " + maior);