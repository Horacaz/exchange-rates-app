/// <reference types = '@types/jest' />

/*
jest.mock("../ui/currency-exchange.js");

jest.mock("../services/load-currency.js");

jest.mock("../mappers/currencies.js");

import initialize from "../app.js";

import * as loadCurrency from "../services/load-currency.js";

import {
  createBaseCurrencyOptions,
  createTargetCurrencyOptions,
  handleExchange,
} from "../ui/currency-exchange.js";

import * as mapCurrency from "../mappers/currencies.js";

test("Initializes", async () => {
  const getNamesSpy = jest.spyOn(loadCurrency, 'getCurrenciesNames')
  .mockImplementationOnce(() => jest.fn())

  const mapCurrencySpy = jest.spyOn(mapCurrency, 'default')
  .mockImplementationOnce(() => jest.fn())

  initialize();
 expect(mapCurrencySpy).toHaveBeenCalled();

});
*/