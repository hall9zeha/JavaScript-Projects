//la lógica del testing un ejemplo demasiado sencillo
function sum(a,b){
    return a + b;
}

const result= sum(2,3);
const expected=5

if(!result==5){
    console.error(`El ${result} es diferente a lo esperado: no pasó la prueba`);

}
else{
    console.log(`El resultado es ${result} y se esperaba ${expected}, pasó la prueba`)
}