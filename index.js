/*
 *comentario
 *em varias 
 *linhas
 */

 //declarando tipos de variaveis e operador de atribuição (=)

 var olamundo = "hello world!";

 const valor = "nao muda o valor";

 let = bloco = "só pode ser acessado dentro do bloco onde foi declarado";

 console.log (olamundo);
 console.log (valor);
 console.log (bloco);

 const a = 20;
 const b = "20" ;

//operador de comparação == compara valor e ignora o tipo
console.log(a == b);

// compara o valor e o tipo ===
console.log(a === b);

//compara só o valor != I !== compara só os dados
console.log(a != b);

// && . || e and OR  ||só é falso se todas as condições forem falsas
console.log(a == b && typeof b == 'string'); 
console.log(a === b && typeof b == 'string');
console.log(a == b && typeof a == 'string'); 
console.log(a === b && typeof a == 'string');