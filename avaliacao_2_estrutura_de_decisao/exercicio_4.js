const prompt = require("prompt-sync")();
console.log("realize uma operação matemática");
let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite outro número: "));
let op = (prompt("Digite a operação a ser feita ('+' para soma, '-' para subtração, '*' para multiplicação, '/' para divisão): "));
let result;

if (op == "+"){
    result = n1 + n2
    console.log(n1 + " + " + n2 + " = " + result)
}
else if(op == "-"){
    result = n1 - n2
    console.log(n1 + " - " + n2 + " = " + result)
} 
else if (op == "*") {
    result = n1 * n2
    console.log(n1 + " * " + n2 + " = " + result)
}
else if (op == "/") {
    result = n1 / n2
    console.log(n1 + " / " + n2 + " = " + result)
}
else{
    console.log("Operação Inválida")
}