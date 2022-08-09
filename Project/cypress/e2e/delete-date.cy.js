/// <reference types="cypress"/> 

describe('Llena los campos para una nueva cita y la edita',()=>{
    it('Campos nueva cita',()=>{

        cy.visit('/index.html')
        cy.get('[data-cy=pet-input]')
            .type('Mascota nueva')
        
        cy.get('[data-cy=owner-input]')
            .type('Martha')
            
        cy.get('[data-cy=phone-input]')
            .type('12548965')

        cy.get('[data-cy=date-input]')
            .type('2022-08-09')
        
        cy.get('[data-cy=time-input]')
            .type('13:20')
        
        cy.get('[data-cy=signals-input]')
            .type('Síntomas desconocidos')

        cy.get('[data-cy=submit-form]')
            .click()
        
        cy.get('[data-cy=admin-head]')
            .invoke('text')
            .should('equal', 'Administra tus Citas ')

        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')
    })
    
    it('Eliminar cita',()=>{
        cy.get('[data-cy=btn-eliminar]')
            .click();

        cy.get('[data-cy=admin-head]')
            .invoke('text')
            .should('equal','No hay Citas, comienza creando una') 
    })
})