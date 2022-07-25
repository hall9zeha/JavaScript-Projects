//Generador una función que retorna un iterador

function  *createGenerator(){//sintaxis para crear un generator con * al inicio
    yield 1;//yield es reservado de generator, es la forma en que mostrará los elementos
    yield 'Martha';
    yield 5*5;
    yield true;

}

const iterator = createGenerator();

console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator);

function *generatorCart(cart){
    for(let i=0; iterateCart.length; i++){
        yield cart[i];
    }
}

const cart=['product1','product2', 'product3'];

const iterator = generatorCart(cart);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());