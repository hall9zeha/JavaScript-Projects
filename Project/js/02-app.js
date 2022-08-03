//Pasar funciones como argument
const summ = (a,b) => a+b;
const multiply =(a,b) => a*b;

const sumOrMult= fn => fn(5,5);
console.log(sumOrMult(summ));
console.log(sumOrMult(multiply));