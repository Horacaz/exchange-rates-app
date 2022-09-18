/// <reference types ='@types/jest' />
beforeEach( () => jest.clearAllMocks());

  import {getCurrencyRates, 
    getCurrenciesNames} from '../load-currency.js'

    import * as api from '../../api/exchange.js'
    import * as storage from '../../storage/storage.js'

  test('Get currency rates from localStorage if available', () =>{
    const mockStorage = jest.spyOn(storage, 'getCurrencyRatesFromStorage')
    .mockImplementationOnce( () => {});

    const mockApi = jest.spyOn(api, 'getCurrencyRatesFromApi')
    .mockImplementationOnce( () => {})

    getCurrencyRates()
    expect(mockStorage).toHaveBeenCalledTimes(1)
    expect(mockApi).toHaveBeenCalledTimes(0)
  })

    test('Get currency names from api from localStorage if available', () => {
    const mockStorage = jest.spyOn(storage, 'getCurrenciesNamesFromStorage')
    .mockImplementationOnce( () => {});

    const mockApi = jest.spyOn(api, 'getCurrenciesNamesFromApi')
    .mockImplementationOnce( () => {})

    getCurrenciesNames()
    expect(mockStorage).toHaveBeenCalledTimes(1)
    expect(mockApi).toHaveBeenCalledTimes(0)
  })

  test('Gets currency rates from api if not available on localStorage', () =>{
  })
  const mockStorage = jest.spyOn(storage, 'getCurrencyRatesFromStorage');
    mockStorage.mockImplementationOnce( () => {throw new Error()});

    const mockApi = jest.spyOn(api, 'getCurrencyRatesFromApi')
    mockApi.mockImplementationOnce( () => {})

  getCurrencyRates()
  expect(mockStorage).toHaveBeenCalledTimes(1);
  expect(mockApi).toHaveBeenCalledTimes(1);
  

  test('Gets currency names from api if not available on localStorage', () =>{
    const mockStorage = jest.spyOn(storage, 'getCurrenciesNamesFromStorage')
    .mockImplementationOnce( () => { throw new Error()});

    const mockApi = jest.spyOn(api, 'getCurrenciesNamesFromApi')
    .mockImplementationOnce( () => {})

    getCurrenciesNames()
    expect(mockStorage).toHaveBeenCalledTimes(1)
    expect(mockApi).toHaveBeenCalledTimes(1)
  })

