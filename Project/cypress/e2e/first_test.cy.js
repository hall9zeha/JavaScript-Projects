//Para tener un mejor autocompletado solo de cypress
/// <reference types="cypress"/> 



//probamos un test que nos verifique si existe un elemento h1 con determinado contenido

describe('Carga la página principal', ()=>{
    it('carga la página principal', ()=>{
        //Debemos de decirle a cypress que lugar va a testear
        //Podemos ponerla en cada archivo de test o definerla como url base en cypress.config.js
        // cy.visit('http://127.0.0.1:5500/')
        cy.visit('/index.html')
        cy.contains('h1','Administrador de Pacientes de Veterinaria')
        //Mejores prácticas poner un atributo único a elementos que pueden ser muy genericos como un h1
        cy.get('[data-cy="project-title"]').should('exist');

        //Verificar que exista el elemento y contenga un texto
        cy.get('[data-cy="project-title"]')
            .invoke('text')
            .should('equal','Administrador de Pacientes de Veterinaria')
        cy.get('[data-cy=admin-head]')
            .invoke('text')
            .should('equal','No hay Citas, comienza creando una')
    })


})

