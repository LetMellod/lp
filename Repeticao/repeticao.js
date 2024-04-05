const prompt = require("prompt-sync")();
//let x = Number(prompt("Digite um número: "));

let numero = 2;

//console.log(numero * 0)
// console.log(numero * 1)
// console.log(numero * 2)
// console.log(numero * 3)
// console.log(numero * 4)
// console.log(numero * 5)
// console.log(numero * 6)
// console.log(numero * 7)
// console.log(numero * 8)
// console.log(numero * 9)
// console.log(numero * 10)

// for (<iniciação>; <condição>; <incremento/decremento>)

// for (let cont = 0; cont <=10 ; cont = cont + 1) {
//     //console.log(2*cont);
//    // console.log("2 X " + cont + "=" + (2*cont));
//     console.log(`2 x ${cont} = ${2*cont}`);
// }

// for(let cont = 5; cont <= 20; cont = cont + 2){
//     console.log(`${cont}`)
// }

// while (<condição>) {instrução}
let cont = 5
while (cont <= 20) {
    console.log(`${cont}`)
    cont = cont + 2
}