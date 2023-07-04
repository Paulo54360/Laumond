/// <reference types="cypress" />

describe('Navbar', () => {
    beforeEach(() => {
      cy.visit('/');  // Visite la page d'accueil de votre application
    });
  
    it('should display the correct items', () => {
      // Vérifie que les éléments du menu sont présents
      cy.get('p-menubar').within(() => {
        cy.contains('Patrick Laumond').should('be.visible');
        cy.contains('MétaHisme').should('be.visible');
        cy.contains('Biographie').should('be.visible');
        cy.contains('Oeuvres').should('be.visible');
        cy.contains('Analyses').should('be.visible');
      });
    });
  
    it('should be able to switch languages', () => {
      // Vérifie que le bouton de changement de langue est présent et peut être cliqué
      cy.get('button.flags').click();
  
      // Après avoir cliqué sur le bouton, vérifiez que la langue a changé.
      // Vous pouvez le faire en vérifiant que le texte des éléments du menu a changé.
      // Vous aurez besoin de remplacer 'TranslatedMenuItem' par le texte traduit correspondant.
      cy.contains('TranslatedMenuItem').should('be.visible');
    });
  });
  