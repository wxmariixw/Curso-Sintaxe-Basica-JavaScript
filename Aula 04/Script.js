/*var jogador1 = 0;
var jogador2 = 0;
var placar;

//If tenário
jogador1 !== -1 && jogador2 !== -1 ? console.log ('Os jogadores são válidos') :
console.log ('Os jogadores são inválidos');

//Usando if
if (jogador1 > 0) {
    console.log('Jogador 01 marcou ponto');
    placar = jogador1 > jogador2

//usando else if
} else if (jogador2 > 0) {
    console.log ('Jogador 02 marcou ponto');
    placar = jogador2 > jogador1

//usando else
} else {
    console.log('Ninguém marcou ponto');
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log ('Jogador 01 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log ('Jogador 02 ganhou');
        break;
    default:
        console.log ('Ninguém Ganhou');
}*/

let array = ['Valor 01', 'Valor 02', 'Valor 03', 'Valor 04', 'Valor 05'];
let object = {propriedade1: 'Valor 01', propriedade2: 'Valor 02', propriedade3: 'Valor 03'};

//For executa uma função até que ela seja falsa
for (let indice = 0; indice < array.length; indice++){
    console.log (indice);
}

//For/in Função a partir de uma propriedade
//Com array
for (let i in array){
    console.log (i)
}

//Com object
for ( i in object){
    console.log(i)
}

//For/of executa repetição a partir de valor
//Com array
for ( i of array){
    console.log(i)
}

//Com object - Ruim de usar
for ( i of object.propriedade1){
    console.log(i)
}

//While - Executa enquanto ela for verdadeira
var a = 0;
while (a < 10){
    a++;
    console.log(a);
}

//Do/While - Executa até que seja falsa
do {
    a++;
    console.log(a);
} while (a < 10)

    