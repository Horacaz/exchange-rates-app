import { IParsedCurrencies, IUnparsedCurrencies } from '../types/currencies';
export default class Currencies implements IParsedCurrencies {
  supportedCodes: string[][];
  constructor(currenciesNames: IUnparsedCurrencies) {
    this.supportedCodes = currenciesNames.supported_codes;
  }
}
