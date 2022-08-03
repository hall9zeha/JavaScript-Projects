//Partials y curring, dividir una función en pequeñas partes

const sum = (a,b,c) => a+b+c;

const partial1 = a =>(b,c) => sum(a,b,c);

const first=partial1(5);
const result1= first(4,8);
console.log(result1);

const partial2= a=>b=>c=> sum(a,b,c);

const firstNumber = partial2(6);
const secondNumber = firstNumber(8);
const result2= secondNumber(7);

//reduciendo más

const resultPartial3 = partial2(9)(10)(20)

console.log(result2);
console.log(resultPartial3);
