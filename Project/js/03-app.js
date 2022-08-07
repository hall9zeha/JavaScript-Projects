//Singleton pattern //patrón de creación

let instance=null;

class Person{
    constructor(name, email){
        if(!instance){
            this.name=name;
            this.email=email;
            instance=this;
        }
        else{
            return instance;
        }
    }
}
const person=new Person('Martha', 'mt@mail.com');
console.log(person);
//no podremos crear otra instancia, y nos mostrará lo mismo
const person2=new Person('Barry','mail@mail.com');
console.log(person2)
