//Try catch

console.log(5*5);

try {
    helloWorld() //no esta definida la función así que nos dará un error que capturaremos
    //ya que cualquier error evita que se ejecuten líneas de código posteriores
} catch (error) {
    console.log(error);
}

console.log('Ejecución posterior al try catch');