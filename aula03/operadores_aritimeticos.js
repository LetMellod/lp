let n1 = 2;
let n2 = 3;

console.log("Operadores aritméticos")
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n2 / n1)
console.log(n1 % n2)  // apresenta o resto da divisao
console.log(n1 ** n2)


console.log("Armazenando operações em variáveis")
let soma = n1 + n2;
let subtracao = n1 -n2
let multiplicacao = n1 * n2;
let divisao = n2 / n1;
let resto = n1 % n2;
let potencia = n1 ** n2

console.log("soma:" + soma)
console.log("subtração:" + subtracao)
console.log("multiplicação:" + multiplicacao)
console.log("divisão:" + divisao)
console.log("resto:" + resto)
console.log("potência:" + potencia)

// Operador + é usado em dois contextos: soma e concatenação

// contexto da soma
// number + number = Number
console.log(3 + 2) // realiza adição

// concatenação
// string + number = String
console.log("3" + 2) // 32
// number + string = String
console.log(3 + "2") // 32 
// string + string = String
console.log("3" + "2")


// string - number = Number
console.log("3" - 2)
// string - string = Number
console.log("5" - "2")
// Quando é usado o - a operação sempre é feita, independente de ser número ou string.

console.log("cinco" - "2")

console.log(typeof("cinco" - "2"))

