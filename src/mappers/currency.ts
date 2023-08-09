import Currency from '../entities/Currency.js';
import { IUnparsedCurrency, IParsedCurrency } from '../types/currency';

export default async function mapCurrency(
  currencyData: IUnparsedCurrency
): Promise<IParsedCurrency> {
  const { base_code, conversion_rates, time_last_update_utc } = currencyData;

  return new Currency({ base_code, conversion_rates, time_last_update_utc });
}
