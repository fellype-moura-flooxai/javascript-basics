//arrays contagem começa em 0 e suporta varios tipos de dados
//foreach para percorrer os dados
let carro = ["10", "9", "8", "7", 8, true, new Date(), function(){}];
carro.forEach(function (value, index) {
    console.log(value, index);
});

//console.log(carro[6].getFullYear());

console.log("minha tentativa em baixo")

let itens = ["laranja", "banana", "pera", "uva"];
itens.forEach(function (vendido, avaria) {
console.log("venda:", vendido, "avaria:",avaria);
});