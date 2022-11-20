import { elem } from "./pageObjet"

 Cypress.Commands.add('login', (email,senha) =>{
    const user = {
        
        email:'saken70053@kixotic.com',  
        senha:'teste123',
    }
    cy.get(elem.email)
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
