import Currencies from '../entities/currencies.js';

export default async function mapCurrencies(currenciesData) {
  const {
    supported_codes: currenciesNames,
  } = currenciesData;

  return new Currencies(
    currenciesNames,
  );
}
