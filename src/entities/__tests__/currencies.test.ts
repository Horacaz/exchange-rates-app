import { IUnparsedCurrencies } from '../../types/currencies';
import Currencies from '../Currencies';
test('Currencies should return an object from data', () => {
  const currenciesNamesMock: IUnparsedCurrencies = {
    supported_codes: []
  };

  const newCurrencies = new Currencies(currenciesNamesMock);
  expect(newCurrencies).toBeInstanceOf(Currencies);
});
