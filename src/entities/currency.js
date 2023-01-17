export default class Currency {
  constructor(baseCode, conversionRates, lastUpdate) {
    this.baseCode = baseCode;
    this.conversionRates = conversionRates;
    this.lastUpdate = lastUpdate;
  }
}
