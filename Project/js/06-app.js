//Mixin pattern - patrón de orgnización

class Person{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

}

const functionsPerson = {
    showInfo(){
        console.log(`nombre ${this.name}, email ${this.email}`);
    }
}

//Añadimos las funciones al prototype de la clase persona

Object.assign(Person.prototype,functionsPerson);

const client = new Person('Martha','mt@mail.com');
console.log(client);
client.showInfo();