//Self dirigido a la ventana global

self.onload = () =>{
    console.log('Ventana lista')
}

const product={
    name:'phone',
    price:5200,
    showInfo: function(){
        self = this;
        return `El producto es un : ${self.name}`;
    }
}

console.log(product.showInfo());