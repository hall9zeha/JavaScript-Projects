//El prototype nos sirve para designar los métodos epecíficos para cada objeto

function Client(name, balance){
    this.name= name;
    this.balance=balance;

}
//creamos un función solo para el objeto cliente
Client.prototype.typeClient=function(){//el function accede a los elementos internos del prototype de Client
    const {name, balance}=this;
    let type;
    if(balance>10000){
        type='Gold'
    }
    else if(balance>5000){
        type='Platinum'
    }
    else {
        type='Normal'
    }
    return type;
}

//creamos otro prototype
Client.prototype.nameAndBalance=function(){
    return `El cliente ${this.name}, tiene un saldo de ${this.balance} y es de tipo ${this.typeClient()}`
    //Podemos acceder a las funciones dentro del prototype creados para el objeto

}

//otra función para el objeto cliente

Client.prototype.getMoney=function(value){
    this.balance -=value;
}

const typeClient=new Client('Martha',5300);
console.log(typeClient.typeClient());
console.log(typeClient.nameAndBalance());
typeClient.getMoney(1000)


console.log(typeClient.nameAndBalance());
