//class Declaration
class Client{
    constructor(name, balance){
        this.name=name;
        this.balance=balance;
    }

    //CREAMOS UNA FUNCIÓN DENTRO DE LA CLASE y esta se agregará al prototype
    showInfo(){
        return `Cliente ${this.name} tu saldo es de ${this.balance}`;
    }
    //también podemos crear un método o función estática como en otros lenguales
    static welcome(){
        return `Bienvenido(a) a javaScript`;
    }
}

//Herencia
class Enterprise extends Client{
    //ya que agregaremos propiedades extra solo en enterprise debemos sobreescribir el constructor
    constructor(name,balance, phone,category){  
        super(name,balance)
        this.phone=phone;
        this.category=category;

    }
    //al crear un método o función con el mismo nombre que en la clase heredada, este se reescribe
    static welcome(){
        return `Bienvenido(a) a la Empresa`;
    }

}

const newClient=new Client('Martha',500)
const enterprise=new Enterprise('Multivac',400000,12546879,'Develop');
console.log(enterprise.showInfo());
console.log(Enterprise.welcome());

