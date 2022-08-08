import Citas from '../js/classes/Citas'

describe('Probar la clase de citas',()=>{
    const citas = new Citas();
    const id=Date.now();
    test('Agregar nueva cita',() =>{
        const citaObj = {
            id,
            mascota: 'Any',
            propietario: 'Martha',
            telefono: '132132132',
            fecha: '10-12-2022',
            hora:'9:30',
            sintomas: 'unknown'
        }

       
        citas.agregarCita(citaObj);
        expect(citas).toMatchSnapshot();
        
    })

    test('Actualizar cita',()=>{
        const citaObj = {
            id,
            mascota: 'Any update',
            propietario: 'Martha',
            telefono: '132132132',
            fecha: '10-12-2022',
            hora:'9:30',
            sintomas: 'unknown update'
        }
        citas.editarCita(citaObj);
        expect(citas).toMatchSnapshot();
    })

    test ('Eliminar cita',()=>{
        citas.eliminarCita(id)
        expect(citas).toMatchSnapshot();
    })
})