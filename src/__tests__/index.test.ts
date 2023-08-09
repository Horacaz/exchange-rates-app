import initialize from '../app';
import '../index';

jest.mock('../app', () => jest.fn());

test('Initializes Exchange rates App', () => {
  expect(initialize).toHaveBeenCalledTimes(1);
});
