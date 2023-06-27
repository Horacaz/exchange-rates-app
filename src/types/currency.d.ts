export type IUnparsedCurrency = {
  base_code: string;
  conversion_rates: { [key: string]: number };
  time_last_update_utc: string;
};

export type IParsedCurrency = {
  baseCode: string;
  conversionRates: { [key: string]: number };
  lastUpdate: string;
};
