//Los sets evitan valores duplicados y no son clave y valor sino solamente valor
//son como los arreglos

const cart = new Set();

cart.add('phone');
cart.add('disc1');
cart.add('disc2');
cart.add('disc3');

console.log(cart)

//longitud del set
console.log(cart.size);

//eliminar elemento
cart.delete('disc3');

//verificar si un elemento existe
console.log(cart.has('phone'));
//para limpiar todo el set
//cart.clear();

//son iterables

cart.forEach(object =>{
    console.log(object);
})

//Eliminar elementos duplicados de un arreglo con la forma tradicional y con Set
//forma tradicional
const numbers = [10,20,30,50,10,20];

let anyDuplicates=numbers.filter((num, index) =>{
    return numbers.indexOf(num) === index;
   
})
console.log(anyDuplicates);
//con un Set
const noDuplicates=new Set(numbers);
console.log(noDuplicates);




