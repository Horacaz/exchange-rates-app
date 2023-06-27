import Currency from '../Currency';
import { IUnparsedCurrency } from '../../types/currency';

test('Currency should return an object from data', () => {
  const currencyMock: IUnparsedCurrency = {
    base_code: 'USD',
    conversion_rates: {
      ARS: 1,
      USD: 142.1134
    },
    time_last_update_utc: '2022-12-01T00:00:00.000Z'
  };
  const newCurrency = new Currency(currencyMock);
  expect(newCurrency).toBeInstanceOf(Currency);
});
