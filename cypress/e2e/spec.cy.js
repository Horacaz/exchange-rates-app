describe('My First Test', () => {
  it('Visits Exchange-Rates Webpage', () => {
    cy.visit('http://192.168.0.17:8080');
    cy.contains('Select').click();
    cy.url().should('include', '/');
  });
});
