//Funciones que retornan una función
const getFunction = () => ()=> console.log('Martha');

const fn= getFunction();
fn();