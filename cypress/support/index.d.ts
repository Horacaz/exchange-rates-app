export {}
declare global {
   namespace Cypress {
       interface Chainable {
        currenciesSelection(): Chainable<void>;
       }
   }
}