//class Declaration
class Client{
    constructor(name, balance){
        this.name=name;
        this.balance=balance;
    }

    //CREAMOS UNA FUNCIÓN DENTRO DE LA CLASE y esta se agregará al prototype
    showInfoclient(){
        return `Cliente ${this.name} tu saldo es de ${this.balance}`;
    }
    //también podemos crear un método o función estática como en otros lenguales
    static welcome(){
        return `Bienvenido(a) a javaScript`;
    }
}
const newClient=new Client('Martha',500)
console.log(newClient);
console.log(newClient.showInfoclient());
console.log(Client.welcome());//lamamos a la función sin instanciar

//class expresion

const Client_1 = class{
    constructor(name,balance){
        this.name=name;
        this.balance=balance;
    }
     //CREAMOS UNA FUNCIÓN DENTRO DE LA CLASE y esta se agregará al prototype
     showInfoclient(){
        return `Cliente ${this.name} tu saldo es de ${this.balance}`;
    }
    //también podemos crear un método o función estática como en otros lenguales
    static welcome(){
        return `Bienvenido(a) ${this.name}`;
    }

}

const newClient_1= new Client_1('Lisa',5000);
console.log(newClient_1);