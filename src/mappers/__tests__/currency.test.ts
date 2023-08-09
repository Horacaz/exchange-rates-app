import Currency from '../../entities/Currency';
import mapCurrency from '../currency';
import currencyFixtureData from '../../../fixtures/currency.json';
import { IUnparsedCurrency } from '../../types/currency';

jest.mock('../../entities/Currency', () => jest.fn());

test('Map function should return a new currencies names from data', () => {
  const {
    base_code,
    conversion_rates,
    time_last_update_utc
  }: IUnparsedCurrency = currencyFixtureData;
  mapCurrency(currencyFixtureData);
  expect(Currency).toHaveBeenCalledWith({
    base_code,
    conversion_rates,
    time_last_update_utc
  });
});
