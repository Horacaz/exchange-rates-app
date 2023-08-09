Cypress.Commands.add("currenciesSelection", () => {
    cy.get('[data-cy="base-currency"]').select("USD");
    cy.get('[data-cy="target-currency"]').select("ARS");
  });
  