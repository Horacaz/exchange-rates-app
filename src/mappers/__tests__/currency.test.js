/// <reference types = '@types/jest' />

import Currencies from "../../entities/currencies.js";
import mapCurrencies from "../currencies.js";
import currenciesNamesFixtureData from "./currencies.json";

jest.mock("../../entities/currencies.js", () => jest.fn());

test("Map function should return a new currencies names from data", () => {
  const { supported_codes: currenciesNames } = currenciesNamesFixtureData;

  mapCurrencies(currenciesNamesFixtureData);
  expect(Currencies).toHaveBeenCalledWith(currenciesNames);
});
