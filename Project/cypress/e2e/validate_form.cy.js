///<reference types="cypress"/>

describe('Valida el formulario de citas',()=>{
    it('Submit al formulario y mostrar alerta de  error',() =>{
        // cy.visit('http://127.0.0.1:5500/')
        cy.visit('/index.html')
        //Emulamos el presionar el submit 
        cy.get('[data-cy=date-form]')
            .submit()

        //Seleccionar alert -> el data-cy se le agrega con código JS desde la función mostrar alerta en UI
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal','Todos los campos son Obligatorios')
        //Verificamos si tiene la clase alert-danger
        cy.get('[data-cy=alerta]')
            .should('have.class','alert-danger')
            

    })
})