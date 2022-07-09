//Eliminar y actualizar elementos en localstorage
localStorage.removeItem('name');

//actualizar objeto

const updatedProduct= JSON.parse(localStorage.getItem('Product_1'));
console.log(updatedProduct);
updatedProduct.color='black';
console.log(updatedProduct);
localStorage.setItem('Product_1',updatedProduct);

//limpiar localStorage

//localStorage.clear();