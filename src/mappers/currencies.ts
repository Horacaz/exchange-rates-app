import Currencies from '../entities/Currencies.js';
import { IUnparsedCurrencies, IParsedCurrencies } from '../types/currencies';

export default async function mapCurrencies(currenciesData: IUnparsedCurrencies): Promise<IParsedCurrencies> {
  const {supported_codes} = currenciesData;

  return new Currencies({supported_codes});
}
