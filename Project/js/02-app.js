//usando moment js librería para dar formato a las fechas

const today= new Date();
moment.locale('es');
console.log(moment().format('MMMM D YYYY h:m:ss a'))
console.log(moment().format('LLLL', today));
console.log(moment().add(3, 'days').calendar());