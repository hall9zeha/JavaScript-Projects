const client={
    name:'Martha',
    balance:500
}

console.log(client);

//una forma más dinámica y reutilizable de un objeto cliente

function Client(name, balance){
    this.name=name;
    this.balance=balance;
}

const newClient= new Client('Lisa', 4000);
console.log(newClient);