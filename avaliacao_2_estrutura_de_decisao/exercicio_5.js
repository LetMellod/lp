const prompt = require ("prompt-sync")();
console.log("Conversor de temperatura (Celsius para Fahrenheit ou Celsius para Kelvin)");

let c = Number(prompt("Digite os graus: "));
let or = prompt("Digite a unidade da temperatura original: ");
let con = prompt("Digite a unidade da temperatura a ser convertida: ");

let f = c * 1.8 + 32 ;
let k = c + 273.15 ;
let result

if(con == "f"){
    result = f
    console.log(c + " graus celsuis é o mesmo que " + result + " graus em Fahrenheit")
}
else if (con == "k"){
    result = k
    console.log(c + " graus celsuis é o mesmo que " + result + " graus em Kelvin")
}