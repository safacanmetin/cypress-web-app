describe('Login Test', () => {
  it('Logs in with valid credentials', () => {
      cy.visit('http://localhost:3000'); // Replace with the actual URL where your web app is running
      cy.get('input[name="username"]').type('user');
      cy.get('input[name="password"]').type('password');
      cy.get('button[type="submit"]').click();
      cy.get('#message').should('be.visible');
      cy.get('#welcome-message').should('have.text', 'Welcome, user!');
  });
});