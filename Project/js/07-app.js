//Event loop, la prioridad de ejecución que tienen las funciones o eventos en JS

console.log('Primero');

setTimeout(() => {
    console.log('Segundo')
}, 0);

console.log('Tercero')

setTimeout(() => {
    console.log('Cuarto')
}, 0);

new Promise(function(resolve){
    resolve('unknown')
}).then(console.log)

console.log('último');

function helloWorld(){
    console.log('Hello world')
}

helloWorld();

