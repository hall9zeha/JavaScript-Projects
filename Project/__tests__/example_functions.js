

function sum(a,b){
    return a +b; 
}

function subs(a,b){
    return a - b;
}

describe('Probando las funciones de suma y resta', () =>{
    test('Suma de 30, 26', () =>{
        expect(sum(30,26)).toBe(56)
    })
    test('Resta de 30 menos 26',() =>{
        expect(subs(30,26)).toBe(4)
    })

    test('Que la suma de 30, 26 no sea incorrecta', ()=>{
        expect(sum(30,26)).not.toBe(10)
    })

    test('Que la resta de 30 y 26 no se a incorrecta',()=>{
        expect(subs(30,26)).not.toBe(20)
    })
})