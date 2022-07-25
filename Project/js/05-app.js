//Symbols, nungun symbol es igual a otro 
//para crear un symbol no se usa New
const sym1= Symbol('1');
const sym2= Symbol('1');

console.log(sym1===sym2);//devolverá falso

const firstName = Symbol();
const lastName=Symbol();

const person={};

//para agregar un symbol como propiedad del objeto debemos hacerlo dentro de corchetes
person[firstName]='Martha';
person[lastName]='Vicari';
person.balance=4000;

console.log(person);

//para acceder al valor del symbol insertado es de la siguiente manera
console.log(person[firstName]);

//Las propiedades que utilizan un symbol no son iterables

//Crear descripción de Symbol

const descClient = Symbol('Descripción del cliente')
const client= {}
client[descClient]='Lisa';
console.log(client);
console.log(descClient);
