const prompt = require("prompt-sync")();

let n = Number(prompt("Digite um número: "))

if (n > 0) {
    console.log("Esse é um número positivo")
}
else
    if (n == 0)
        console.log("Esse número é neutro")
    else //outro else pq já se tinha certeza das anteriores
        console.log("Esse é um número negativo")