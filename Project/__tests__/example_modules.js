
import {sum } from '../js/funciones';
//usamos una función que está en otro módulo
//para usar un módulo importado debemos instalar y usar babel 
describe ('Suma de dos números',() =>{
    test('Sumar 30 y 26, debe dar 56 ',()=>{
        expect(sum(30,26)).toBe(56)
    })
})
