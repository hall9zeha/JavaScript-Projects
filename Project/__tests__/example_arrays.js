const cart = ['product1', 'product2', 'product3']

describe('Pruebas al carrito de compras', ()=>{

    test('Que el carrito tenga 3 elementos',()=>{
        expect(cart).toHaveLength(3);
    })

    test('Ver que el carrito no esté vacío',()=>{
        expect(cart).not.toHaveLength(0)
    })

})