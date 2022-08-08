const { expect } = require("expect");

const password ="123456";
describe('Verificamos si el password no está vacío y tenga 6 caracteres', ()=>{
    test('Verificar que tenga 6 caracteres',()=>{
        expect(password).toHaveLength(6);
    })

    test('que el password no esté vacío',()=>{
        //que la longitur sea diferente de 0
        expect(password).not.toHaveLength(0);
    }) 
} )
