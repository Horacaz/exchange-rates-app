var Currency = (function () {
    function Currency(_a) {
        var base_code = _a.base_code, conversion_rates = _a.conversion_rates, time_last_update_utc = _a.time_last_update_utc;
        this.baseCode = base_code;
        this.conversionRates = conversion_rates;
        this.lastUpdate = time_last_update_utc;
    }
    return Currency;
}());
export default Currency;
//# sourceMappingURL=Currency.js.map