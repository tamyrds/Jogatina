/// <reference types="cypress" />

import login from "../support/pageObject/login";
import { elem } from "../support/pageObjet";

/**
 * Login e senha estão no arquivo commands.js
 */

describe('Validar site jogatina', () => {
  beforeEach(() => { 
    cy.visit(Cypress.env('URL'))
    cy.viewport(1536, 960)
    cy.title('Jogatina')
  })

  it('Validar fluxo de cadastro', () => {
      cy.get(elem.cadastre)
        .click() //Deve clicar no botão cadastre-se
        .wait(10)
        .should('be.visible', 'Cadastre-se agora mesmo!')
        .wait(20)
      cy.login() //Deve realizar cadastro com email/senha
      
  });
  it.only('Deve deslogar do sistema', () => {
    cy.once('uncaught:exception', () => false);
      cy.logar()
      login.logoff()// Deve deslogar do sistema.
  });

  it.only('Deve validar menu Jogar', () => {
    login.menuJogar()
  });

  it.only('Deve validar menu Nossos Jogos', () => {
    login.nossosJogos()
  });

  it.only('Deve validar menu Nossos aplicativos', () => {
    login.nossosApp()
  });

  it.only('Deve validar menu Mais', () => {
    login.menuMais()
  });

  test

})