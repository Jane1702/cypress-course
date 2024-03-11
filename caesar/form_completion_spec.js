describe('Form completion', () => {
    it('Should fill out the form fields', () => {
      cy.visit('index.html'); 
      cy.get('#cypherKey').type('6'); 
      cy.get('#textInput').type('Hello World!'); 
    });
  });