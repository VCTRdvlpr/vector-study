// Exercicio 01 
// Leia um vetor de 12 posições e em seguida ler também dois valores X e Y quaisquer correspondentes a duas 
//posições no vetor. Ao final seu programa deverá escrever a soma dos valores encontrados nas respectivas posições 
//X e Y.

const resultEX01 = document.getElementById("ex01")
const resultEX02 = document.getElementById("ex02")

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


var x = numeros[3];
var y = numeros[7];

var soma = (x+y);

resultEX01.textContent = "Resultado Exercício 01: " + soma;


//Exercício 02
//Declare um vetor de 10 posições e o preencha com os 10 primeiros números impares e o escreva.

var numerosImpar = [];

for(var i = 1; i <= 20; i += 2){
    numerosImpar.push(i);
}

resultEX02.textContent =  "Resultado Exercício 02: " + numerosImpar;
