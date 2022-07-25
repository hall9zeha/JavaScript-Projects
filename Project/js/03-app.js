//Maps listas ordenadas clave y valor

const client = new Map();

client.set('name', 'Martha');
client.set('type','Normal');
client.set('balance', 3000);
//tamaño del map
console.log(client.size);
//si un elemento existe a través de su clave
console.log(client.has('name1'));
//traer un elemento a través de su clave
console.log(client.get('name'));

//eliminar un elemento

client.delete('balance');

//limpiar todo el map
//client.clear()

console.log(client);

//Iniciar un map con elemetos
const product = new Map([['name','watch'],['price', 100]]);
product.set('trademark','Casio');
product.set('price',200);//sobresscribimos un valor a través de su clave

console.log(product);
//y son iterables
product.forEach((data, index)=>{
    console.log(`${index} : ${data}`);
})