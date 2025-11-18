///<reference types="cypress" />

describe('Deve carregar à página e verificar se tem título', ()=>{
    beforeEach(()=>{
        cy.visit('http://convite-aniversario-eight.vercel.app/')
        cy.title().should('not.be.empty')
    })


    it('Deve abrir o formulário', ()=>{
        cy.get('#button-form').click()
        cy.get('#nome').type('usuario_teste')
       cy.get('#telefone').type(35991530033)
       cy.get('#presenca').select('Não')
       cy.get('#botao-confirmacao').click()

    })

    // it('Deve permitir fazer a confirmação de comparecimento ao evento.',()=>{
    //    cy.get('#nome').type('usuario_teste')
    //    cy.get('#telefone').type(35991530033)
    //    cy.get('#presenca').type('sim') 
    //    cy.get('#botao-confirmacao').click()

    // })
})