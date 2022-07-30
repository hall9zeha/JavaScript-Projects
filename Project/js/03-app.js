//Promises

const applyDiscount = new Promise((resolve, reject)=>{
    const discount = true;

    if (discount){
        resolve('Descuento aplicado')
    }
    else{
        reject('No se aplicó el descuento');
    }
})

//capturamos los eventos 'then' si fue exitoso, y si hubo un error con 'catch', para elegir una acción en consecuencia
applyDiscount.then(result=>{
//podemos ejecutar código o cualquier función
console.log(result);
})
.catch(error=>{
//podemos ejecutar código o cualquier función
console.log(error);
})