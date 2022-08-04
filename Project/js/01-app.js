//Scope global, dentro de una función o un bloque

const scopeClient= 'Martha';//Scope global

function scopeFunction(){
    const isDesigner=true;
    const scopeClient= 'Barry';//Scope dentro de una función
    console.log(scopeClient);

    if(isDesigner){
        const scopeClient = 'Martha'//Scope en un bloque de código
        console.log(scopeClient);
    }

}


scopeFunction();