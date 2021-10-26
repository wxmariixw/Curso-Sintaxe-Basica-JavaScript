// Vetores e Arrarys

//Declarando Arrays
/*let array = ['String', 1, true];
console.log(array);

//Vários tipos de dados
let array = ['String', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[3]);

//Manipulando Array
array.forEach(function (item, index){console.log(item, index)});

//Adiciona novo item
array.push('novo item');
console.log(array);

//Retira ultimo item
array.pop();
console.log (array);

//Retira primeiro item
array.shift();
console.log (array);

//Adiciona item no inicio
array.unshift('novo item no inicio');
console.log(array);

//Mostra o indice do item selecionado
console.log(array.indexOf(true));

//Remove ou substitui um item pelo índice
array.splice[0, 3]
console.log(array);

//Retorna parte de um array existente
array.slice[0, 3]
console.log(array);*/

let object = {
    String:'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'Objeto Interno'}
}

/*console.log (object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);*/

var {string, boolean, objectInterno} = object;
console.log (string, boolean, objectInterno);