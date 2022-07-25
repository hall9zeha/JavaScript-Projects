//WeakSet en este eelemento solo se le pueden pasar objetos 
//a diferencia del Set y también no son iterables

const weakset = new WeakSet();

const client={
    name:'Martha',
    lastName:'Vicari'
}
//Agregamos un objeto

weakset.add(client);

//eliminamos el objeto
//weakset.delete(client);

console.log(weakset);