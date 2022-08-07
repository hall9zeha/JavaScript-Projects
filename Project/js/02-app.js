//Constructor pattern //patrón de creación

class Person{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
}

class Client extends Person{
    constructor(name,email,company){
        super(name,email);
        this.company=company;
    }
} 

const newClient= new Client('Martha','mt@mailc.om','Multivac');
console.log(newClient);

