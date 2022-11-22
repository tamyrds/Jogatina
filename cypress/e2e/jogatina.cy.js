/// <reference types="cypress" />

import home from "../support/pageObject/home";
import { elem } from "../support/pageObjet";

/**
 * Login e senha estão no arquivo commands.js
 * Dados do cartão estão em commands.js
 */

describe('Validar site jogatina', () => {
  beforeEach(() => { 
    cy.visit(Cypress.env('URL'))
    cy.viewport(1536, 960)
    cy.title('Jogatina')
  })

  it('Validar fluxo de cadastro', () => {
      cy.get(elem.cadastre)
        .click() 
        .should('be.visible', 'Cadastre-se agora mesmo!')
      cy.login() //Deve realizar cadastro com email/senha
      
  });
  it('Deve deslogar do sistema', () => {
    cy.once('uncaught:exception', () => false);
      cy.logar()
      home.logoff()// Deve deslogar do sistema.
  });

  it.only('Deve validar fluxo Seja Vip', () => {
    cy.logar()
      home.sejaVip()
  });

  it('Deve validar menu Jogar', () => {
    home.menuJogar()
  });

  it('Deve validar menu Nossos Jogos', () => {
    login.nossosJogos()
  });

  it('Deve validar menu Nossos aplicativos', () => {
    home.nossosApp()
  });

  it('Deve validar menu Mais', () => {
    home.menuMais()
  });


})