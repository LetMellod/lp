const prompt = require("prompt-sync")();

console.log("Para saber se você foi aprovado, digite suas três notas.")
let n1 = Number(prompt("Digite a sua primeira nota: "))
let n2 = Number(prompt("Qual foi a segunda nota? "))
let n3 = Number(prompt("E qual foi a terceira nota? "))

let m = (n1 + n2 + n3) / 3

if (m >= 5) {
    console.log("Você está aprovado!")
}
else {
    console.log("Você está reprovado!")
}