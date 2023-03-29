import Currencies from "../currencies.js";

test("Currencies should return an object from data", () => {
  const currenciesNames = {};

  expect(new Currencies(currenciesNames)).toBeInstanceOf(Currencies);
});
