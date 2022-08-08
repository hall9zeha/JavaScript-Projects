//Creando un microframework para testear
function sum(a,b){
    return a + b;
}
function substract(a,b){
    return a-b;
}
let result= sum(2,3);
let expect=5


//probando nuestra función
expected(expect).toBe(result);

result=substract(10,5);
expect=5;

expected(expect).toEqual(result)

function expected(expect){
    return {
        toBe(result){
                    
            if(!result==expect){
                console.error(`El ${result} es diferente a lo esperado: no pasó la prueba`);

            }
            else{
                console.log(`El resultado es ${result} y se esperaba ${expect}, pasó la prueba`)
            }
        },
        toEqual(result){
            if(!result==expect){
                console.error(`El ${result} no es igual a lo esperado: no pasó la prueba`);

            }
            else{
                console.log(`El resultado es ${result} y se esperaba ${expect}, pasó la prueba`)
            }
        }
    }
}