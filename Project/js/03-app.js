/**
 * Higher order function
 * Un función que retorna otra función como argumento
 * 
 */

 (function(){
    const carrito = [
        { nombre: 'Monitor 20 Pulgadas', precio: 500},
        { nombre: 'Televisión 50 Pulgadas', precio: 700},
        { nombre: 'Tablet', precio: 300},
        { nombre: 'Audifonos', precio: 200},
        { nombre: 'Teclado', precio: 50},
        { nombre: 'Celular', precio: 500},
        { nombre: 'Bocinas', precio: 300},
        { nombre: 'Laptop', precio: 800},
    ];

    const major400 = product =>{
        return product.precio >400;
    }

    const result=carrito.filter(major400);
    console.log(result);


})();
