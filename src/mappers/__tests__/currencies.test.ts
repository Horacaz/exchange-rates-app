import { IUnparsedCurrencies } from '../../types/currencies';
import Currencies from '../../entities/Currencies';
import mapCurrencies from '../currencies';
import currenciesNamesFixtureData from '../../../fixtures/currencies.json';

jest.mock('../../entities/currencies', () => jest.fn());
describe('mapCurrencies', () => {
  test('mapCurrencies is a function', () => {
    expect(typeof mapCurrencies).toEqual('function');
  });
  test('Map function should return a new currencies names from data', () => {
    const { supported_codes: currenciesNames }: IUnparsedCurrencies = currenciesNamesFixtureData;
    mapCurrencies(currenciesNamesFixtureData);
    expect(Currencies).toHaveBeenCalledWith({
      supported_codes: currenciesNames
    });
  });
});
