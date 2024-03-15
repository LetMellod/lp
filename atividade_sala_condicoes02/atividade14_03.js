const prompt = require("prompt-sync")();

let x = Number(prompt("Digite um número: "))
let y = Number(prompt("Digite outro número: "))
let z = Number(prompt("Digite mais um número: "))

let maior

if (x > y){
    maior = x
}
else{
    maior = y
}

if (maior > z){
     maior = z
    console.log("O maior número é " + maior)
}
else{
    console.log("O maior número é " + z)
}