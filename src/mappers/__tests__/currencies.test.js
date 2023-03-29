/// <reference types = '@types/jest' />

import Currency from "../../entities/currency.js";
import mapCurrency from "../currency.js";
import currencyFixtureData from "./currency.json";

jest.mock("../../entities/currency.js", () => jest.fn());

test("Map function should return a new currency from data", () => {
  const {
    base_code: baseCode,
    conversion_rates: conversionRates,
    time_last_update_utc: lastUpdate,
  } = currencyFixtureData;

  mapCurrency(currencyFixtureData);
  expect(Currency).toHaveBeenCalledWith(baseCode, conversionRates, lastUpdate);
});
