//Local storage y session storage
localStorage.setItem('name','Martha');
sessionStorage.setItem('name','Lisa');

//Guardando un objeto como string con Json, cualquier tipos de dato se guarda como tipo json String 
const product = {
    name:'CellPhone',
    price:'3000'
}

const jsonStringProduct= JSON.stringify(product);
localStorage.setItem('Product_1',jsonStringProduct);