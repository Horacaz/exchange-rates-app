const URL = 'https://v6.exchangerate-api.com/v6/aa91db0af07de43e0e36201b';

export async function getCurrenciesNamesFromApi() {
  try {
    return fetch(`${URL}/codes`)
      .then((response) => response.json());
  } catch (e) {
    throw new Error(e);
  }
}

export async function getCurrencyRatesFromApi(base = 'USD') {
  try {
    return fetch(`${URL}/latest/${base}`)
      .then((response) => response.json());
  } catch (e) {
    throw new Error(e);
  }
}
