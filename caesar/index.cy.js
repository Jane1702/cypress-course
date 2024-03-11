describe('Result display', () => {
    it('Should display the correct result after form submission', () => {
      cy.visit('index.html');
      cy.get('#cypherKey').type('6');
      cy.get('#textInput').type('Hello World!');
      cy.get('#cypherButton').click();
      cy.get('#result').should('contain', 'Nkrru Cuxrj!');
    });
  });