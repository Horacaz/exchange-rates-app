beforeEach(() => {
  cy.intercept('GET', '**/codes', { fixture: 'currencies.json' }).as('GetCurrencies');
  cy.intercept('GET', '**/latest/*', { fixture: 'USD.json' }).as('USDExchangeRates');
});

describe('Visit Exchange Rates App', () => {
  it('Homepage displays', () => {
    cy.visit('http://127.0.0.1:8080');
    cy.get('[data-cy="title"]')
      .should('have.text', 'Exchange Rates App');
  });
});

describe('Exchange Rate Service Displays', () => {
  it('Currencies Selection Displays', () => {
    cy.get('[data-cy="base-currency"]')
      .select('USD')
      .should('contain.text', 'USD');
  });

  it('Currency Table is generated after selecting a Base Currency', () => {
    cy.get('[data-cy="currency-table"]')
      .children()
      .should('have.length', '162');
  });

  it('Currency Exchange between Base and Target based on Amount', () => {
    cy.currenciesSelection();
    cy.get('[data-cy="base-currency-amount"]')
      .type('1');
    cy.get('[data-cy="target-currency-amount"]')
      .should('have.value', '141.4841');
  });

  it('Equivalency is properly shown on exchange', () => {
    cy.currenciesSelection();
    cy.get('[data-cy="equivalency"]')
      .should('contain.text', '1 USD is equivalent to 141.4841 ARS.');
  });
});
