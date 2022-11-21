/// <reference types="cypress" />

import { elem } from "../pageObjet"

class home{

    logoff(){
        cy.get(elem.profile)
            .trigger('mousemove')
        cy.contains('Sair')
                
                .click({force: true} )
        //cy.contains('Usuario deslogado com sucesso.')
    }

    sejaVip(){
        cy.get(elem.sejaVip)
          .contains('Seja Vip!')
          .click()
        cy.contains('Selecione o plano que você deseja')
        cy.get(elem.anual)
          .should('be.visible', 'Anual')
          
    }

//Deve clicar no menu JOGAR
    menuJogar(){
        cy.get(elem.jogar) 
          .contains('Jogar ')
          .click()
        cy.contains('Para continuar, acesse sua conta ou faça um cadastro rápido no Jogatina.com')
    }
/**
 * Deve clicar no menu Nossos Jogos
 */

    nossosJogos(){
        cy.get(elem.nossosJogos) 
          .contains('Nossos jogos')
          .click()
        cy.contains('Nossos Jogos')
    }
/**
 * Deve clicar no menu Nossos Jogos
 * E realiza validação do titulo da pagina para confirmação.
 */

    nossosApp(){
        cy.get(elem.nossosAplicativos) 
          .contains('Nossos aplicativos')
          .click()
        cy.title('Jogos de carta para celulares e tablets! Jogatina Apps')
    }
/**
 * Deve clicar no menu MAIS
 * Faz a validação dos submenus.
 */

    menuMais(){
        cy.get(elem.mais) 
          .contains('Mais ')
          .trigger('mousemove')
         cy.contains('Suporte') 
         cy.contains('Acordo de utilização')
         cy.contains('Política de privacidade')
         cy.contains('Mapa do site')
        
    }
          
    }


export default new home