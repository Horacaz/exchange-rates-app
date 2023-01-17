import Currency from "../entities/currency.js";

export default async function mapCurrency(currencyData){
const {
 base_code : baseCode,
 conversion_rates: conversionRates,
 time_last_update_utc: lastUpdate,
} = currencyData;

return new Currency(
baseCode, 
conversionRates, 
lastUpdate,
)
}