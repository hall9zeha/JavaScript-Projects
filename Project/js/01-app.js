//ejemplo de callback llamar a una función dentro de otra, en este caso detonandose al agregar un nuevo registro
//al array y actualizando nuestra lista 

const countries = ['Perú', 'Brasil', 'Mexico', 'Canada'];

function newCountrie(countrie, callback){//ya que los parámetros no tienen tipo, callback será un función que vuelva alistar los elementos
    setTimeout(() => {
        console.log('Listado con el nuevo registro');
        countries.push(countrie);
        callback();
    }, 3000);
}

function showCountries(){
    setTimeout(() => {
        countries.forEach(countrie =>{
            console.log(countrie);
        })
    }, 1000);
}
console.log('Listado por primera vez');
showCountries();

newCountrie('Belice',showCountries);//dentro de un parámetro solo debes poner el ombre de una función no llamarla