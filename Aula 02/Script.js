// tipos primitivos

//boolean
var vOuF = false;
console.log (typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'Diana'
console.log(typeof(nome));

//como declarar
var variavel = 'Diana';
variavel = 'Martine';//Irá alterar
console.log(variavel);

let variavel2 = 'Diana';
variavel2 = "Martine"; //Irá alterar

const constante = 'Diana';
constante = 'Martine'; //Vai voltar como erro
console.log (constante);

//Variável está sendo vista por todo código
var escopoGlobal = 'Global';
console.log(escopoGlobal);

//Variável sento vista apenas dentro da função
function escopolocal(){
    let escopolocalinterno = 'local';
    console.log(escopolocalinterno);
}
escopolocal();

//Atribuição
var atribuicao = 'Diana';

//Comparação
var comparacao = '0' == 0;

//Comparação identica
var comparcaoidentica = '0' === 0;

//adicao
var adicao = 1 + 1;
console.log (adicao);

//subtração
var subtracao = 2 - 1;
console.log (subtracao);

//multiplicação
var multiplicacao = 2 * 3;
console.log (multiplicacao);

//divisão real
var divisaoreal = 6 / 2;
console.log (divisaoreal);


//divisão inteira
var divisaointeira = 5 % 2
console.log (divisaointeira);

//potenciação
var potenciacao = 2**10;
console.log (potenciacao);

//Valores relacionais
var maiorQue = 5 > 2
console.log (maiorQue);

var menorQue = 5 < 2
console.log (menorQue);

var maiorOuIgual = 5 >= 2;
console.log (maiorOuIgual);

var menorOuIgual = 5 <= 2;
console.log (menorOuIgual);

//Operadores lógicos
var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);

