import { elem } from "./pageObjet"

 Cypress.Commands.add('login', (email,senha) =>{
    const user = {
        
        email:'saken70053@kixotic.com',  
        senha:'teste123',
    }
    cy.get('#emailIn')
        .type(user.email)
    cy.get(elem.senha)
        .type(user.senha)
    cy.get(elem.criarConta).click()
    },
 )

    Cypress.Commands.add('logar', (email,senha) =>{
    const logar = {
        
        email:'saken70053@kixotic.com',
        senha:'teste123',
    }
    cy.get(elem.entrar).click()
        cy.get(elem.email).type(logar.email)
        cy.get(elem.password).type(logar.senha)
        cy.get(elem.entrar2).click()
        //cy.contains('Usuario cadastrado com sucesso')
},
    )
    Cypress.Commands.add('credito',() =>{
        const credito ={
            nome: 'Teste Jogatina',
            numero: '5141 5253 0766 6813',
            //validade: '21/04/2',
            ano: '24',
            CVV: '527'
        }
        cy.get(elem.numeroCredito).type(credito.numero)
        cy.get(elem.nomeCredito).type(credito.nome)
        cy.get(elem.validade).select('04')
        cy.get(elem.anoCartao).select('2024')
        cy.get(elem.CVV).type(credito.CVV)
        cy.get(elem.assinar).click()
            .should('be.visible', 'Processando')

    },
    )
