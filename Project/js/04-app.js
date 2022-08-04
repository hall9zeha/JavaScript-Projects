//Implicit binding 'this'

const user ={
    name:'Martha',
    age:26,

    information(){
        console.log(`El nombre del usuario es: ${this.name} y su edad es : ${this.age}`)
    },

    user1:{
        name:'Gilma',
        age:37,
        information(){
            console.log(`El nombre del usuario1 es: ${this.name} y su edad es: ${this.age}`)
        }
    }
}

user.information();
user.user1.information();