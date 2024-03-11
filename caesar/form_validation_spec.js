describe('Form validation', () => {
    it('Should submit the form and validate success', () => {
      cy.visit('index.html'); 
      cy.get('#cypherButton').click();
      cy.get('#result').should('not.be.empty');
    });
  });