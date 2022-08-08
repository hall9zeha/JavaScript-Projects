
const client = {
    name: 'Martha',
    balance: 5000
}

describe('Pruebas al objeto cliente', ()=>{
    test('El cliente es premium',()=>{
        expect(client.balance).toBeGreaterThan(4000)
    })

    test('El cliente es Martha?', ()=>{
        expect(client.name).toBe('Martha')
    })

    test('No es otro cliente', () =>{
        expect(client.name).not.toBe('Barry')
    })

    test('no tiene 3000',()=>{
        expect(client.name).not.toBe(3000)
    })
})