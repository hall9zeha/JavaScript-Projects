//Iteradores
//creamos nuestro propio iterador básico

function createIterator(cart){
    let i=0;
    return {
        next:()=>{
            const end=(i>=cart.length);
            const value= !end ? cart[i++]: undefined;

            return  {
                end,value
            }
        }
    }
}

const cart=['product1', 'product2', 'product3'];

const iterateCart = createIterator(cart);

console.log(iterateCart.next());
console.log(iterateCart.next());
console.log(iterateCart.next());
console.log(iterateCart.next());
