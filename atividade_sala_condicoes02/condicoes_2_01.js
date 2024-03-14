const prompt = require("prompt-sync")();

let n = Number(prompt("Digite um número aleatório: "));

if(n % 2 == 0) {
    console.log("Este é um número par")

}
else {
    console.log("Este é número é ímpar")
}