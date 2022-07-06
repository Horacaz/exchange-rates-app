export function getCurrencyRatesStorage(base) {
  const Base = JSON.parse(localStorage.getItem(base));
  console.log(Base);
  return Base;
}

export function getCurrenciesNamesStorage() {
  const Currencies = JSON.parse(localStorage.getItem('currencies'));
  console.log(Currencies);
  return Currencies;
}
