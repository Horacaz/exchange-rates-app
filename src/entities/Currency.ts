import { IParsedCurrency, IUnparsedCurrency } from '../types/currency';
export default class Currency implements IParsedCurrency {
  baseCode: string;
  conversionRates: { [key: string]: number };
  lastUpdate: string;
  constructor({
    base_code,
    conversion_rates,
    time_last_update_utc
  }: IUnparsedCurrency) {
    this.baseCode = base_code;
    this.conversionRates = conversion_rates;
    this.lastUpdate = time_last_update_utc;
  }
}
