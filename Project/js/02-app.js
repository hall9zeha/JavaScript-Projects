//Recuperando elementos del local storage
const nameLocal= localStorage.getItem('name');
console.log(nameLocal);

//ahora el objeto
const productJson=localStorage.getItem('Product_1');
console.log(JSON.parse(productJson));//lo convierte en el tipo de elemento que es