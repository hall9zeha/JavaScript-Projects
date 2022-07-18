
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

//Heredamos de Cliente propiedades comunes en Persona

function Person(name, balance, phone){
    Client.call(this,name,balance)//Herencia
    this.phone=phone;
}

//Heredamos tanto las funciones del prototipe de cliente y su constructor
//Es importante clonar estas propiedades antes de instanciar el prototipo

Person.prototype=Object.create(Client.prototype);
Person.prototype.constructor=Client;

//imprimimos
const newPerson=new Person('Lisa',2000,12547890);
console.log(newPerson);

//Estamos heredando el prototype de Cliente pero no al revés así que podemos añadir nuevas funciones a Person

Person.prototype.getPhone=function(){
    return `El teléfono de ${this.name} es ${this.phone}`;
}

console.log(newPerson.getPhone());