/// <reference types= '@types/jest'/>
import initialize from '../app.js';
import '../../index.js';

jest.mock('../app.js', () => jest.fn());

test('Initializes Pokedex App', () => {
  expect(initialize).toHaveBeenCalledTimes(1);
});
