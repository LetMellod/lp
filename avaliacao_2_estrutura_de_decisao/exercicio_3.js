const prompt = require("prompt-sync")();
let x = (prompt("Qual categoria gostaria de ver? ('A' para Alimentos, 'B' para Bebidas, 'C' para Cosméticos) "));

switch(x){
    case "A":
    case "a":
        console.log(" Salgados, Doces, Proteínas, Frutas");
        break;
    case "B":
    case "b":
        console.log(" Refrigerantes, Sucos, Vinhos, Cervejas, Destilados");
        break;
    case "C":
    case "c":
        console.log(" Cremes hidratantes, Produtos capilares, Produtos faciais, Cuidados com as unhas");
        break;
    default:
		console.log(" Categoria não encontrada");
}