import initialize from '../app';
import handleExchange from '../ui/currencyExchange.js';
jest.mock("../ui/currencyExchange", () => jest.fn());
jest.mock("../services/CurrencyService", () => jest.fn());
jest.mock("../services/StorageService", () => jest.fn());
jest.mock("../services/ExchangeRatesService", () => jest.fn( () => ({
    getCurrencies: jest.fn(),
    getCurrencyRates: jest.fn()
})));
describe("Currencies App", () => {
    test("Correctly initializes with expected providers", async () => {
        await initialize();
        expect(handleExchange).toHaveBeenCalledTimes(1);
    });
})