function downloadClient(){
    return new Promise((resolve, reject) =>{
        const error = false;

        setTimeout(() => {
            if(!error){
                resolve('La lista de cliente se descargó correcatmante');
            }else{
                reject('error en la conexión')
            }
        }, 3000);
    })
}
//con function expression
const execute = async () => {
    try {
        const result= await downloadClient();
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

execute();