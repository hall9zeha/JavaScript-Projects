//WeakMaps
//no son iterables y solo aceptan objetos

const product ={
    id:1
}

const weakmap = new WeakMap();

weakmap.set(product, 'Laptop');

console.log(weakmap.has(product));
console.log(weakmap.get(product));
//console.log(weakmap.delete(product));

console.log(weakmap);