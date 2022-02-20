//Crie uma função adicionar, que deverá receber dois parâmetros
// e retornar a soma deles.

function somar (a,b){
    return a+b;
};

//Crie uma função de subtração, que deverá receber dois parâmetros 
//e retornar a subtração do primeiro menos o segundo.

function subtração (a,b){
    return a - b;
};

//Crie uma função de multiplicação, que deverá receber dois
// parâmetros e retornar o resultado de sua multiplicação.

function multiplicacao (a,b) {
    return a * b;
};

//Crie uma função de divisão, que receberá dois parâmetros e 
//retornará o resultado da divisão do primeiro sobre o segundo.

function divisao (a,b){
    return a/b;
};

//No seu arquivo calculadora.js,  a partir das 4 funções feitas
//anteriormente, crie um console.log no qual você irá colocar 
//uma string para indicar que abaixo dela você começará a testar
// as funções

console.log("Teste de Calculadora");

console.log(somar(1,2));
console.log(subtração(4,2));
console.log(multiplicacao(7,8));
console.log(divisao(5,2));

//Execute a função que faz divisão, passando agora o número zero
// como um dos dois argumentos. Mostre o resultado no console.

console.log(divisao(9,0));

//Crie uma função chamada quadradoDoNumero, que recebe um número
// como parâmetro e deve retornar esse número multiplicado por 
//ele mesmo, ou seja, ao quadrado.
//Importante: quadradoDoNumero() deve usar a função 
//multiplicação() para calcular o quadrado do parâmetro inserido
// em power().

function quadradoDoNumero (numero) {
    return multiplicacao(numero,numero);
};

console.log(quadradoDoNumero(7));

//Crie a função mediaDeTresNumeros, ela deve calcular a média de
// 3 números, que serão inseridos por parâmetro.
//Importante: Em mediaDeTresNumeros() você precisará usar 
//algumas funções criadas anteriormente em nossa calculadora.

/*function mediaDeTresNumeros(numA, numB, numC) {
    const soma1 = adiciona(numA, numB);
    const soma2 = adiciona(soma1, numC);
    const media = divide(soma2,3);
    return media;
}

console.log(mediaDeTresNumeros(1,2,3)); */

function mediaDeTresNumeros(numA,numB,numC){
   let soma1 = somar(numA,numB);
   let soma2 = somar(soma1,numC);
   let media = divisao(soma2,3);

   return media;
};

console.log(mediaDeTresNumeros(1,2,3));

//Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x%
// de totalPorcentagem.
//Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
//Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function calculaPorcentagem(numTotal,porcentagem){
    let decimal = divisao (porcentagem,100);
    let resultado = multiplicacao(decimal,numTotal);

    return resultado;
};

console.log(calculaPorcentagem(300,15));

/*Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200). */


function geradorDePorcentagem(param1,param2){
    let resposta = divisao(param1,100);
    resultado = multiplicacao(resposta,param2);

    return resultado;
};

console.log(geradorDePorcentagem(2,100));
