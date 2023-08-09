const URL = 'https://v6.exchangerate-api.com/v6/aa91db0af07de43e0e36201b';
import { IUnparsedCurrencies} from "../types/currencies";
import { IUnparsedCurrency } from "../types/currency";

export async function getCurrenciesNamesFromApi(): Promise<IUnparsedCurrencies> {
  try {
    const currencyCodes = fetch(`${URL}/codes`).then((response) => response.json());
    return currencyCodes
  } catch (e: unknown | Error) {
    throw new Error(`Failed to retrieve currencies names from Api: ${e}`);
  }
}

export async function getCurrencyRatesFromApi(base = 'USD'): Promise<IUnparsedCurrency> {
  try {
    const currencyRates = fetch(`${URL}/latest/${base}`).then((response) => response.json());
    return currencyRates
  } catch (e: unknown | Error) {
    throw new Error(`Failed to retrieve currencies rates from Api: ${e}`);
  }
}
