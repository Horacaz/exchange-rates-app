import Currencies from '../../entities/Currencies';
import mapCurrencies from '../currencies';
import currenciesNamesFixtureData from '../../../fixtures/currencies.json';

jest.mock('../../entities/Currencies', () => jest.fn());
describe('mapCurrencies', () => {
  test('mapCurrencies is a function', () => {
    expect(typeof mapCurrencies).toEqual('function');
  });
  test('Map function should return a new currencies names from data', async () => {
    await mapCurrencies(currenciesNamesFixtureData);
    expect(Currencies).toHaveBeenCalledWith(
      { supported_codes: currenciesNamesFixtureData.supported_codes}
    );
  });
});
