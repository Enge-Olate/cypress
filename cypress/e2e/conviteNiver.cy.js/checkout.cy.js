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

    it('Deve retornar erro com os input telefone vazio', ()=>{
        cy.get('#button-form').click()
        cy.get('#nome').type('usuario_teste')
        // cy.get('#telefone').type(35991530033)
        cy.get('#presenca').select('Não')
        cy.on('window:alert', (msg)=>{
                expect(msg).to.contain('Por favor, preencha todos os campos antes de confirmar sua presença.')
            })

        cy.get('#botao-confirmacao').click()
    })
    
})
        