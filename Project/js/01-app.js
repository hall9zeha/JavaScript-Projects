/**
 * JS soporta first class function, que permite asignar una función a una variable como si esta fuera
 * un tipo de dato que retorna o no un valor;
 * 
 */

const sum= function (a ,b){
    return a + b;
}

const result = sum;
console.log(result(5,5));