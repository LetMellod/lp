const prompt = require("prompt-sync")();

console.log("Escreva três números e descobriremos qual é o maior.")
let n1 = Number(prompt("Digite um número: "))
let n2 = Number(prompt("Digite outro número: "))
let n3 = Number(prompt("Digite mais um último número: "))

if (n1 > n2 && n2 > n3) {
    console.log("O maior número é " + n1)
}
else {
    if (n2 > n3)
    console.log("O maior número é " + n2)
    if (n3 > n2)
    console.log("O maior número é " + n3)
}