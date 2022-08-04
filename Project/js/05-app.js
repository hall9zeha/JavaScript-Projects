//Explicit binding

function person(element1,element2 ){
    console.log(`Mi nombre es ${this.name}, y me gusta ${element1}, y ${element2}`);
   //ese this hace referencia a un objeto que le pasaremos por la método call que tiene cualquier función de JS
}

const information = {
    name:'Barry'
}

const hobbies=['El futbol', 'Esculpir figuras'];
/**
 * usamos call para pasarle el objeto y las posiciones del arreglo 
 * que corresponden al elemento1 y 2
 */
person.call(information,hobbies[0],hobbies[1]);
//con apply se puede pasar el arreglo completo
person.apply(information,hobbies);
//con bind te creará una nueva función

const newPerson = person.bind(information,hobbies[0],hobbies[1])
newPerson();
