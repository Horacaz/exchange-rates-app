/// <reference types = '@types/jest' />

import Currency from '../currency.js';

test('Currencies should return an object from data', () => {
  const baseCode = {};
  const conversionRates = {};
  const lastUpdate = {};

  expect(new Currency(baseCode, conversionRates, lastUpdate))
    .toBeInstanceOf(Currency);
});
