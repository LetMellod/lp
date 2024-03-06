const prompt = require ("prompt-sync")();

//Solicite ao usuário um tempo em horas
console.log("Para converter horas em segundos, informe:");
let h = Number(prompt("Quantas horas quer converter? "));

// Converter esse tempo para segundos
let s = h *3600 ;

// Mostre o resultado
console.log(h + " horas, equivale a " + s + " segundos.");