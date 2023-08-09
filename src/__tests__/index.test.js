import initialize from '../app';
import '../index';
jest.mock('../app', function () { return jest.fn(); });
test('Initializes Exchange rates App', function () {
    expect(initialize).toHaveBeenCalledTimes(1);
});
//# sourceMappingURL=index.test.js.map