/// <reference types="cypress" />

import { elem } from "../pageObjet"

class login{

    logoff(){
        cy.get(elem.profile)
            .trigger('mousemove')
        cy.contains('Sair')
                
                .click({force: true} )
        //cy.contains('Usuario deslogado com sucesso.')
    }

    menuJogar(){
        cy.get(elem.jogar) //Deve clicar no menu JOGAR
          .contains('Jogar ')
          .click()
        cy.contains('Para continuar, acesse sua conta ou faça um cadastro rápido no Jogatina.com')
    }

    nossosJogos(){
        cy.get(elem.nossosJogos) //Deve clicar no menu Nossos Jogos
          .contains('Nossos jogos')
          .click()
        cy.contains('Nossos Jogos')
    }

    nossosApp(){
        cy.get(elem.nossosAplicativos) //Deve clicar no menu Nossos Jogos
          .contains('Nossos aplicativos')
          .click()
        cy.title('Jogos de carta para celulares e tablets! Jogatina Apps')
    }

    menuMais(){
        cy.get(elem.mais) //Deve clicar no menu MAIS
          .contains('Mais ')
          .trigger('mousemove')
         cy.contains('Suporte') //Faz a validação dos submenus.
         cy.contains('Acordo de utilização')
         cy.contains('Política de privacidade')
         cy.contains('Mapa do site')
        
    }
          
    }


export default new login