

//para actualizar el snapshots con otro actual que este usando npm t -- -u
const client={
    name:'Martha',
    balance: 4000,
    type:'premium'
}

describe('Testeando al cliente',()=>{
    test('Es Martha?',()=>{
        expect(client).toMatchSnapshot()
    })

})