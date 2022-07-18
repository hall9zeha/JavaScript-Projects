//El prototype nos sirve para designar los métodos epecíficos para cada objeto

function Client(name, balance){
    this.name= name;
    this.balance=balance;

}
function Enterprise(name, balance, category){
    this.name=name;
    this.balance=balance;
    this.category=category;
}

const Martha= new Client('Martha',700);

function formatClient(client){
    const {name,balance}=client;
    return `El cliente ${name} tiene un saldo de ${balance}`;
}
function formatEnterprise(enterprise){
    const {name,balance, category}=enterprise;
    return `El cliente ${name} tiene un saldo de ${balance} y pertenece a la categoría de ${category}`;
}

console.log(formatClient(Martha));

const newEnterprise = new Enterprise('Multivac',5000,'Quantum experiments');
console.log(formatEnterprise(newEnterprise));

