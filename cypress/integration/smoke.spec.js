describe('Smoke Test', () => {
  it('Makes sure the welcome message comes up!', () => {
    cy.visit('http://localhost:1234')
      .contains('Hello, viewers!');
  });
});
